"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, AlertTriangle } from 'lucide-react'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])
  const [countdown, setCountdown] = useState(10)
  const router = useRouter()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }))
    setParticles(newParticles)

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(timer)
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }
  }, [router])

  return (
    <>
      <style jsx global>{`
        html, body {
          overflow: hidden !important;
          height: 100vh !important;
          width: 100vw !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        #__next {
          height: 100vh !important;
          width: 100vw !important;
          overflow: hidden !important;
        }
      `}</style>

      <div className="fixed inset-0 h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-purple-900/10" />

          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bg-gradient-to-r from-red-400/20 to-purple-400/20 rounded-full blur-sm"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}

          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-red-500/3 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-6 lg:mb-8"
          >
            <div className="relative">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-none mb-4">
                404
              </h1>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4"
              >
                <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-red-400" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 lg:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">Page Not Found</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-4 lg:mb-6 leading-relaxed px-4">
              The page you're looking for seems to have vanished into the digital void.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 lg:mb-8"
          >
            <motion.p
              animate={{
                textShadow: ["0 0 0 transparent", "2px 0 0 #ff0000, -2px 0 0 #00ff00", "0 0 0 transparent"],
              }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              className="text-sm sm:text-base lg:text-lg text-gray-300 font-mono mb-4"
            >
              ERROR: Neural network pathway not found
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="text-gray-400 text-sm lg:text-base">
              Redirecting to home in{" "}
              <motion.span
                key={countdown}
                initial={{ scale: 1.2, color: "#ef4444" }}
                animate={{ scale: 1, color: "#9ca3af" }}
                transition={{ duration: 0.3 }}
                className="font-bold"
              >
                {countdown}
              </motion.span>{" "}
              seconds
            </div>

            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Go Home Now
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 lg:mt-12 text-center"
          >
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="text-gray-400 italic text-xs sm:text-sm lg:text-base max-w-md mx-auto px-4"
            >
              "Sometimes the best discoveries happen when you take an unexpected path."
            </motion.p>
            <motion.p className="text-xs text-gray-600 mt-2">- Devojyoti's Neural Network</motion.p>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-16 sm:top-20 left-6 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-16 sm:bottom-20 right-6 sm:right-10 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        />

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 10, ease: "linear" }}
          />
        </div>
      </div>
    </>
  )
}
