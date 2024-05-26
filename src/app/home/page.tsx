"use client"
import About from "@/components/About"
import Interest from "@/components/Interest"
import JumbotronProfile from "@/components/JumbotronProfile"
import ProfileModal from "@/components/ui/ProfileModal"
import { Api } from "@/libs/axiosInstance"
import { ProfileData } from "@/types/ProfileDataType"
import { SessionType } from "@/types/SessionType"
import { useQuery } from "@tanstack/react-query"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { IoChevronBackOutline } from "react-icons/io5"
import { PiDotsThreeOutlineFill } from "react-icons/pi"

const HomePage = () => {
  const router = useRouter()
  const [session, setSession] = useState<SessionType>(null!)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => setIsModalOpen(!isModalOpen)

  const { data, isLoading } = useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await Api.get("/getProfile", {
          headers: {
            "x-access-token": `${token}`,
          },
        })
        console.log(response.data)
        return response.data
      } catch (error) {
        throw new Error("Failed to fetch profile data")
      }
    },
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
    token ? setSession(jwtDecode<SessionType>(token)) : router.push("/login")
  }, [])

  const profileData: ProfileData = data?.data ?? {}

  return (
    <div className="w-full min-h-screen bg-dark text-white">
      <div className="w-full flex items-center text-sm pt-10">
        <div className="flex items-center flex-1">
          <IoChevronBackOutline size={25} />
          <p>back</p>
        </div>
        <div className="flex-1 text-center">
          <p>@{session?.username}</p>
        </div>

        <div className="flex-1 text-right">
          <button onClick={toggleModal} className="mr-3">
            <PiDotsThreeOutlineFill size={22} />
          </button>
        </div>
      </div>

      <div className="mt-4 px-3">
        <JumbotronProfile username={session?.username} profileData={profileData} />
        <About profileData={profileData} isLoading={isLoading} />
        <Interest />
      </div>

      <ProfileModal isOpen={isModalOpen} toggleModal={toggleModal} session={session} />
    </div>
  )
}

export default HomePage
