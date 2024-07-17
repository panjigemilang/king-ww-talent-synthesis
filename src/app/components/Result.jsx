"use client"

import { useCountContext } from "../context/CountContext"
import { dataKalkulasi } from "../services/Data"
import ResultItem from "./ResultItem"

export default function Result() {
  const { filterItemsWithNonZeroCount: data } = useCountContext()
  const butuhItems = data().butuh.items
  const punyaItems = data().punya.items

  return (
    <div className="relative h-screen overflow-y-auto bg-gray-500/30 p-3 pb-10 transition-all duration-300 ease-in data-[closed]:opacity-0 z-30 sm:mx-auto sm:max-w-screen-sm">
      <h1 className="text-xl font-bold mb-3">Hasil</h1>
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
          title={"Kalkulasi dari gua ni ye woilah tay:"}
        />
      )}
    </div>
  )
}
