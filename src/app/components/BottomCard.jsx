"use client"

import { useState } from "react"
import { useCountContext } from "../context/CountContext"
import { Transition } from "@headlessui/react"
import Result from "./Result"

export default function BottomCard() {
  const [fullscreen, setfullscreen] = useState(false)
  const { data } = useCountContext()

  return (
    <div
      className={`dark:bg-teal-600 transition-all duration-300 fixed left-0 w-full preserve-3d cursor-pointer before:content-['▲'] before:-translate-z-3 before:text-gray-700 before:rounded-full before:text-center before:absolute before:z-10 before:-top-6 before:left-1/2 before:-translate-x-1/2 before:bg-white before:h-12 before:w-12 ${
        fullscreen ? "top-0" : "rounded-tl-2xl rounded-tr-2xl top-[95vh]"
      }`}
      onClick={() => setfullscreen(!fullscreen)}
    >
      <p className="p-3 text-center">Lihat item</p>
      <Transition as={"div"} show={fullscreen}>
        <Result />
      </Transition>
    </div>
  )
}
