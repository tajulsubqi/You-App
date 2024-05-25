"use client"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const DateInput = ({ label }: { label: string }) => {
  // Fungsi untuk mendapatkan tanggal hari ini dalam format yyyy-MM-dd
  const getFormattedDate = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    // Set nilai awal dengan tanggal hari ini dalam format yyyy-MM-dd
    new Date(getFormattedDate()),
  )

  const handleChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  return (
    <div className="flex items-center">
      <label className="w-1/3 text-sm pr-4 text-slate-400">{label}:</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd" // Format tanggal yang diinginkan
        className="w-[117%] rounded-md py-2 px-3 text-sm outline-none bg-slate-700 placeholder:text-end"
      />
    </div>
  )
}

export default DateInput
