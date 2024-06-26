import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  weight: ["400","500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Design Penguin",
  description: "Marketing for the digital age",
  icons: {
    icon: ["/assets/DP logo/logo.svg"]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
