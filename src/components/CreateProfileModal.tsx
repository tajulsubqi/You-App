"use client"
import Image from "next/image"
import React, { useState } from "react"
import img from "../../public/img.png"
import ProfileInput from "./ui/ProfileInput"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Api } from "@/libs/axiosInstance"
import toast from "react-hot-toast"
import { ProfileData } from "@/types/ProfileDataType"

interface CreateProfileModalProps {
  isOpen: boolean
  toggleModal: () => void
}

const CreateProfileModal = ({ isOpen, toggleModal }: CreateProfileModalProps) => {
  const query = useQueryClient()
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    birthday: "",
    height: "",
    weight: "",
  })

  const mutation = useMutation({
    mutationFn: async (data: ProfileData) => {
      try {
        const token = localStorage.getItem("token")
        const response = await Api.put("/updateProfile", data, {
          headers: {
            "x-access-token": `${token}`,
          },
        })
        console.log(response.data)
        return response.data
      } catch (error) {
        throw error
      }
    },
    onSuccess: (data) => {
      toast.success("Profile created successfully")
      setProfileData({
        name: "",
        birthday: "",
        height: "",
        weight: "",
        interests: [],
      })
      console.log(data)
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || "Profile creation failed"
      toast.error(errorMessage)
      console.error(errorMessage)
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
  // const handleInterestChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   index: number,
  // ) => {
  //   const interests = [...profileData.interests]
  //   interests[index] = e.target.value
  //   setProfileData({
  //     ...profileData,
  //     interests,
  //   })
  // }

  // const addInterest = () => {
  //   setProfileData({
  //     ...profileData,
  //     interests: [...profileData.interests, ""],
  //   })
  // }

  // const removeInterest = (index: number) => {
  //   const interests = [...profileData.interests]
  //   interests.splice(index, 1)
  //   setProfileData({
  //     ...profileData,
  //     interests,
  //   })
  // }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    mutation.mutate(profileData)
    query.invalidateQueries()
    toggleModal()
  }

  return (
    <div className={`modal ${isOpen ? "modal-open" : "modal-closed"}`}>
      <div className="fixed inset-0 bg-black bg-opacity-40" onClick={toggleModal}></div>
      <div
        className={`modal-container ${
          isOpen ? "modal-open-transform" : "modal-closed-transform"
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <h2 className="text-md font-semibold">About</h2>
          <button
            onClick={handleSubmit}
            className="text-yellow-400 text-sm hover:bg-gray-600 p-2 rounded-md"
          >
            Save & Update
          </button>
        </div>
        <div className="flex gap-x-4 items-center my-6">
          <Image
            src={img}
            alt="Profile Image"
            width={100}
            height={24}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <button className="text-[13px]">Add image</button>
        </div>
        <form className="space-y-4">
          <ProfileInput
            label="Display"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <ProfileInput
            type="date"
            name="birthday"
            label="Birthday"
            value={profileData.birthday}
            onChange={handleChange}
            placeholder="Birthday"
          />
          <ProfileInput type="name" disabled label="Hiroscope" placeholder="---" />
          <ProfileInput type="text" label="Zodiac" disabled placeholder="---" />
          <ProfileInput
            label="Height"
            name="height"
            value={profileData.height}
            onChange={handleChange}
            type="number"
            placeholder="Add height"
          />
          <ProfileInput
            label="Weight"
            name="weight"
            value={profileData.weight}
            onChange={handleChange}
            type="number"
            placeholder="Add weight"
          />
          {/* {profileData.interests.map((interest, index) => (
            <div key={index} className="flex items-center">
              <ProfileInput
                label={`Interest ${index + 1}`}
                name={`interest${index}`}
                value={interest}
                onChange={(e) => handleInterestChange(e, index)}
                type="text"
                placeholder="Add interest"
              />
              <button
                type="button"
                onClick={() => removeInterest(index)}
                className="text-red-500 ml-2"
              >
                Remove
              </button>
            </div>
          ))} */}
          {/* <button type="button" onClick={addInterest} className="text-blue-500">
            Add Interest
          </button> */}
        </form>
        <div className="mt-4 flex justify-end">
          <button
            onClick={toggleModal}
            className="px-4 py-1 mt-2 bg-red-400 text-white rounded-full hover:bg-red-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateProfileModal
