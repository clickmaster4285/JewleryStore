'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])
  const footnoteRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade in
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

      // Paragraph fade in
      gsap.fromTo(paragraphRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Buttons staggered fade in
      buttonsRef.current.forEach((button, index) => {
        if (!button) return
        
        gsap.fromTo(button,
          {
            opacity: 0,
            scale: 0.9
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: index * 0.1 + 0.4,
            ease: 'back.out(0.3)',
            scrollTrigger: {
              trigger: button,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Footnote fade in
      gsap.fromTo(footnoteRef.current,
        {
          opacity: 0,
          y: 10
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footnoteRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          ref={headingRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance"
        >
          Ready to Transform Your Jewelry Business?
        </h2>
        <p 
          ref={paragraphRef}
          className="text-lg text-white/70 mb-8 max-w-2xl mx-auto"
        >
          Join hundreds of jewelry retailers who&apos;ve already improved their operations with JewelPOS. Start your free trial today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            ref={el => {
              buttonsRef.current[0] = el
            }}
            className="px-8 py-4 bg-white text-black hover:bg-white/90 font-bold rounded transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
          >
            Book Free Demo
          </button>
          <button 
            ref={el => {
              buttonsRef.current[1] = el
            }}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded backdrop-blur-md transition-all duration-300 border border-white/30 hover:scale-105"
          >
            Contact Sales
          </button>
        </div>

        <p 
          ref={footnoteRef}
          className="text-black/70 text-sm mt-8"
        >
          ✓ 30-day free trial • No credit card required • Full feature access
        </p>
      </div>
    </section>
  )
}