"use client"
import { ProfileData } from "@/types/ProfileDataType"
import { calculateAge } from "@/utils/CalculateAge"
import { useState } from "react"
import { CiEdit } from "react-icons/ci"
import CreateProfileModal from "./CreateProfileModal"

interface AboutProps {
  profileData: ProfileData
  isLoading: boolean
}

const About = ({ profileData, isLoading }: AboutProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const toggleModal = () => setIsOpenModal(!isOpenModal)

  return (
    <div className="bg-white bg-opacity-5 rounded-lg mt-5 p-5">
      <div className="flex justify-between items-center">
        <h4>About</h4>
        <button
          onClick={toggleModal}
          className="hover:bg-slate-600 p-1 duration-300 rounded-lg"
        >
          <CiEdit size={22} />
        </button>
      </div>

      {isLoading ? (
        <div className="text-center my-11">Loading...</div>
      ) : (
        <div className="flex flex-col mt-5 text-sm gap-y-3">
          <p className="text-slate-400">
            Display name :{" "}
            <span className="ml-2 text-white">{profileData.name || "N/A"}</span>
          </p>
          <p className="text-slate-400">
            Birthday :{" "}
            <span className="ml-2 text-white">
              {profileData.birthday || "N/A"} (Age{" "}
              {profileData.birthday ? calculateAge(profileData.birthday) : "N/A"})
            </span>
          </p>
          <p className="text-slate-400">
            Horoscope :{" "}
            <span className="ml-2 text-white">{profileData.horoscope || "N/A"}</span>
          </p>
          <p className="text-slate-400">
            Zodiac :{" "}
            <span className="ml-2 text-white">{profileData.zodiac || "N/A"}</span>
          </p>
          <p className="text-slate-400">
            Height :{" "}
            <span className="ml-2 text-white">
              {profileData.height ? `${profileData.height} cm` : "N/A"}
            </span>
          </p>
          <p className="text-slate-400">
            Weight :{" "}
            <span className="ml-2 text-white">
              {profileData.weight ? `${profileData.weight} kg` : "N/A"}
            </span>
          </p>
        </div>
      )}

      <CreateProfileModal isOpen={isOpenModal} toggleModal={toggleModal} />
    </div>
  )
}

export default About
