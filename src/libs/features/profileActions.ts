import { createAsyncThunk } from "@reduxjs/toolkit"
import { Api } from "../axiosInstance"

// Create Profile
export const createProfile = createAsyncThunk("createProfile", async (data: any) => {
  try {
    const token = localStorage.getItem("token")
    const response = await Api.post("/createProfile", data, {
      headers: {
        "x-access-token": `${token}`,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
})

//Get Profile
export const getProfile = createAsyncThunk("getProfile", async () => {
  try {
    const token = localStorage.getItem("token")
    const response = await Api.get("/getProfile", {
      headers: {
        "x-access-token": `${token}`,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
})

//Update Profile
export const updateProfile = createAsyncThunk("updateProfile", async (data: any) => {
  try {
    const token = localStorage.getItem("token")
    const response = await Api.put("/updateProfile", data, {
      headers: {
        "x-access-token": `${token}`,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
})
