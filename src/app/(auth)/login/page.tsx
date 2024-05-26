"use client"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import useLogin from "@/hooks/auth/useLogin"
import Link from "next/link"
import { IoChevronBackOutline } from "react-icons/io5"

const LoginPage = () => {
  const { formData, handleChange, handleSubmit } = useLogin()

  return (
    <>
      <div className="flex items-center text-sm pt-10">
        <IoChevronBackOutline size={25} />
        <span className="ml-2">Back</span>
      </div>

      <div className="pt-12 px-4">
        <h2 className="text-2xl ms-4 font-bold mb-5">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* <Input
            onChange={handleChange}
            name="username"
            value={formData.username}
            placeholder="Enter Username"
            type="text"
          /> */}
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
