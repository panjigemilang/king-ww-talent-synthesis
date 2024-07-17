export default function Card({ children, ...props }) {
  return (
    <div
      className={`bg-main rounded-lg h-full w-full p-3 ${
        props.className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  )
}
