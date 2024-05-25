"use client"
import InterestInput from "@/components/ui/InterestInput"
import TagInput from "@/components/ui/TagInput"
import Link from "next/link"
import { IoChevronBackOutline } from "react-icons/io5"

const AddInterest = () => {
  return (
    <div className="w-full min-h-screen bg-primary-gradient text-white">
      <div className="w-full flex items-center justify-between text-sm pt-10">
        <Link href="/home" className="flex items-center">
          <IoChevronBackOutline size={25} />
          <p>back</p>
        </Link>
        <button className="mr-5 text-sky-300 font-semibold">Save</button>
      </div>

      <div className="mt-16 px-8">
        <h4 className="text-md text-yellow-200">Tell everyone about yourself</h4>

        <InterestInput />
      </div>
    </div>
  )
}

export default AddInterest
