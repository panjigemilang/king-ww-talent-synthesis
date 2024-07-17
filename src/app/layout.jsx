import { Inter } from "next/font/google"
import "./globals.css"
import { CountProvider } from "./context/CountContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wuthering Waves Talent Materials",
  description: "Ngitung itung talent material",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <CountProvider>
        <body className={inter.className}>{children}</body>
      </CountProvider>
    </html>
  )
}
