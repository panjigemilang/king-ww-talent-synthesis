"use client"

import Image from "next/image"
import { FaChevronCircleUp } from "react-icons/fa"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Input,
} from "@headlessui/react"
import { useCallback, useEffect, useRef, useState } from "react"
import { useCountContext } from "../context/CountContext"

export default function Item({ title, index, isOpen, items = [], onToggle }) {
  const [maxHeight, setMaxHeight] = useState("50px")
  const [mounted, setMounted] = useState(false)
  const { data, updateItemCount, selected } = useCountContext()
  const ref = useRef([])
  const inputRef = useRef([])

  const closeOtherAccordions = useCallback(() => {
    const buttons = document.querySelectorAll(
      'button[data-headlessui-state="open"]'
    )
    buttons.forEach((button) => {
      ref.current !== button && button.click()
    })
  }, [])

  useEffect(() => {
    setMounted(true)
    if (isOpen) setMaxHeight("361px")
  }, [items, isOpen])

  const getBackgroundStar = (type = "") => {
    if (type.includes("five")) return "bg-five-star"
    else if (type.includes("four")) return "bg-four-star"
    else if (type.includes("three")) return "bg-three-star"
    else return "bg-two-star"
  }

  const handleInputChange = (target, idx) => {
    let value = parseInt(target.value)
    const type = selected.value
    const itemIndex = index
    const rarityIndex = idx
    const newCount = value

    // handle number rule: positive number with max = 999
    if (!isNaN(value) && value >= 0 && value <= 999) {
      updateItemCount({
        type,
        itemIndex,
        rarityIndex,
        newCount,
      })
    } else {
      updateItemCount({
        type,
        itemIndex,
        rarityIndex,
      })
    }
  }

  return (
    <Disclosure defaultOpen={isOpen}>
      <div
        className="border my-3 p-3 rounded-lg transition-all duration-400 ease-out"
        style={{
          maxHeight: isOpen ? maxHeight : "50px",
        }}
      >
        <DisclosureButton
          ref={(el) => (ref.current[index] = el)}
          className="group flex w-full items-center justify-between"
          onClick={onToggle}
          onMouseDown={() => {
            mounted && closeOtherAccordions()
          }}
        >
          <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
            {title}
          </span>
          <FaChevronCircleUp
            className={`size-5 fill-white/60 transition duration-200 group-data-[hover]:fill-white/50 group-data-[${
              isOpen && "open"
            }]:rotate-180`}
          />
        </DisclosureButton>
        <DisclosurePanel
          className={`mt-2 flex flex-wrap transition duration-200 ease-out data-[${
            !isOpen && "closed"
          }]:-translate-y-6 data-[${!isOpen && "closed"}]:opacity-0`}
          transition
        >
          <hr className="w-full mb-3" />
          {items.map((item, idx) => (
            <div
              key={item.src}
              className="w-1/2 max-h-[141.5px] p-2 cursor-pointer"
              onClick={() => {
                inputRef.current[idx]?.focus()
                inputRef.current[idx]?.select()
              }}
            >
              <div
                className={`relative mx-auto rounded-lg w-[125px] h-[125px] flex items-center justify-center 
            ${getBackgroundStar(item.type)}`}
              >
                <Image src={item.src} alt={item.alt} width={100} height={120} />
                <Input
                  type="number"
                  name="value"
                  ref={(el) => (inputRef.current[idx] = el)}
                  onChange={({ target }) => handleInputChange(target, idx)}
                  value={data[selected.value].items[index].rarity[idx].count}
                  min={0}
                  max={999}
                  placeholder="0-999"
                  className="absolute rounded-lg py-2 -bottom-3 w-12 border dark:text-black text-sm text-center data-[hover]:shadow data-[focus]:bg-blue-100"
                />
              </div>
            </div>
          ))}
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}
