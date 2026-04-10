'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
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
  { value: 500, label: "Jewelry Stores", icon: Star, suffix: "+" },
  { value: 98, label: "Accuracy Rate", icon: Shield, suffix: "%" },
  { value: 50000, label: "Daily Transactions", icon: Zap, suffix: "+" },
  { value: 24, label: "Support", icon: Clock, suffix: "/7" },
]

// Counter Component with scroll trigger
function AnimatedCounter({ targetValue, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime = null
          const startValue = 0
          
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            const easedProgress = 1 - Math.pow(1 - progress, 3) // Cubic ease out
            const currentValue = Math.floor(easedProgress * targetValue)
            setCount(currentValue)
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3, triggerOnce: true }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [targetValue, duration, hasAnimated])

  return (
    <div ref={elementRef} className="text-center group">
      <p className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110">
        {count}{suffix}
      </p>
    </div>
  )
}

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
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative min-h-screen flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8 pt-16 max-w-7xl mx-auto">
        <div className="text-left max-w-4xl animate-fade-up relative z-10">
          {/* Typing Animation */}
        

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

        

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12">
            <Link href="#contact" className="group px-8 py-4 bg-gradient-to-r from-primary to-primary hover:from-primary hover:to-primary text-black font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 transform hover:scale-105 shadow-lg flex items-center gap-2">
              <Gem className="w-5 h-5" />
              Book Free Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#features" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Explore Features
            </Link>
          </div>

          {/* Stats Section with Counter and Glow */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl pt-6 border-t border-white/20">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div 
                  key={index} 
                  className="text-center group transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-center mb-2 transition-all duration-300 group-hover:animate-pulse">
                    <Icon className="w-5 h-5 text-primary transition-all duration-300 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
                  </div>
                  <AnimatedCounter 
                    targetValue={stat.value} 
                    suffix={stat.suffix}
                  />
                  <p className="text-xs text-white/70 transition-all duration-300 group-hover:text-white/90">
                    {stat.label}
                  </p>
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