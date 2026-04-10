'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Sparkles, Shield, Zap, Star, ArrowRight, Gem, TrendingUp, Clock } from 'lucide-react'

const heroImages = [
  '/hero-jewelry-1.jpg',
  '/hero-jewelry-2.jpg',
  '/hero-jewelry-3.jpg',
  '/hero-jewelry-4.jpg',
  '/hero-jewelry-5.jpg',
]

const stats = [
  { value: "500+", label: "Jewelry Stores", icon: Star },
  { value: "98%", label: "Accuracy Rate", icon: Shield },
  { value: "50K+", label: "Daily Transactions", icon: Zap },
  { value: "24/7", label: "Support", icon: Clock },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scale, setScale] = useState(1)
  const [typedText, setTypedText] = useState("")
  const fullText = "Track, Manage, Grow"

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

  // Typing animation effect
  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)
    return () => clearInterval(typingInterval)
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
        
        {/* Darker Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl animate-fade-up relative z-10">
          

          {/* Main Heading with Black Glow */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              Every Gram Matters.
            </span>
            <br />
            <span className="text-primary drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] drop-shadow-[0_0_8px_rgba(0,0,0,0.4)] relative inline-block">
              Track It Right.
              <span className="absolute inset-0 blur-md bg-black/20 -z-10"></span>
            </span>
          </h1>

         

          <p className="text-base sm:text-lg mb-8 text-balance text-white/90 drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] max-w-2xl mx-auto">
            Streamline your jewelry business with our all-in-one POS solution. 
            Real-time inventory tracking, automated billing, and insightful analytics 
            to help you scale your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-primary hover:from-primary  hover:to-primary text-black font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 transform hover:scale-105 shadow-lg flex items-center gap-2">
              <Gem className="w-5 h-5" />
              Book Free Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Explore Features
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/20">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/70">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <div className="flex flex-col items-center gap-1">
            <span className="text-white/70 text-xs drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">Scroll to explore</span>
            <ChevronDown size={24} className="text-white/80 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  )
}