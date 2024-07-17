export default function Card({ children, ...props }) {
  return (
    <div
      className={`bg-slate-500/50 rounded-lg h-full w-full p-3 ${
        props.className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  )
}
