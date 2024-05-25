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

Api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Set the token if it exists in localStorage
if (typeof window !== "undefined") {
  const token = localStorage.getItem("token")
  if (token) {
    setAuthorization(token)
  }
}
