"use client"

import { useCountContext } from "../context/CountContext"
import { dataKalkulasi } from "../services/Data"
import ResultItem from "./ResultItem"

export default function Result() {
  const { filterItemsWithNonZeroCount: data } = useCountContext()
  const butuhItems = data().butuh.items
  const punyaItems = data().punya.items

  return (
    <div className="h-screen overflow-y-auto dark:bg-gray-500/50 p-3 pb-10 transition-all duration-300 ease-in data-[closed]:opacity-0">
      <h1
        className="text-xl font-bold mb-3"
        onClick={() => console.log("naon ieu", data())}
      >
        Hasil
      </h1>
      {butuhItems.length > 0 && (
        <ResultItem
          data={butuhItems}
          title={
            <span>
              Lu
              <span className="font-semibold"> BUTUH:</span>
            </span>
          }
        />
      )}
      {punyaItems.length > 0 && (
        <ResultItem
          data={dataKalkulasi(butuhItems, punyaItems)}
          title={"Kalkulasi:"}
        />
      )}
    </div>
  )
}
