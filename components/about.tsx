'use client'

import { useEffect, useRef } from 'react'
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

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and secure cloud backup for your valuable data"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Data-driven insights to boost sales and optimize inventory turnover"
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "10+ years of experience in jewelry retail technology solutions"
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "Constantly evolving with cutting-edge features and integrations"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Left column animation
      gsap.fromTo(leftColumnRef.current,
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Right column animation
      gsap.fromTo(rightColumnRef.current,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Stats staggered animation
      statsRef.current.forEach((stat, index) => {
        if (!stat) return
        gsap.fromTo(stat,
          {
            opacity: 0,
            scale: 0.8,
            y: 30
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.1 + 0.4,
            ease: 'back.out(0.4)',
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Features staggered animation
      featuresRef.current.forEach((feature, index) => {
        if (!feature) return
        gsap.fromTo(feature,
          {
            opacity: 0,
            y: 40
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.1 + 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: feature,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="bg-gradient-to-b from-black via-gray-900/50 to-black py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-16">
         
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Revolutionizing Jewelry Retail
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We're on a mission to empower jewelry retailers with modern technology that simplifies operations and drives growth
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Content */}
          <div ref={leftColumnRef}>
            <h3 className="text-2xl font-bold text-white mb-4">
              The Story Behind JewelSync
            </h3>
            <p className="text-white/60 mb-4 leading-relaxed">
              Founded by jewelry industry veterans and tech experts, JewelSync was born from a simple observation: 
              jewelry retailers were struggling with outdated systems that couldn't keep up with modern business demands.
            </p>
            <p className="text-white/60 mb-6 leading-relaxed">
              We set out to build a solution that combines the beauty of jewelry retail with the power of cutting-edge technology. 
              Today, JewelSync powers over 500 jewelry stores across the country, helping them manage inventory, track sales, 
              and delight customers like never before.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold-400 rounded-full" />
                <span className="text-white/70 text-sm">500+ Active Stores</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold-400 rounded-full" />
                <span className="text-white/70 text-sm">50M+ Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold-400 rounded-full" />
                <span className="text-white/70 text-sm">99.9% Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Jewelry GIF/Image Gallery */}
          <div ref={rightColumnRef}>
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 */}
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <Image
                  src="/about-image1.webp"
                  alt="Luxury jewelry display"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              {/* Image 2 */}
              <div className="relative h-48 rounded-xl overflow-hidden group mt-8">
                <Image
                  src="/about-image2.webp"
                  alt="Diamond rings collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              {/* Image 3 */}
              <div className="relative h-48 rounded-xl overflow-hidden group -mt-4">
                <Image
                  src="/about-image3.webp"
                  alt="Gold necklace display"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              {/* Image 4 */}
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <Image
                  src="/about-image4.webp"
                  alt="Watch collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

       

    
      </div>
    </section>
  )
}