"use client"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type React from "react"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

const metadata = {
  title: "Haiden McGill - Product Manager",
  description:
    "Haiden McGill is a former founder and Product Manager with 7+ years of experience building B2B digital platforms and new product solutions for early and growth-stage startups.",
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navigation />
        <main className="min-h-screen pt-16">{mounted ? children : null}</main>
        <Footer />
      </body>
    </html>
  )
}
