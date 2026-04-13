'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Shield, TrendingUp, Users, Award, Sparkles, Gem, Clock, BadgeCheck } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<(HTMLDivElement | null)[]>([])
  const featuresRef = useRef<(HTMLDivElement | null)[]>([])


  const stats = [
    { icon: Users, value: "500+", label: "Happy Retailers" },
    { icon: Gem, value: "50K+", label: "Transactions Daily" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: BadgeCheck, value: "99.9%", label: "Uptime Guarantee" }
  ]

  const images = [
    { src: "/about-image1.webp", alt: "Luxury jewelry display" },
    { src: "/about-image2.webp", alt: "Diamond rings collection" },
    { src: "/about-image3.webp", alt: "Gold necklace display" },
    { src: "/about-image4.webp", alt: "Watch collection" },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {

      const animate = (el: any, x = 0, y = 0) => {
        if (!el) return

        gsap.fromTo(el,
          { opacity: 0, x, y },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      animate(headingRef.current, 0, 20)
      animate(leftColumnRef.current, -50, 0)
      animate(rightColumnRef.current, 50, 0)

      statsRef.current.forEach((stat, i) => {
        if (!stat) return
        gsap.fromTo(stat,
          { opacity: 0, scale: 0.9, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.08,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
            }
          }
        )
      })

      featuresRef.current.forEach((feature, i) => {
        if (!feature) return
        gsap.fromTo(feature,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.08,
            scrollTrigger: {
              trigger: feature,
              start: 'top 85%',
            }
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Revolutionizing Jewelry Retail
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Modern POS system built for growth and efficiency
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div ref={leftColumnRef}>
            <h3 className="text-2xl font-bold text-white mb-4">
              The Story Behind JewelSync
            </h3>

            <p className="text-white/60 leading-relaxed mb-4">
              Built for modern jewelry businesses struggling with outdated systems.
            </p>

            <p className="text-white/60 leading-relaxed">
              Today we power 500+ stores with real-time POS intelligence.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  ref={(el) => { if (el) statsRef.current[i] = el }}
                  className="text-center p-4 bg-black/20 rounded-xl backdrop-blur-sm border border-white/10 group hover:bg-white/5 transition-all duration-300"
                  style={{ willChange: 'transform' }}
                >
                  <stat.icon className="w-10 h-10 text-gold-400 mx-auto mb-2 opacity-70 group-hover:opacity-100 transition" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - OPTIMIZED IMAGES */}
          <div ref={rightColumnRef} className="grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative h-48 rounded-xl overflow-hidden bg-gray-900 group"
                style={{ willChange: 'transform' }}

              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={true}
                  fetchPriority="high"
                  quality={80}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQAAAgICAgMAAAAAAAAAAAAAAAAAAAAZGBwkCAwEBAQAAAAAAAAAAAAAAAAAAAAAABAQADBAUGBwcGBggIAQAAAAAAAAAAAAABAgMRBCExQVGBIjJSIkKxI1Gx0RNDcpL/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A2j78X/9k="
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}