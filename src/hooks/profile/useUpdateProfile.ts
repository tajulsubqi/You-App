import { Api } from "@/libs/axiosInstance"
import { useAppDispatch, useAppSelector } from "@/libs/hooks"
import { ProfileData } from "@/types/ProfileDataType"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useUpdateProfile = ({ toggleModal }: { toggleModal: () => void }) => {
  const dispatch = useAppDispatch()
  const { profile } = useAppSelector((state) => state.profile)
  const query = useQueryClient()

  // Set initial profile data from server
  useEffect(() => {
    setProfileData({
      name: profile.data?.name || "",
      birthday: profile.data?.birthday || "",
      height: profile.data?.height || "",
      weight: profile.data?.weight || "",
    })
  }, [profile])

  const [profileData, setProfileData] = useState<ProfileData | any>({
    name: "",
    birthday: "",
    height: "",
    weight: "",
  })

  const mutation = useMutation({
    mutationFn: async (data: ProfileData) => {
      const token = localStorage.getItem("token")
      const response = await Api.put("/updateProfile", data, {
        headers: {
          "x-access-token": `${token}`,
        },
      })
      return response.data
    },
    onSuccess: () => {
      query.invalidateQueries(profileData)
      toast.success("Profile updated successfully")
      toggleModal()
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || "Failed to update profile"
      toast.error(errorMessage)
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let newValue: string | number = value

    if (name === "height" || name === "weight") {
      if (isNaN(Number(value))) {
        showValidationError(`${name} must be a number`)
        return
      }
      newValue = Number(value)
    }

    setProfileData({ ...profileData, [name]: newValue })
  }

  const showValidationError = (errorMessage: string) => {
    toast.error(errorMessage)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    mutation.mutate(profileData)
  }

  return {
    profileData,
    handleChange,
    handleSubmit,
  }
}

export default useUpdateProfile
