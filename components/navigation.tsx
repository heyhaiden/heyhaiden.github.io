import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navigation() {
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
              className="relative py-1 text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
