/* eslint-disable react/no-unescaped-entities */
import Data from "@/app/components/Data"
import Card from "./components/Card"
import BottomCard from "./components/BottomCard"
import Items from "./components/Items"
import ListBox from "./components/ListBox"
import ButtonReset from "./components/ButtonReset"

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 py-6">
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
  )
}
