'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <div className="flex-grow relative w-full h-full">
        <img 
          src="/coming-soon.gif"  // Removed 'public' from the path
          alt="Coming Soon Animation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6"> 
          </h1>
        </div>
      </div>

      <Footer />
    </main>
  )
}
