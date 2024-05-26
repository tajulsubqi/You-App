"use client"
import FormHidden from "@/components/ui/FormHidden"
import InterestInput from "@/components/ui/InterestInput"
import useAddInterest from "@/hooks/profile/useAddInterest"
import Link from "next/link"
import { IoChevronBackOutline } from "react-icons/io5"

const AddInterest = () => {
  const { handleSubmit, handleTagChange, tags, inputValue, handleKeyDown, setTags } =
    useAddInterest()

  return (
    <div className="w-full min-h-screen bg-primary-gradient text-white">
      <div className="w-full flex items-center justify-between text-sm pt-10">
        <Link href="/home" className="flex items-center">
          <IoChevronBackOutline size={25} />
          <p>back</p>
        </Link>
        <button className="text-sky-300 text-[15px] mr-3 " onClick={handleSubmit}>
          Save
        </button>
      </div>

      <div className="mt-16 px-8">
        <h4 className="text-md text-yellow-200">Tell everyone about yourself</h4>
        <FormHidden />
        <InterestInput
          tags={tags}
          onChange={handleTagChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          setTags={setTags}
        />
      </div>
    </div>
  )
}

export default AddInterest
