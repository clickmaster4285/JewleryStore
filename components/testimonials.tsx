'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Elegance Jewelers',
    company: 'New York, NY',
    content: 'JewelSync has been a game-changer for our business. We\'ve cut our administrative time in half and our accuracy has never been better.',
    rating: 5
  },
  {
    name: 'David Kumar',
    role: 'Manager, Diamond Dreams',
    company: 'Los Angeles, CA',
    content: 'The analytics features alone have helped us identify our best-selling items and optimize our inventory accordingly. Highly recommended!',
    rating: 5
  },
  {
    name: 'Jessica Chen',
    role: 'Director, Premium Gold House',
    company: 'San Francisco, CA',
    content: 'Outstanding platform. The customer support is exceptional and the system is incredibly intuitive. Worth every penny.',
    rating: 5
  },
  {
    name: 'Marcus Johnson',
    role: 'Owner, Luxury Gems Co',
    company: 'Miami, FL',
    content: 'We\'ve tried other systems before, but JewelSync is in a league of its own. Our staff loves how easy it is to use.',
    rating: 5
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const animationRef = useRef<GSAPTimeline | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initial heading animation
    if (headingRef.current) {
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }
      )
    }

    // Animate first card
    animateCard(current)

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [])

  const animateCard = (index: number) => {
    if (typeof window === 'undefined') return;

    // Kill any ongoing animation
    if (animationRef.current) {
      animationRef.current.kill()
    }

    // Create new animation timeline
    animationRef.current = gsap.timeline()
    
    // Animate the current card
    const currentCard = cardRefs.current[index]
    if (currentCard) {
      animationRef.current
        .fromTo(currentCard,
          {
            opacity: 0,
            scale: 0.8,
            rotationY: -30,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: 'back.out(0.5)'
          }
        )
        .fromTo(currentCard.querySelector('.stars') as Element,
          {
            opacity: 0,
            scale: 0
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'back.out(0.6)'
          },
          '-=0.3'
        )
        .fromTo(currentCard.querySelector('.testimonial-content') as Element,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
          },
          '-=0.2'
        )
        .fromTo(currentCard.querySelector('.testimonial-author') as Element,
          {
            opacity: 0,
            x: -20
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: 'power2.out'
          },
          '-=0.2'
        )
    }
  }

  const goToNext = () => {
    const nextIndex = (current + 1) % testimonials.length
    setCurrent(nextIndex)
    animateCard(nextIndex)
  }

  const goToPrev = () => {
    const prevIndex = (current - 1 + testimonials.length) % testimonials.length
    setCurrent(prevIndex)
    animateCard(prevIndex)
  }

  const goToIndex = (index: number) => {
    setCurrent(index)
    animateCard(index)
  }

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay) return
    
    const timer = setInterval(() => {
      goToNext()
    }, 5000)
    
    return () => clearInterval(timer)
  }, [autoPlay, current])

  // Helper function to render stars
  const renderStars = (rating: number) => {
  return [...Array(5)].map((_, i) => (
    <Star
      key={i}
      size={18}
      fill={i < rating ? "#FFD700" : "none"}  // ← This fills the star!
      color={i < rating ? "#FFD700" : "rgba(255,255,255,0.3)"}
      strokeWidth={1.5}
    />
  ))
}

  return (
    <section 
ref={sectionRef}
      id="testimonials"
      className="bg-black py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Retailers Say
          </h2>
          <p className="text-white/70 text-lg">
            Trusted by jewelry retailers across the country
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          ref={carouselRef}
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Testimonial Cards */}
          <div className="relative h-80 md:h-72">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={el => {
                  cardRefs.current[index] = el
                }}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === current ? 'z-10' : 'z-0 pointer-events-none'
                }`}
                style={{
                  opacity: index === current ? 1 : 0,
                  visibility: index === current ? 'visible' : 'hidden'
                }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 rounded-xl h-full flex flex-col justify-between shadow-2xl">
                  {/* Stars - Now properly filled */}
                  <div className="stars flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p className="testimonial-content text-white text-lg leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="testimonial-author">
                    <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                    <p className="text-gold-400 text-xs mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goToPrev}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/20 hover:border-gold-500/50 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === current 
                      ? 'bg-gold-500 w-8' 
                      : 'bg-white/40 w-2 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/20 hover:border-gold-500/50 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Auto-play indicator */}
      
        </div>
      </div>
    </section>
  )
}