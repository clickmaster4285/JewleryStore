'use client'

import { useEffect, useRef } from 'react'
import { Download, Zap, BarChart3, Check } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Install & Setup',
    description: 'Get JewelPOS up and running in just 15 minutes with our quick setup wizard'
  },
  {
    icon: Zap,
    number: '02',
    title: 'Sync Your Inventory',
    description: 'Import your existing jewelry inventory and set up real-time tracking'
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Start Tracking',
    description: 'Begin monitoring sales, inventory, and customer data with live analytics'
  },
  {
    icon: Check,
    number: '04',
    title: 'Grow Your Business',
    description: 'Use insights to optimize operations and increase profitability'
  }
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const timelineLineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const iconCirclesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 50,
          filter: 'blur(5px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Title text reveal with glitch effect
      if (titleRef.current) {
        const text = titleRef.current.textContent || ''
        titleRef.current.innerHTML = text.split('').map(char => 
          char === ' ' ? ' ' : `<span class="glitch-char" style="display:inline-block; opacity:0; transform:translateY(30px);">${char}</span>`
        ).join('')
        
        const charSpans = titleRef.current.querySelectorAll('.glitch-char')
        gsap.to(charSpans, {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.03,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      }

      // Subtitle animation
      gsap.fromTo(subtitleRef.current,
        {
          opacity: 0,
          scale: 0.9
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Timeline line draw animation
      if (timelineLineRef.current) {
        gsap.fromTo(timelineLineRef.current,
          {
            scaleY: 0,
            transformOrigin: 'top'
          },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: timelineLineRef.current,
              start: 'top 80%',
              end: 'bottom 70%',
              scrub: 0.5,
              toggleActions: 'play none none reverse'
            }
          }
        )
      }

      // Animate each step
      stepsRef.current.forEach((step, index) => {
        if (!step) return

        const isEven = index % 2 === 0
        const fromX = isEven ? -100 : 100
        
        // Step content animation
        gsap.fromTo(step,
          {
            opacity: 0,
            x: fromX,
            rotationY: isEven ? -30 : 30,
            filter: 'blur(8px)'
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            delay: index * 0.2,
            ease: 'back.out(0.5)',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              scrub: 0.3
            }
          }
        )

        // Number reveal animation
        const numberElement = step.querySelector('.step-number')
        if (numberElement) {
          gsap.fromTo(numberElement,
            {
              opacity: 0,
              scale: 0,
              rotation: -180
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              delay: index * 0.2 + 0.3,
              ease: 'back.out(0.8)',
              scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }

        // Title reveal
        const titleElement = step.querySelector('.step-title')
        if (titleElement) {
          gsap.fromTo(titleElement,
            {
              opacity: 0,
              x: -20
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              delay: index * 0.2 + 0.4,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }

        // Description reveal
        const descElement = step.querySelector('.step-description')
        if (descElement) {
          gsap.fromTo(descElement,
            {
              opacity: 0,
              y: 20
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.2 + 0.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }
      })

      // Icon circles pulse animation on scroll
      iconCirclesRef.current.forEach((circle, index) => {
        if (!circle) return

        gsap.fromTo(circle,
          {
            scale: 0,
            rotation: -360,
            boxShadow: '0 0 0px rgba(255, 215, 0, 0)'
          },
          {
            scale: 1,
            rotation: 0,
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
            duration: 0.6,
            delay: index * 0.2 + 0.2,
            ease: 'elastic.out(1, 0.6)',
            scrollTrigger: {
              trigger: circle,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Continuous subtle pulse after reveal
        gsap.to(circle, {
          scale: 1.05,
          boxShadow: '0 0 40px rgba(255, 215, 0, 0.3)',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.2 + 0.8
        })
      })

      // Parallax effect on background
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

      // Animate connecting dots between steps
      const dots = document.querySelectorAll('.timeline-dot')
      dots.forEach((dot, index) => {
        gsap.fromTo(dot,
          {
            scale: 0,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            delay: index * 0.2 + 0.3,
            ease: 'back.out(0.8)',
            scrollTrigger: {
              trigger: dot,
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
      id="solutions" 
      ref={sectionRef}
      className="bg-black py-20 overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headingRef} className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            How It Works
          </h2>
          <p 
            ref={subtitleRef}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Four simple steps to transform your jewelry retail business
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div 
            ref={timelineLineRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-gold-500/50 to-gold-500/10 transform -translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="timeline-dot hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-gold-500 rounded-full ring-4 ring-gold-500/20" />
                  </div>

                  <div className={`flex ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col items-center gap-8`}>
                    {/* Content */}
                    <div 
                      ref={el => {
                        stepsRef.current[index] = el
                      }}
                      className="flex-1 md:w-1/2 w-full"
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg transition-all duration-500 hover:border-gold-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-gold-500/10 cursor-pointer">
                        <p className="step-number text-gold-400 font-bold text-lg mb-2">{step.number}</p>
                        <h3 className="step-title text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="step-description text-white/60">{step.description}</p>
                      </div>
                    </div>

                    {/* Icon Circle */}
                    <div className="flex-shrink-0 md:w-1/2 w-full flex justify-center md:justify-center">
                      <div 
                        ref={el => {
                          iconCirclesRef.current[index] = el
                        }}
                        className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-2xl shadow-gold-500/30 z-10 cursor-pointer transition-all duration-300 hover:scale-110"
                      >
                        <Icon size={36} className="text-black md:w-8 md:h-8" />
                        
                        {/* Pulsing ring effect */}
                        <div className="absolute inset-0 rounded-full bg-gold-500/20 animate-ping opacity-75" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-white/40 text-sm">
            <div className="w-16 h-px bg-gold-500/30" />
            <span>Simple. Fast. Efficient.</span>
            <div className="w-16 h-px bg-gold-500/30" />
          </div>
        </div>
      </div>
    </section>
  )
}