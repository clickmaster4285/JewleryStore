'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const heroImages = [
  '/hero-jewelry-1.jpg',
  '/hero-jewelry-2.jpg',
  '/hero-jewelry-3.jpg',
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const newScale = 1 + scrolled * 0.0005
      setScale(Math.min(newScale, 1.1))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Jewelry showcase ${index + 1}`}
              fill
              className="object-cover"
              style={{ transform: `scale(${scale})` }}
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}

 <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
  {/* Dark overlay - consider adjusting opacity based on your images */}
  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
  
  <div className="text-center max-w-3xl animate-fade-up relative z-10">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
      <span className="text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
        Every Gram Matters.
      </span>
      <span className='text-primary drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]'>
        {' '}Track It Right.
      </span>
    </h1>
    <p className="text-lg sm:text-xl mb-8 text-balance text-white/95 drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]">
      Manage inventory, billing, and sales with precision using a system built for jewelry businesses
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 shadow-lg">
        Book Free Demo
      </button>
      <button className="px-8 py-4 bg-black/40 hover:bg-black/60 text-white font-bold rounded-xl backdrop-blur-md transition-all duration-300 border border-white/40 shadow-lg hover:shadow-xl">
        Explore Features
      </button>
    </div>
  </div>

  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ChevronDown size={32} className="text-white/90 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
  </div>
</div>
      

    </section>
  )
}
