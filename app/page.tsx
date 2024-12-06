'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useRef } from 'react'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.play().catch((error) => {
        console.log("Autoplay failed:", error)
      })
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <div className="flex-grow relative">
        <video 
          ref={videoRef}
          autoPlay 
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/coming-soon.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          </h1>
        </div>
      </div>

      <Footer />
    </main>
  )
}
