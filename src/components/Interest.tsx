import { ProfileData } from "@/types/ProfileDataType"
import Link from "next/link"
import React from "react"
import { CiEdit } from "react-icons/ci"

type Props = {
  profileData: ProfileData
}

const Interest = ({ profileData }: Props) => {
  console.log(profileData)
  return (
    <div className="bg-white bg-opacity-5 rounded-lg mt-5 p-5">
      <div className="flex justify-between items-center">
        <h4>Interest</h4>
        <Link
          href={"add-interest"}
          className="hover:bg-slate-600 p-1 duration-300 rounded-lg"
        >
          <CiEdit size={22} />
        </Link>
      </div>
      <div className="flex flex-col mt-5 text-sm gap-y-3">
        {/* <p className="text-slate-400">Add in your interest to find a better match</p> */}

        <div className="flex flex-wrap gap-3">
          <p className="px-4 py-1 bg-white bg-opacity-15 rounded-full">
            {profileData.interests}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Interest
