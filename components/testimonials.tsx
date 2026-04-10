'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Elegance Jewelers',
    company: 'New York, NY',
    content: 'JewelPOS has been a game-changer for our business. We\'ve cut our administrative time in half and our accuracy has never been better.',
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
    content: 'We\'ve tried other systems before, but JewelPOS is in a league of its own. Our staff loves how easy it is to use.',
    rating: 5
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [autoPlay])

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Retailers Say
          </h2>
          <p className="text-white/70 text-lg">
            Trusted by jewelry retailers across the country
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Testimonial Cards */}
          <div className="relative h-80 md:h-72 lg:h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 rounded-xl h-full flex flex-col justify-between">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-gold-400 fill-gold-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white text-lg">&ldquo;{testimonial.content}&rdquo;</p>

                  {/* Author */}
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                    <p className="text-gold-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300 border border-white/20"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition duration-300 ${
                    index === current ? 'bg-gold-500 w-8' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300 border border-white/20"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
