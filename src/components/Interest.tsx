import { getProfile } from "@/libs/features/profileActions"
import { useAppDispatch, useAppSelector } from "@/libs/hooks"
import Link from "next/link"
import { useEffect } from "react"
import { CiEdit } from "react-icons/ci"

const Interest = () => {
  const dispatch = useAppDispatch()
  const { profile } = useAppSelector((state) => state.profile)

  const profileData: string[] = profile?.data?.interests || []

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  return (
    <div className="bg-white bg-opacity-5 rounded-lg mt-5 p-5">
      <div className="flex justify-between items-center">
        <h4>Interest</h4>
        <Link
          href={"add-interest"}
          className="hover:bg-slate-600 p-1 duration-300 rounded-lg"
        >
          <CiEdit size={22} />
        </Link>
      </div>
      <div className="flex flex-col mt-5 text-sm gap-y-3">
        <div className="flex flex-wrap gap-2">
          {profileData.map((interest) => (
            <p key={interest} className="px-4 py-1 bg-white bg-opacity-15 rounded-full">
              {" "}
              {interest}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Interest
