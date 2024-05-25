import { ProfileInputType } from "@/types/ProfileInputType"

const ProfileInput = (Props: ProfileInputType) => {
  const { label, placeholder, name, value, type, disabled, onChange } = Props

  return (
    <>
      <div className="flex items-center">
        <label className="w-1/3 text-sm pr-4 text-slate-400">{label}:</label>
        <input
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
          type={type}
          className="w-2/3 rounded-md py-2 px-3 text-sm outline-none bg-slate-700 placeholder:text-end"
          placeholder={placeholder}
        />
      </div>
    </>
  )
}

export default ProfileInput
