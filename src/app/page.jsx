/* eslint-disable react/no-unescaped-entities */
import Data from "@/app/components/Data"
import Card from "./components/Card"
import BottomCard from "./components/BottomCard"
import Image from "next/image"
import { FaChevronCircleUp } from "react-icons/fa"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"

export default function Home() {
  return (
    <main className="relative min-h-screen px-4 py-6">
      <h1 className="text-center text-2xl mb-3">Talent Syntestis</h1>
      <div className="h-[86vh]">
        <div className="w-full max-w-[335px] table mx-auto py-3">
          <Card>
            <Disclosure as="div" defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                  lu orang butuh berapa?
                </span>
                <FaChevronCircleUp className="size-5 fill-white/60 transition duration-200 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel
                className="mt-2 flex flex-wrap transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                transition
              >
                <div className="w-1/2 max-h-[141.5px] p-2">
                  <div className="bg-five-star mx-auto rounded-full w-[125px] h-[125px] flex items-center justify-center">
                    <Image
                      src="https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_Setpup_004_4_UI.webp"
                      alt="lendir"
                      width={100}
                      height={120}
                    />
                  </div>
                </div>
                <div className="w-1/2 max-h-[141.5px] p-2">
                  <div className="bg-four-star mx-auto rounded-full w-[125px] h-[125px] flex items-center justify-center">
                    <Image
                      src="https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_Setpup_004_3_UI.webp"
                      alt="lendir"
                      width={100}
                      height={120}
                    />
                  </div>
                </div>
                <div className="w-1/2 max-h-[141.5px] p-2">
                  <div className="bg-three-star mx-auto rounded-full w-[125px] h-[125px] flex items-center justify-center">
                    <Image
                      src="https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_Setpup_004_2_UI.webp"
                      alt="lendir"
                      width={100}
                      height={120}
                    />
                  </div>
                </div>
                <div className="w-1/2 max-h-[141.5px] p-2">
                  <div className="bg-two-star mx-auto rounded-full w-[125px] h-[125px] flex items-center justify-center">
                    <Image
                      src="https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_Setpup_004_1_UI.webp"
                      alt="lendir"
                      width={100}
                      height={120}
                    />
                  </div>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </Card>
        </div>
      </div>
      <BottomCard />
    </main>
  )
}
