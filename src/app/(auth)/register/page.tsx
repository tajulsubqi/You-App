"use client"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import useRegister from "@/hooks/useRegister"
import Link from "next/link"
import { IoChevronBackOutline } from "react-icons/io5"

const RegisterPage = () => {
  const { formData, handleChange, handleSubmit } = useRegister()

  return (
    <>
      <div className="flex items-center text-sm pt-10">
        <IoChevronBackOutline size={25} />
        <span className="ml-2">Back</span>
      </div>

      <div className="mt-12 px-4">
        <h2 className="text-2xl ms-4 font-bold mb-5">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            name="username"
            onChange={handleChange}
            value={formData.username}
            placeholder="Create username"
            type="text"
          />
          <Input
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Create email"
            type="text"
          />
          <Input
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Create password"
            type="password"
          />
          <Input
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
            placeholder="Confirm password"
            type="password"
          />

          <Button type="submit" label="Register" />
          <p className="text-center text-sm">
            Have an account?{" "}
            <Link href="/login" className="text-yellow-400 underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default RegisterPage
