import React from "react"

export default function BottomCard() {
  return (
    <div className="dark:bg-teal-600 rounded-tl-2xl rounded-tr-2xl p-3 fixed bottom-0 left-0 w-full preserve-3d before:content-['▲'] before:-translate-z-3 before:text-gray-700 before:rounded-full before:text-center before:absolute before:z-10 before:-top-6 before:left-1/2 before:-translate-x-1/2 before:bg-white before:h-12 before:w-12">
      <p className="text-center">Lihat item</p>
    </div>
  )
}
