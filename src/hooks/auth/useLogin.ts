"use client"
import { Api, setAuthorization } from "@/libs/axiosInstance"
import { UserType } from "@/types/UserType"
import { validateLoginForm } from "@/utils/AuthFormValidation"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useLogin = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<UserType | any>({
    username: "",
    email: "",
    password: "",
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      router.push("/")
    }
  }, [router])

  const mutation = useMutation({
    mutationFn: (data: UserType) => Api.post("/login", data),
    onSuccess: (response) => {
      const token = response.data.access_token
      if (token) {
        setAuthorization(token)
        localStorage.setItem("token", token)
        toast.success("Login successful")
        router.push("/")
      } else {
        toast.error("Token not found in the response")
      }
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || "Login failed"
      toast.error(errorMessage)
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errorMessage = validateLoginForm(formData)
    if (errorMessage) {
      toast.error(errorMessage)
      return
    }
    mutation.mutate(formData)
  }

  return {
    formData,
    handleChange,
    handleSubmit,
  }
}

export default useLogin
