"use client"
import Link from "next/link"
import React from "react"
import { IoChevronBackOutline } from "react-icons/io5"

const AddInterest = () => {
  return (
    <div className="w-full min-h-screen bg-primary-gradient text-white">
      <div className="w-full flex items-center text-sm pt-10">
        <Link href={"/home"} className="flex items-center flex-1">
          <IoChevronBackOutline size={25} />
          <p>back</p>
        </Link>

        <div className="mr-3 text-sky-300 font-semibold">Save</div>
      </div>

      <div className="mt-16 px-8">
        <h4 className="text-md text-yellow-200">Tell everyone about yourself</h4>
        <h2 className="text-2xl mt-3 font-bold">What interest you?</h2>

        <div className="flex flex-wrap gap-2 bg-white bg-opacity-10 rounded-lg mt-8 px-4 py-3">
          <p className="bg-white bg-opacity-15 text-sm rounded px-3 py-1">music</p>
          <p className="bg-white bg-opacity-15 text-sm rounded px-3 py-1">music</p>
        </div>
      </div>
    </div>
  )
}

export default AddInterest
