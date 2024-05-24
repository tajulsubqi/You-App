"use client"
import About from "@/components/About"
import Interest from "@/components/Interest"
import JumbotronProfile from "@/components/JumbotronProfile"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { IoChevronBackOutline } from "react-icons/io5"

type Session = {
  username: string
}

const HomePage = () => {
  const router = useRouter()
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    token ? setSession(jwtDecode<Session>(token)) : router.push("/login")
  }, [])
  console.log(session)

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
        <div className="flex-1 text-right">---</div>
      </div>

      <div className="mt-4 px-3">
        <JumbotronProfile username={session?.username} />
        <About />
        <Interest />
      </div>
    </div>
  )
}

export default HomePage
