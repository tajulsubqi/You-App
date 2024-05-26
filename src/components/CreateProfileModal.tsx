"use client"
import useUpdateProfile from "@/hooks/profile/useUpdateProfile"
import Image from "next/image"
import img from "../../public/img.png"
import ProfileInput from "./ui/ProfileInput"

interface CreateProfileModalProps {
  isOpen: boolean
  toggleModal: () => void
}

const CreateProfileModal = ({ isOpen, toggleModal }: CreateProfileModalProps) => {
  const { handleSubmit, profileData, handleChange } = useUpdateProfile({
    toggleModal,
  })

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
            onClick={handleSubmit}
            className="text-yellow-400 text-sm hover:bg-gray-600 p-2 rounded-md"
          >
            Save & Update
          </button>
        </div>
        <div className="flex gap-x-4 items-center my-6">
          <Image
            src={img}
            alt="Profile Image"
            width={100}
            height={24}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <button className="text-[13px]">Add image</button>
        </div>
        <form className="space-y-4">
          <ProfileInput
            label="Display name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <ProfileInput
            type="date"
            name="birthday"
            label="Birthday"
            value={profileData.birthday}
            onChange={handleChange}
            placeholder="Birthday"
          />
          <ProfileInput type="name" disabled label="Hiroscope" placeholder="---" />
          <ProfileInput type="text" label="Zodiac" disabled placeholder="---" />
          <ProfileInput
            label="Height"
            name="height"
            value={profileData.height}
            onChange={handleChange}
            type="number"
            placeholder="Add height"
          />
          <ProfileInput
            label="Weight"
            name="weight"
            value={profileData.weight}
            onChange={handleChange}
            type="number"
            placeholder="Add weight"
          />
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

export default CreateProfileModal
