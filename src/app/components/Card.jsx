export default function Card({ children }) {
  return (
    <div className="dark:bg-slate-400 rounded-lg h-full w-full p-3">
      {children}
    </div>
  )
}
