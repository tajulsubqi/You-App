export type ProfileInputType = {
  label?: string
  placeholder: string
  name?: string
  value?: string | number
  type?: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
