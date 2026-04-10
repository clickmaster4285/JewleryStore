'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to Jewelry Inventory Management',
    excerpt: 'Learn how to optimize your jewelry inventory with best practices and smart systems.',
    date: 'Mar 15, 2025',
    featured: true,
    image: '/blog-featured.jpg'
  },
  {
    id: 2,
    title: 'Jewelry Business Profitability: Key Metrics to Track',
    excerpt: 'Understand the essential metrics that determine your retail profitability.',
    date: 'Mar 10, 2025',
    featured: false,
    image: '/hero-jewelry-1.jpg'
  },
  {
    id: 3,
    title: 'Customer CRM Strategies for Jewelry Retailers',
    excerpt: 'Build lasting relationships with your customers through smart CRM practices.',
    date: 'Mar 5, 2025',
    featured: false,
    image: '/hero-jewelry-2.jpg'
  },
  {
    id: 4,
    title: 'Digital Transformation in Luxury Retail',
    excerpt: 'How modern technology is reshaping the jewelry retail landscape.',
    date: 'Feb 28, 2025',
    featured: false,
    image: '/hero-jewelry-3.jpg'
  },
  {
    id: 5,
    title: 'Preventing Jewelry Theft and Loss',
    excerpt: 'Implement security measures to protect your high-value inventory.',
    date: 'Feb 20, 2025',
    featured: false,
    image: '/case-study-1.jpg'
  },
  {
    id: 6,
    title: 'Multi-Store Management Best Practices',
    excerpt: 'Scale your jewelry business across multiple locations efficiently.',
    date: 'Feb 15, 2025',
    featured: false,
    image: '/solution-image.jpg'
  }
]

export function Blog() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const featuredPostRef = useRef<HTMLDivElement>(null)
  const otherPostsRef = useRef<(HTMLDivElement | null)[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const featured = blogPosts[0]
  const others = blogPosts.slice(1)

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

      // Featured post fade in
      gsap.fromTo(featuredPostRef.current,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuredPostRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Other posts staggered fade in
      otherPostsRef.current.forEach((post, index) => {
        if (!post) return
        
        gsap.fromTo(post,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: post,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Button fade in
      gsap.fromTo(buttonRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="blog" 
      ref={sectionRef}
      className="bg-gradient-to-b from-black to-gray-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-white/70 text-lg">
            Tips and trends for modern jewelry retail
          </p>
        </div>

        {/* Featured Post */}
        <div 
          ref={featuredPostRef}
          className="mb-12 group cursor-pointer"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-white/10">
              <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-bold text-sm">FEATURED</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar size={16} />
                  {featured.date}
                </div>
                <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((post, index) => (
            <div
              key={post.id}
              ref={el => {
                otherPostsRef.current[index] = el
              }}
              className="group cursor-pointer bg-white/5 border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-white/10 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60 flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button 
            ref={buttonRef}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded transition-all duration-300 border border-white/20 hover:border-gold-500/50"
          >
            View All Articles
          </button>
        </div> */}
      </div>
    </section>
  )
}