"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          HM
        </Link>
        <div className="flex gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative py-1",
                pathname === link.href ? "text-primary" : "text-gray-600 hover:text-gray-900",
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary" />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

