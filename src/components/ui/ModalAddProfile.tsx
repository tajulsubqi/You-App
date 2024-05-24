import Image from "next/image"
import React from "react"
import img from "../../../public/img.png"
import ProfileInput from "./ProfileInput"

type ModalProps = {
  isOpen: boolean
  toggleModal: () => void
}

const ModalAddProfile = ({ isOpen, toggleModal }: ModalProps) => {
  return (
    <div className={`modal ${isOpen ? "modal-open" : "modal-closed"}`}>
      <div className="fixed inset-0 bg-black bg-opacity-40" onClick={toggleModal}></div>
      <div
        className={`modal-container ${
          isOpen ? "modal-open-transform" : "modal-closed-transform"
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <h2 className="text-md font-semibold">About</h2>
          <button
            onClick={toggleModal}
            className=" text-yellow-400 text-sm hover:bg-gray-600 p-2 rounded-md"
          >
            Save & Update
          </button>
        </div>

        {/* Add image */}
        <div className="flex gap-x-4 items-center my-6">
          <Image
            src={img}
            alt="Vercel Logo"
            width={100}
            height={24}
            className="w-16 h-16 rounded-lg object-cover"
          />

          <button className="text-[13px]">Add image</button>
        </div>

        <form className="space-y-4">
          <ProfileInput label="Display name" placeholder="Enter your name" />
          <ProfileInput label="Gender" placeholder="Select Gender" />
          <ProfileInput label=" BirthDay" placeholder="Birtday" />
          <ProfileInput label="Horoscope" placeholder="Enter your name" />
          <ProfileInput label="Zodiac" placeholder="Enter your name" />
          <ProfileInput label="Height" placeholder="Enter your name" />
          <ProfileInput label="Weight" placeholder="Enter your name" />
        </form>

        <div className="mt-4 flex justify-end">
          <button
            onClick={toggleModal}
            className="px-4 py-1 mt-2 bg-red-400 text-white rounded-full hover:bg-red-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalAddProfile
