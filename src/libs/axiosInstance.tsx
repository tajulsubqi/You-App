import axios from "axios"

export const Api = axios.create({
  baseURL: "https://techtest.youapp.ai/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export const setAuthorization = (token: string) => {
  Api.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

// Check if we are in the browser before accessing localStorage
if (typeof window !== "undefined") {
  const token = localStorage.getItem("token")
  if (token) {
    setAuthorization(token)
  }
}
