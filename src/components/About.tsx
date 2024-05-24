"use client"
import React, { useState } from "react"
import { CiEdit } from "react-icons/ci"
import ModalAddProfile from "./ui/ModalAddProfile"

const About = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const toggleModal = () => setIsOpenModal(!isOpenModal)
  console.log(isOpenModal)

  return (
    <div className="bg-white bg-opacity-5 rounded-lg mt-5 p-5">
      <div className="flex justify-between items-center">
        <h4>About</h4>
        <button
          onClick={toggleModal}
          className="hover:bg-slate-600 p-1 duration-300 rounded-lg"
        >
          <CiEdit size={22} />
        </button>
      </div>

      <div className="flex flex-col mt-5 text-sm gap-y-3">
        <p className="text-slate-400">
          Birthday : <span className="ml-2 text-white">28/08/2000(Age 28)</span>
        </p>
        <p className="text-slate-400">
          Horoscope : <span className="ml-2 text-white">Virgo</span>
        </p>
        <p className="text-slate-400">
          Zodiac : <span className="ml-2 text-white">Pic</span>
        </p>
        <p className="text-slate-400">
          Height : <span className="ml-2 text-white">175 cm</span>
        </p>
        <p className="text-slate-400">
          Weight : <span className="ml-2 text-white">65 kg</span>
        </p>
      </div>

      <ModalAddProfile isOpen={isOpenModal} toggleModal={toggleModal} />
    </div>
  )
}

export default About
