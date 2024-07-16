"use client"

import { createContext, useContext, useState } from "react"
import { menus } from "../services/Data"

const CountContext = createContext()
const rarity = [
  {
    type: "gold",
    count: "",
  },
  {
    type: "purple",
    count: "",
  },
  {
    type: "blue",
    count: "",
  },
  {
    type: "green",
    count: "",
  },
]
const items = [
  {
    title: "lendir",
    rarity,
  },
  {
    title: "biji",
    rarity,
  },
  {
    title: "daun_api",
    rarity,
  },
  {
    title: "spiral_bokong",
    rarity,
  },
  {
    title: "akar_jmbt",
    rarity,
  },
]
const initData = {
  butuh: {
    items,
  },
  punya: {
    items,
  },
}

export const CountProvider = ({ children }) => {
  const [data, setData] = useState(JSON.parse(JSON.stringify(initData)))
  const [selected, setselected] = useState(menus[0])

  // Function to filter items with count !== 0
  const filterItemsWithNonZeroCount = () => {
    const filterRarity = (rarities) =>
      rarities.filter(({ count }) => {
        return count !== 0 && count !== ""
      })

    const filterItems = (items) =>
      items
        .map((item) => ({
          ...item,
          rarity: filterRarity(item.rarity),
        }))
        .filter((item) => item.rarity.length > 0)

    return {
      butuh: {
        items: filterItems(data.butuh.items),
      },
      punya: {
        items: filterItems(data.punya.items),
      },
    }
  }

  const updateItemCount = ({ type, itemIndex, rarityIndex, newCount = "" }) => {
    setData((prevData) => {
      const newData = { ...prevData }
      const sectionItems = newData[type].items.map((item, idx) => {
        if (idx === itemIndex) {
          return {
            ...item,
            rarity: item.rarity.map((r, idx) =>
              idx === rarityIndex ? { ...r, count: newCount } : r
            ),
          }
        }
        return item
      })
      newData[type].items = sectionItems
      return newData
    })
  }

  const resetData = () => setData(JSON.parse(JSON.stringify(initData)))

  return (
    <CountContext.Provider
      value={{
        data,
        setData,
        selected,
        setselected,
        filterItemsWithNonZeroCount,
        updateItemCount,
        resetData,
      }}
    >
      {children}
    </CountContext.Provider>
  )
}

export const useCountContext = () => useContext(CountContext)
