"use client"
import { Api, setAuthorization } from "@/libs/axiosInstance"
import { AuthType } from "@/types/UserType"
import { validateLoginForm } from "@/utils/AuthFormValidation"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useLogin = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<AuthType | any>({
    username: "",
    email: "",
    password: "",
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      router.push("/")
    }
  }, [])

  const mutation = useMutation({
    mutationFn: (data: AuthType) => Api.post("/login", data),
    onSuccess: (response) => {
      const token = response.data.access_token
      setAuthorization(token)
      localStorage.setItem("token", token)
      toast.success("Login success")
      router.push("/")
    },
    onError: (error: any) => {
      toast.error(error.response?.data.message)
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
