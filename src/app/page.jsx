/* eslint-disable react/no-unescaped-entities */
import Card from "./components/Card"
import BottomCard from "./components/BottomCard"
import Items from "./components/Items"
import ListBox from "./components/ListBox"
import ButtonReset from "./components/ButtonReset"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div>
        <div className="layover absolute top-0 left-0 w-full h-full z-10"></div>
        <Image
          src="https://images8.alphacoders.com/136/1363479.png"
          alt="king_ww"
          fill={true}
          style={{ objectFit: "cover", objectPosition: "55%" }}
        />
      </div>
      <main className="relative min-h-screen px-4 py-6 z-50">
        <h1 className="text-center text-2xl mb-3">Talent Syntestis</h1>
        <div className="h-[86vh]">
          <div className="w-full max-w-[335px] table mx-auto py-3">
            <div className="mb-3">
              <ListBox />
            </div>
            <Card>
              <Items />
            </Card>
          </div>
        </div>
        <ButtonReset />
        <BottomCard />
      </main>
    </>
  )
}
