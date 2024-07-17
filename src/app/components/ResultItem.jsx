import Image from "next/image"
import { items } from "../services/Data"

export default function ResultItem({ data, title }) {
  const getSrc = (id, type) => {
    // Find the item with the matching id & type
    const item = items.find((item) => item.id === id)
    const rarity = item.rarity.find((r) => r.type.includes(type))

    if (!item) {
      return null // If no item is found, return null
    }

    if (!rarity) {
      return null // If no rarity is found, return null
    }

    // Return the src and alt properties
    return { src: rarity.src, alt: rarity.alt }
  }

  const getBackgroundStar = (type = "") => {
    if (type.includes("gold")) return "bg-five-star"
    else if (type.includes("purple")) return "bg-four-star"
    else if (type.includes("blue")) return "bg-three-star"
    else return "bg-two-star"
  }

  return (
    <div className="mb-5">
      <p className="text-md mb-2">{title}</p>
      {data.map(({ title, rarity: rarities }) => (
        <div
          key={title}
          className="flex mb-3 p-2 border border-gray-300/40 rounded-lg"
          style={{
            boxShadow: "inset 0 2px 6px 0 #968f8f, inset 0 0px 9px 0 #968f8f",
          }}
        >
          {rarities.map(({ type, count, passed }) => (
            <div key={title + "_" + type} className="w-1/4 p-1">
              <div
                className={`relative mx-auto rounded-lg w-full flex items-center justify-center 
            ${getBackgroundStar(type)}`}
              >
                <Image
                  src={getSrc(title, type)?.src}
                  alt={getSrc(title, type)?.alt}
                  width={100}
                  height={120}
                />
              </div>
              <span
                className={`block w-full rounded-lg mt-2 p-1 text-center font-semibold bg-slate-400/50 ${passed}`}
              >
                {count}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
