'use client'

import { useEffect, useRef } from 'react'
import { BarChart3, CreditCard, Users, LineChart, Building2, Barcode } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Barcode,
    title: 'Barcode Scanning',
    description: 'Fast and accurate inventory tracking with advanced barcode technology'
  },
  {
    icon: CreditCard,
    title: 'Smart Billing',
    description: 'Automated invoicing and payment processing for jewelry transactions'
  },
  {
    icon: Users,
    title: 'Customer CRM',
    description: 'Build relationships with detailed customer profiles and purchase history'
  },
  {
    icon: LineChart,
    title: 'Real Analytics',
    description: 'Comprehensive sales and profit analytics with actionable insights'
  },
  {
    icon: Building2,
    title: 'Multi-Store',
    description: 'Manage multiple locations from a single powerful dashboard'
  },
  {
    icon: BarChart3,
    title: 'Inventory Management',
    description: 'Advanced stock management with automatic low-stock alerts'
  }
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading container
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Title gradient reveal
          if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Subtitle slide in
      gsap.fromTo(subtitleRef.current,
        {
          opacity: 0,
          x: -30
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Cards staggered reveal
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        // Card entrance animation
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(0.4)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Icon scale animation
        const icon = card.querySelector('.feature-icon')
        if (icon) {
          gsap.fromTo(icon,
            {
              scale: 0,
              rotation: -180
            },
            {
              scale: 1,
              rotation: 0,
              duration: 0.5,
              delay: index * 0.1 + 0.2,
              ease: 'back.out(0.6)',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }

        // Description text reveal
        const description = card.querySelector('.feature-description')
        if (description) {
          const words = description.textContent?.split(' ') || []
          description.innerHTML = words.map(word => 
            `<span class="desc-word" style="display:inline-block; opacity:0; transform:translateY(10px);">${word}</span>`
          ).join(' ')
          
          const wordSpans = description.querySelectorAll('.desc-word')
          gsap.to(wordSpans, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.02,
            delay: index * 0.1 + 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="bg-gradient-to-b from-black via-gray-900/50 to-black py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white"
          >
            Powerful Features
          </h2>
          <p 
            ref={subtitleRef}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Everything you need to run a modern jewelry retail business efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                ref={el => {
                  cardsRef.current[index] = el
                }}
                className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl transition-all duration-500 hover:border-gold-500/50 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative z-10">
                  <div className="mb-4 relative">
                    <Icon className="feature-icon w-12 h-12 text-gold-400" />
                    <div className="absolute inset-0 bg-gold-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="feature-description text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-gold-500/0 group-hover:border-gold-500/50 transition-all duration-500 rounded-tr-xl" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-gold-500/0 group-hover:border-gold-500/50 transition-all duration-500 rounded-bl-xl" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}