"use client"

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react"
import { FaCheck, FaChevronDown } from "react-icons/fa"
import clsx from "clsx"
import { useCountContext } from "../context/CountContext"
import { menus } from "../services/Data"

export default function ListBox() {
  const { selected, setselected } = useCountContext()

  return (
    <Listbox value={selected} onChange={setselected}>
      <ListboxButton
        className={clsx(
          "relative block w-full rounded-lg bg-white/15 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      >
        {selected.text}
        <FaChevronDown
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--button-width)] rounded-xl border border-white/5 bg-slate-500/90 p-1 z-50 [--anchor-gap:var(--spacing-1)] focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {menus.map((menu) => (
          <ListboxOption
            key={menu.id}
            value={menu}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
          >
            <FaCheck className="invisible size-4 fill-white group-data-[selected]:visible" />
            <div className="text-sm/6 text-white">{menu.text}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
