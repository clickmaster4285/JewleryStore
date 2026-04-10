'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  'Real-time inventory tracking with barcode scanning',
  'Automated billing and invoicing system',
  'CRM for customer relationship management',
  'Advanced analytics and profit insights',
  'Multi-store management from one dashboard',
  'Secure data backup and compliance'
]

export function Solution() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const listItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation - 3D flip and reveal
      gsap.fromTo(imageRef.current,
        {
          opacity: 0,
          rotationY: -90,
          scale: 0.8,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          rotationY: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'back.out(0.8)',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
            scrub: 0.5
          }
        }
      )

      // Content container animation - slide from right
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          x: 100,
          rotationY: 30
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            scrub: 0.5
          }
        }
      )

      // Heading animation - text reveal with split effect
      const headingText = headingRef.current
      if (headingText) {
        const words = headingText.textContent?.split(' ') || []
        headingText.innerHTML = words.map(word => 
          `<span class="word" style="display:inline-block; opacity:0; transform:translateY(30px);">${word}</span>`
        ).join(' ')
        
        const wordSpans = headingText.querySelectorAll('.word')
        gsap.to(wordSpans, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingText,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      }

      // Paragraph animation
      gsap.fromTo(paragraphRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // List items staggered animation
      listItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            {
              opacity: 0,
              x: -50,
              scale: 0.9
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.5,
              delay: index * 0.1,
              ease: 'back.out(0.5)',
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
              }
            }
          )

          // Icon bounce animation on scroll
          const icon = item.querySelector('.check-icon')
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              duration: 0.3,
              repeat: 1,
              yoyo: true,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
              }
            })
          }
        }
      })

      // Button animation with pulse effect
      gsap.fromTo(buttonRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Continuous pulse animation on button after reveal
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 1,
        boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
      })

      // Parallax effect on image gradient overlay
      gsap.to(imageRef.current?.querySelector('.image-overlay'), {
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-black py-20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image with 3D effect */}
          <div 
            ref={imageRef}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden group"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <Image
              src="/solution-image.jpg"
              alt="Solution showcase"
              fill
              className="object-cover"
            />
            <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Decorative shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>

          {/* Right - Content */}
          <div ref={contentRef}>
            <h2 
              ref={headingRef}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              The Complete Solution
            </h2>
            <p 
              ref={paragraphRef}
              className="text-white/70 text-lg mb-8"
            >
              Our intelligent POS system transforms jewelry retail operations with real-time inventory, automated billing, and comprehensive analytics.
            </p>

            {/* Solutions List */}
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  ref={el => {
                    listItemsRef.current[index] = el
                  }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="check-icon flex-shrink-0 w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mt-1 transition-all duration-300">
                    <Check size={16} className="text-black" />
                  </div>
                  <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {solution}
                  </p>
                </div>
              ))}
            </div>

            <Link 
              href="#contact"
              ref={buttonRef as any}
              className="mt-8 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/50 block w-max text-center"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}