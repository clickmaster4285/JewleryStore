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
        <div className="text-center max-w-3xl animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Smart Jewelry POS System for Modern Retailers
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 text-balance">
            Manage inventory, billing, customers, and sales in one powerful platform built for jewelry businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105">
              Book Free Demo
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded backdrop-blur-md transition-all duration-300 border border-white/30">
              Explore Features
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </div>
    </section>
  )
}
