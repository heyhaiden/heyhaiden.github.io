"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 flex items-start justify-center pt-40"
      >
        <div className="max-w-3xl w-full mx-auto text-center">
          <div className="space-y-6">
            <div className="mx-auto rounded-full bg-white shadow-md inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-14%20at%2000.04.51-Ssv8M9JiiIMtrL0hjaynXMD6AMuYUO.jpeg"
                alt="Haiden McGill"
                width={130}
                height={130}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">Haiden McGill</h1>
              <h2 className="text-xl text-gray-600">Technical Product Manager</h2>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Former founder turned product leader with 7+ years of experience turning complex technologies into scalable B2B platforms, I specialize in driving innovation at the intersection of IoT, AI, and user-centered design. My work transforms emerging technologies into impactful solutions across health tech, climate tech, and beyond.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Button asChild>
                <Link href="/projects">
                  View Projects
                  <span className="ml-2">→</span>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">
                  Learn More
                  <UserCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

