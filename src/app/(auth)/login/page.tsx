"use client"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { Api, setAuthorization } from "@/libs/axiosInstance"
import { AuthType } from "@/types/AuthType"
import { validateLoginForm } from "@/utils/AuthValidate"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import { IoChevronBackOutline } from "react-icons/io5"

const LoginPage = () => {
  const router = useRouter()
  const query = useQueryClient()

  const [formData, setFormData] = useState<AuthType | any>({
    username: "",
    email: "",
    password: "",
  })

  const mutation = useMutation({
    mutationFn: (data) => Api.post("/login", data),
    onSuccess: (response) => {
      query.invalidateQueries({ queryKey: ["user"] })
      const token = response.data.access_token
      setAuthorization(token)
      localStorage.setItem("token", token)
      console.log(response.data)
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

  return (
    <>
      <div className="flex items-center text-sm pt-10">
        <IoChevronBackOutline size={25} />
        <span className="ml-2">Back</span>
      </div>

      <div className="pt-12 px-4">
        <h2 className="text-2xl ms-4 font-bold mb-5">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            onChange={handleChange}
            name="username"
            value={formData.username}
            placeholder="Enter Username"
            type="text"
          />
          <Input
            onChange={handleChange}
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            type="email"
          />
          <Input
            onChange={handleChange}
            name="password"
            value={formData.password}
            placeholder="Enter password"
            type="password"
          />
          <Button type="submit" label="Login" />
          <p className="text-center text-sm">
            No account?{" "}
            <Link href="/register" className="text-yellow-400 underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default LoginPage
