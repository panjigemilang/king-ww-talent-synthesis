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
    const newCount = target.value
    const type = selected.value
    const itemIndex = index
    const rarityIndex = idx
    const isValidNumber = /^[1-9][0-9]{0,2}$|^0$/.test(newCount)

    // handle number rule: positive number with max = 999
    if (isValidNumber || newCount === "")
      updateItemCount({
        type,
        itemIndex,
        rarityIndex,
        newCount: parseInt(newCount) || "",
      })
  }

  return (
    <Disclosure defaultOpen={isOpen}>
      <div
        className="border mb-3 p-3 rounded-lg transition-all duration-400 ease-out"
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
                className={`relative mx-auto rounded-lg w-[125px] sm:w-[90px] h-[125px] sm:h-[90px] flex items-center justify-center 
            ${getBackgroundStar(item.type)}`}
              >
                <div className="relative w-[100px] h-[120px] md:w-[70px] md:h-[90px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    sizes="100px"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Input
                  type="text"
                  name="value"
                  ref={(el) => (inputRef.current[idx] = el)}
                  onChange={({ target }) => handleInputChange(target, idx)}
                  value={data[selected.value].items[index].rarity[idx].count}
                  min={0}
                  max={999}
                  placeholder="0-999"
                  className="absolute rounded-lg py-1 md:py-0 -bottom-3 w-14 md:w-12 border text-black text-sm text-center data-[hover]:shadow data-[focus]:bg-blue-100"
                />
              </div>
            </div>
          ))}
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}
