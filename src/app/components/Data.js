"use client"

import { useEffect, useState } from "react"
import { read, utils } from "xlsx"

export default function Data() {
  const [data, setData] = useState([])

  const getExcel = async () => await fetch("/build%20TOF.xlsx")

  useEffect(() => {
    ;(async () => {
      /* Download from https://docs.sheetjs.com/pres.numbers */
      const f = await getExcel()
      const ab = await f.arrayBuffer()
      const wb = read(ab)
      /* generate array of presidents from the first worksheet */
      const ws = wb.Sheets[wb.SheetNames[0]] // get the first worksheet
      console.log("WS ?", ws)
      const temp = utils.sheet_to_json(ws) // generate objects
      console.log("Tempe", temp)
      setData(temp) // update state
    })()
  }, [])

  return (
    <tbody>
      {/* generate row (TR) for each president */}
      {/* {data.map((row) => (
        <tr key={row.Name}>
          <td>{row.Name}</td>
          <td>{row.Index}</td>
        </tr>
      ))} */}
    </tbody>
  )
}
