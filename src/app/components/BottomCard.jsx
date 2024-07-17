"use client"

import { useState } from "react"
import { Transition } from "@headlessui/react"
import Result from "./Result"
import Image from "next/image"
import ButtonClose from "./ButtonClose"

export default function BottomCard() {
  const [fullscreen, setfullscreen] = useState(false)

  return (
    <div
      className={`transition-all duration-300 fixed left-0 w-full preserve-3d before:content-['▲'] before:-translate-z-3 before:text-gray-700 before:rounded-full before:text-center before:absolute before:z-10 before:-top-6 before:left-1/2 before:-translate-x-1/2 before:bg-white before:h-12 before:w-12 ${
        fullscreen
          ? "-bottom-12"
          : "rounded-tl-2xl rounded-tr-2xl -bottom-[100vh]"
      }`}
    >
      <p
        className={`relative p-3 text-center z-30 font-bold cursor-pointer before:content-[''] before:-translate-z-3 before:text-gray-700 before:rounded-full before:text-center before:absolute before:z-10 before:-top-6 before:left-1/2 before:-translate-x-1/2 before:bg-transparent before:h-12 before:w-12 ${
          fullscreen
            ? "bg-red-500/70"
            : "bg-slate-700/90 rounded-tl-2xl rounded-tr-2xl"
        }`}
        onClick={() => setfullscreen(!fullscreen)}
      >
        {fullscreen ? "Tutup" : "Lihat item"}
      </p>
      {fullscreen && (
        <div>
          <div className="layover absolute top-0 left-0 w-full h-full z-10"></div>
          <Image
            src={"https://picfiles.alphacoders.com/615/615637.jpg"}
            alt="king_ww_result"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <Result />
      {fullscreen && <ButtonClose onClick={() => setfullscreen(!fullscreen)} />}
    </div>
  )
}
