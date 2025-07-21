import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devojyoti Misra - AI/ML Developer & Researcher",
  description:
    "Portfolio of Devojyoti Misra - AI/ML Developer and Researcher specializing in deep learning, computer vision, and natural language processing.",
  icons: {
    icon: "/favicon.JPG", type: "img/png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
