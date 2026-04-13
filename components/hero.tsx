'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Star, Shield, Zap, Clock, ArrowRight, Gem, TrendingUp } from 'lucide-react'

const heroImages = [
  '/hero-jewelry-1.webp',
  '/hero-jewelry-2.webp',
  '/hero-jewelry-3.webp',
  '/hero-jewelry-4.webp',
  '/hero-jewelry-5.webp',
]

const stats = [
  { value: 500, label: "Jewelry Stores", suffix: "+" },
  { value: 98, label: "Accuracy Rate", suffix: "%" },
  { value: 50000, label: "Daily Transactions", suffix: "+" },
  { value: 24, label: "Support", suffix: "/7" },
]

/* ---------------- COUNTER ---------------- */
function AnimatedCounter({ targetValue, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true

        let start = 0
        const duration = 1500
        const startTime = performance.now()

        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1)
          const value = Math.floor(progress * targetValue)

          setCount(value)

          if (progress < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
      }
    }, { threshold: 0.3 })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [targetValue])

  return (
    <div ref={ref} className="text-3xl font-bold text-white">
      {count}{suffix}
    </div>
  )
}

/* ---------------- HERO ---------------- */
export function Hero() {
  const [current, setCurrent] = useState(0)
  const [scale, setScale] = useState(1)

  /* 🚀 PRELOAD ALL IMAGES (CRITICAL FIX) */
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  /* 🔁 AUTO SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  /* 🔍 PARALLAX SCALE */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScale(Math.min(1 + scrollY * 0.0004, 1.1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ================= BACKGROUND CAROUSEL ================= */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt="hero"
              fill
              priority={i === 0}
              loading="eager"
              className="object-cover"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        ))}

        {/* overlays */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center">

        {/* HEADLINE */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Every Gram Matters.
          <br />
          <span className="text-yellow-400">Track It Right.</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 text-white/80 text-lg max-w-xl">
          Smart POS system for jewelry businesses — manage stock, sales, and accuracy in real time.
        </p>

        {/* CTA */}
        <div className="flex gap-4 mt-8 flex-wrap">
          <Link
            href="#contact"
            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition"
          >
            <Gem className="inline w-5 h-5 mr-2" />
            Book Free Demo
          </Link>

          <Link
            href="#features"
            className="px-6 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition"
          >
            <TrendingUp className="inline w-5 h-5 mr-2" />
            Explore Features
          </Link>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-white/20 pt-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <AnimatedCounter targetValue={s.value} suffix={s.suffix} />
              <p className="text-white/70 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ChevronDown />
      </div>

    </section>
  )
}