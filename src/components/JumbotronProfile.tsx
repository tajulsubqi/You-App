import Image from "next/image"
import img from "../../public/img.png"

const JumbotronProfile = ({ username }: any) => {
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

        <div className="flex gap-x-3 mt-3">
          <p className="bg-gray-700 rounded-full px-3 py-1 text-sm">virgo</p>
          <p className="bg-gray-700 rounded-full px-3 py-1 text-sm">virgo</p>
        </div>
      </div>
    </div>
  )
}

export default JumbotronProfile
