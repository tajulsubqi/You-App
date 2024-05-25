import { SelectType } from "@/types/SelectType"

const SelectInput = ({ label, value, onChange }: SelectType) => {
  return (
    <div className="flex items-center">
      <label className="w-1/3 text-sm pr-4 text-slate-400">{label}:</label>
      <select
        value={value}
        onChange={onChange}
        className="w-2/3 rounded-md py-2 px-3 text-end text-sm outline-none bg-slate-700"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  )
}

export default SelectInput
