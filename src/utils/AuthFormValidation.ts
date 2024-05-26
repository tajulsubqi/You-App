import { UserType } from "@/types/UserType"

export const validateLoginForm = (formData: UserType) => {
  if (!formData.email) {
    return "Email is required"
  }
  if (!formData.password) {
    return "Password is required"
  }
  if (formData.password.length < 8) {
    return "Password must be at least 8 characters"
  }
  return null
}

export const validateRegisterForm = (formData: UserType) => {
  if (!formData.email) {
    return "Email is required"
  }
  if (!formData.username) {
    return "Username is required"
  }
  if (!formData.password) {
    return "Password is required"
  }
  if (formData.password.length < 8) {
    return "Password must be at least 8 characters"
  }
  if (formData.password !== formData.confirmPassword) {
    return "Passwords do not match"
  }
  return null
}
