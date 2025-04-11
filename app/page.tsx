"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Set a small timeout to ensure animations work properly
    const timer = setTimeout(() => {
      setLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-xl">Loading...</div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 flex items-start justify-center pt-40"
        >
          <div className="max-w-3xl w-full mx-auto text-center">
            <div className="space-y-6">
              <div className="mx-auto rounded-full shadow-md inline-block w-32 h-32 overflow-hidden border border-black">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20at%2015.08.35-47gF50xzhdS99oZdVM8POFiZukT9X2.png"
                  alt="Haiden McGill"
                  width={150}
                  height={150}
                  className="object-cover object-center"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "50% 30%", // Adjust vertical position to center face
                  }}
                  priority
                />
              </div>
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-2">Haiden McGill</h1>
                <h2 className="text-xl text-gray-600">Technical Product Manager</h2>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Product leader with 7+ years of experience turning complex technologies into scalable B2B platforms. I
                specialize in driving innovation at the intersection of IoT, AI, and user-centered design. My work
                transforms emerging technologies into impactful solutions across health tech, climate tech, and beyond.
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
      )}
    </div>
  )
}
