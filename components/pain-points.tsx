'use client'

import { useEffect, useRef } from 'react'
import { AlertCircle, TrendingDown, Lock, Eye, DollarSign } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const painPoints = [
  {
    icon: AlertCircle,
    title: 'Stock Mismatch',
    description: 'Gold & diamonds inventory errors costing thousands in losses'
  },
  {
    icon: TrendingDown,
    title: 'Manual Billing Errors',
    description: 'Time-consuming manual processes leading to costly mistakes'
  },
  {
    icon: Eye,
    title: 'No Real-time Tracking',
    description: 'Lack of visibility into current inventory and sales'
  },
  {
    icon: Lock,
    title: 'Theft & Missing Stock',
    description: 'Difficulty tracking high-value items and preventing loss'
  },
  {
    icon: DollarSign,
    title: 'No Profit Visibility',
    description: 'Unable to understand true profitability by product line'
  }
]

export function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading on scroll
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 60,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
            scrub: 0.5
          }
        }
      )

      // Animate each card with different effects based on index
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        // Different animation for each card position
        let fromProps = {}
        let toProps = {}

        if (index === 0 || index === 4) {
          // Left side cards - slide from left with rotation
          fromProps = {
            opacity: 0,
            x: -100,
            rotationY: -30,
            scale: 0.8
          }
          toProps = {
            opacity: 1,
            x: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(0.6)'
          }
        } else if (index === 2) {
          // Center card - flip and scale
          fromProps = {
            opacity: 0,
            scale: 0,
            rotationX: 180,
            filter: 'blur(5px)'
          }
          toProps = {
            opacity: 1,
            scale: 1,
            rotationX: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'elastic.out(1, 0.5)'
          }
        } else {
          // Right side cards - slide from right
          fromProps = {
            opacity: 0,
            x: 100,
            rotationY: 30,
            scale: 0.8
          }
          toProps = {
            opacity: 1,
            x: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(0.6)'
          }
        }

        gsap.fromTo(card, fromProps, {
          ...toProps,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 65%',
            toggleActions: 'play none none reverse',
            scrub: 0.3
          }
        })

        // Add icon floating animation on scroll
        const icon = card.querySelector('.pain-icon')
        if (icon) {
          gsap.to(icon, {
            y: -8,
            rotation: 5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: index * 0.2
          })
        }
      })

      // Parallax effect on the background gradient
      gsap.to(sectionRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      // Staggered text reveal for card descriptions
      const allDescriptions = gsap.utils.toArray('.card-description')
      allDescriptions.forEach((desc: any, idx) => {
        gsap.fromTo(desc,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: idx * 0.1,
            scrollTrigger: {
              trigger: desc,
              start: 'top 90%',
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
      ref={sectionRef}
      className="bg-gradient-to-b from-black to-gray-900 py-20 overflow-hidden relative"
      style={{
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Challenges Facing Jewelry Retailers
          </h2>
          <p className="text-white/70 text-lg">
            The pain points that cost you time and money every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={index}
                ref={el => {
                  cardsRef.current[index] = el
                }}
                className="relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg transition-all duration-300"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 rounded-lg transition-all duration-300" />
                
                <div className="relative">
                  <Icon className="pain-icon w-10 h-10 text-gold-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                  <p className="card-description text-white/60">{point.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/20 rounded-full blur-3xl animate-ping animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-ping animate-pulse delay-1000" />
      </div>
    </section>
  )
}