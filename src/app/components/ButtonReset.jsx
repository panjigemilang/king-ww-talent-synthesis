"use client"

import { GrPowerReset } from "react-icons/gr"
import { useCountContext } from "../context/CountContext"
import { Transition } from "@headlessui/react"

export default function ButtonReset() {
  const { filterItemsWithNonZeroCount: data, resetData } = useCountContext()

  return (
    <Transition
      as={"div"}
      show={data().butuh.items.length || data().punya.items.length}
    >
      <button
        className="fixed data-[closed]:opacity-0 flex items-center right-4 bottom-14 p-2 rounded-lg border-2 border-red-400 bg-red-700/50"
        onClick={resetData}
      >
        <GrPowerReset className="text-red-400 text-xl" />
        <span className="text-lg md:text-base">&ensp;Reset</span>
      </button>
    </Transition>
  )
}
