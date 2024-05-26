"use client"
import { createProfile, getProfile } from "@/libs/features/profileActions"
import { useAppDispatch, useAppSelector } from "@/libs/hooks"
import { ProfileData } from "@/types/ProfileDataType"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useAddInterest = () => {
  const { profile } = useAppSelector((state) => state.profile)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [inputValue, setInputValue] = useState("")

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault()
      const newTags = [...tags, inputValue.trim()]
      const filteredTags = newTags.filter(
        (tag, index, self) => tag !== "" && self.indexOf(tag) === index,
      )
      setTags(filteredTags)
      setInputValue("")
    }
  }

  const [tags, setTags] = useState<string[]>([])
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    username: "",
    birthday: "",
    horoscope: "",
    zodiac: "",
    height: "",
    weight: "",
    interests: [],
  })

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  useEffect(() => {
    if (profile?.data) {
      setProfileData(profile.data)
      setTags(profile.data.interests || [])
    }
  }, [profile])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData({
      ...profileData,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    dispatch(createProfile({ ...profileData, interests: tags }))
    toast.success("Profile created successfully")
    router.push("/")
  }

  return {
    profileData,
    setProfileData,
    handleChange,
    handleTagChange,
    handleKeyDown,
    tags,
    setTags,
    inputValue,
    handleSubmit,
  }
}

export default useAddInterest
