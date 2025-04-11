import { Inter } from "next/font/google"
import './globals.css'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Haiden McGill - Product Manager",
  description: "Haiden McGill is a former founder and Product Manager with 7+ years of experience building B2B digital platforms and new product solutions for early and growth-stage startups.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
