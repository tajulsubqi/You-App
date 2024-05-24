"use client"
import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

type InputProps = {
  type: string
  placeholder: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  name?: string
}

const Input = ({ type, placeholder, onChange, value, name }: InputProps) => {
  const [inputType, setInputType] = useState(type)

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"))
  }

  return (
    <div className="relative w-full">
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={inputType}
        placeholder={placeholder}
        className="w-full input-bordered input bg-white bg-opacity-10 py-3 px-3 rounded-lg outline-none placeholder:text-sm"
      />
      {type === "password" && (
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {inputType === "password" ? (
            <FaEyeSlash size={20} className="text-gray-400" />
          ) : (
            <FaEye size={20} className="text-gray-400" />
          )}
        </div>
      )}
    </div>
  )
}

export default Input
