"use client"
import { ProfileModalType } from "@/types/ProfileModalType"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

const ProfileModal = ({ isOpen, toggleModal, session }: ProfileModalType) => {
  const router = useRouter()
  const handleLogout = () => {
    localStorage.removeItem("token")
    toast.success("Logged out successfully")
    router.push("/login")
    toggleModal()
  }

  return (
    <div>
      {isOpen && (
        <div className="fixed top-14 right-3 flex items-center justify-center bg-black bg-opacity-0 z-50">
          <div className="bg-gray-600 rounded-md shadow-lg">
            <div className="flex flex-col pt-2 px-3">
              <p className="text-[12px]">{session?.username}</p>
              <p className="text-[12px]">{session?.email}</p>
            </div>
            <div className="border-t border-slate-400 bg-slate-800 hover:bg-slate-700 cursor-pointer mt-2 rounded-b-md pb-1">
              {session ? (
                <button
                  onClick={handleLogout}
                  className="w-full h-full text-red-400 font-serif px-3 mt-1"
                >
                  logout
                </button>
              ) : (
                <button
                  onClick={() => router.push("/login")}
                  className="w-full h-full text-green-400 font-serif px-3 mt-1"
                >
                  login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileModal
