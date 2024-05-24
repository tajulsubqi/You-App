type InputProps = {
  label: string
  placeholder: string
}

const ProfileInput = ({ label, placeholder }: InputProps) => {
  return (
    <>
      <div className="flex items-center">
        <label className="w-1/3 text-sm pr-4 text-slate-400">{label}:</label>
        <input
          type="text"
          className="w-2/3 rounded-md py-2 px-3 outline-none bg-slate-700 placeholder:text-end"
          placeholder={placeholder}
        />
      </div>
    </>
  )
}

export default ProfileInput
