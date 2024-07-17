import { IoMdClose } from "react-icons/io"

export default function ButtonClose({ ...props }) {
  return (
    <div
      className="fixed bottom-11 left-1/2 -translate-x-1/2 bg-red-500/70 rounded-tl-full rounded-tr-full p-1 z-40"
      {...props}
    >
      <IoMdClose className="text-5xl" />
    </div>
  )
}
