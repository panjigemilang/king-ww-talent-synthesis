export default function Card({ children, ...props }) {
  return (
    <div
      className={`dark:bg-slate-500 rounded-lg h-full w-full p-3 ${
        props.className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  )
}
