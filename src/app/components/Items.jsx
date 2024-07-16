"use client"

import { useState } from "react"
import Item from "./Item"
import { items } from "../services/Data"

export default function Items() {
  const [openIndex, setopenIndex] = useState(0)

  const toggleOpen = (idx) => {
    setopenIndex((prevIndex) => (prevIndex === idx ? null : idx))
  }

  return items.map((item, idx) => (
    <Item
      key={item.title}
      title={item.title}
      index={idx}
      items={item.rarity}
      isOpen={openIndex === idx}
      onToggle={() => toggleOpen(idx)}
    ></Item>
  ))
}
