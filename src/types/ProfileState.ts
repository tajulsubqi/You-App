export interface ProfileData {
  name: string
  username?: string
  birthday: string
  horoscope?: string
  zodiac?: string
  height: number | string
  weight: number | string
  interests?: string[]
}

export interface ProfileState {
  profile: ProfileData | [] | any
  isLoading: boolean
  error: any
}
