import { ProfileData } from "@/types/ProfileDataType"
import Image from "next/image"
import img from "../../public/img.png"

interface JumbotronProfileProps {
  username: string
  profileData: ProfileData
}

const JumbotronProfile = ({ username, profileData }: JumbotronProfileProps) => {
  return (
    <div className="relative">
      <Image
        src={img}
        alt="Vercel Logo"
        width={100}
        height={24}
        className="w-full h-52 rounded-lg"
      />
      <div className="absolute bottom-4 left-4">
        <p>@{username}</p>
        <p className="text-sm text-slate-300">male</p>

        <div className="flex gap-x-2 mt-3">
          <p className="bg-gray-800 rounded-full px-4 py-2 text-sm">
            {profileData.zodiac || "N/A"}
          </p>
          <p className="bg-gray-800 rounded-full px-4 py-2 text-sm">
            {profileData.horoscope || "N/A"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default JumbotronProfile
