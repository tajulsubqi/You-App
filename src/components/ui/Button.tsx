import React from "react"

type ButtonType = {
  label: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

const Button = ({ label, type, onClick }: ButtonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn bg-button-gradient hover:bg-button-gradient-hover font-semibold py-3 rounded-lg mt-3"
    >
      {label}
    </button>
  )
}

export default Button
