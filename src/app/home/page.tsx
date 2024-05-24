import React from "react"
import { IoChevronBackOutline } from "react-icons/io5"
import About from "@/components/About"
import Interest from "@/components/Interest"
import JumbotronProfile from "@/components/JumbotronProfile"

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-dark text-white">
      <div className="w-full flex items-center text-sm pt-10">
        <div className="flex items-center flex-1">
          <IoChevronBackOutline size={25} />
          <p>back</p>
        </div>
        <div className="flex-1 text-center">
          <p>@jhondoe</p>
        </div>
        <div className="flex-1 text-right">---</div>
      </div>

      <div className="mt-4 px-3">
        <JumbotronProfile />
        <About />
        <Interest />
      </div>
    </div>
  )
}

export default HomePage
