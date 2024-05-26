import { createSlice } from "@reduxjs/toolkit"
import { createProfile, getProfile, updateProfile } from "./profileActions"
import { ProfileState } from "@/types/ProfileState"

const initialState: ProfileState = {
  profile: [],
  isLoading: false,
  error: null,
}

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.profile = action.payload
      })

      //get profile
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.profile = action.payload
      })

      //update profile
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.profile = action.payload
      })
  },
})

export default profileSlice.reducer
