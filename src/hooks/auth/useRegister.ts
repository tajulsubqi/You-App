"use client"
import { Api, setAuthorization } from "@/libs/axiosInstance"
import { UserType } from "@/types/UserType"
import { validateRegisterForm } from "@/utils/AuthFormValidation"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import toast from "react-hot-toast"

const useRegister = () => {
  const router = useRouter()

  const [formData, setFormData] = useState<UserType | any>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })

  const mutation = useMutation({
    mutationFn: (data) => Api.post("/register", data),
    onSuccess: (response) => {
      toast.success("Register success")
      router.push("/login")
      console.log(response.data)
    },
    onError: (error) => {
      throw error
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errorMessage = validateRegisterForm(formData)
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

export default useRegister
