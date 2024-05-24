import { useRouter } from "next/navigation"

export const CheckToken = () => {
  const router = useRouter()
  const token = localStorage.getItem("token")
  if (!token) {
    router.push("/login")
  }
}
