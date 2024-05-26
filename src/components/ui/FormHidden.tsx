import React from "react"
import ProfileInput from "./ProfileInput"
import useAddInterest from "@/hooks/profile/useAddInterest"

const FormHidden = () => {
  const { profileData, handleChange } = useAddInterest()

  return (
    <form className="space-y-4 hidden mt-10">
      <ProfileInput
        value={profileData.name}
        disabled
        label="Display name"
        name="name"
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <ProfileInput
        value={profileData.birthday}
        disabled
        type="date"
        name="birthday"
        label="Birthday"
        onChange={handleChange}
        placeholder="Birthday"
      />
      <ProfileInput
        value={profileData.height}
        disabled
        label="Height"
        name="height"
        type="number"
        onChange={handleChange}
        placeholder="Add height"
      />
      <ProfileInput
        value={profileData.weight}
        disabled
        label="Weight"
        name="weight"
        type="number"
        onChange={handleChange}
        placeholder="Add weight"
      />
    </form>
  )
}

export default FormHidden
