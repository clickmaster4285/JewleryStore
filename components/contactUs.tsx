'use client'

import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Building, Navigation, CheckCircle2, ChevronDown, HelpCircle, MessageCircle, Calendar, Award } from 'lucide-react'
import { toast } from "sonner"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// FAQ Data
const faqs = [
  {
    id: "1",
    question: "How does JewelSync help with inventory tracking?",
    answer: "JewelSync provides real-time inventory tracking with barcode scanning, automatic low-stock alerts, and multi-store synchronization to prevent stock mismatches and losses."
  },
  {
    id: "2",
    question: "How long does it take to set up the system?",
    answer: "Most jewelry retailers can get fully set up within 24-48 hours. Our team provides guided onboarding, data migration assistance, and staff training to ensure a smooth transition."
  },
  {
    id: "3",
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 30-day free trial with full access to all features. No credit card required to start."
  },
  {
    id: "4",
    question: "Can I manage multiple store locations?",
    answer: "Absolutely! Our multi-store management feature allows you to control all your locations from a single dashboard, with centralized inventory, unified reporting, and cross-store analytics."
  },
  {
    id: "5",
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 technical support via phone, email, and live chat. All plans include dedicated support from our jewelry retail tech experts."
  },
  {
    id: "6",
    question: "Is my data secure with JewelSync?",
    answer: "Yes, we use enterprise-grade encryption, secure cloud backups, and comply with industry standards to ensure your sensitive business and customer data is always protected."
  }
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  
  const sectionRef = useRef<HTMLElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const formRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column animation
      gsap.fromTo(leftColumnRef.current,
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
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
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Contact cards staggered animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return
        gsap.fromTo(card,
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
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Form animation
      gsap.fromTo(formRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Map animation
      gsap.fromTo(mapRef.current,
        {
          opacity: 0,
          scale: 0.95
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // FAQ animation
      gsap.fromTo(faqRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setShowSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      } else {
        toast.error(result.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Submit error:", error)
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      infos: [
        { value: "+1-800-JEWELS", action: "tel:+1800JEWELS" },
        { value: "+1-212-555-0123", action: "tel:+12125550123" },
      ],
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400"
    },
    {
      icon: Mail,
      title: "Email",
      infos: [
        { value: "hello@JewelSync.com", subtext: "We respond within 24 hours", action: "mailto:hello@JewelSync.com" },
        { value: "support@JewelSync.com", subtext: "24/7 technical support", action: "mailto:support@JewelSync.com" },
      ],
      color: "from-emerald-500/20 to-emerald-600/20",
      iconColor: "text-emerald-400"
    },
    {
      icon: Clock,
      title: "Business Hours",
      infos: [{ value: "Monday - Saturday", subtext: "9:00 AM - 6:00 PM EST" }],
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-400"
    },
    {
      icon: Building,
      title: "Support",
      infos: [{ value: "24/7 Technical Support" }],
      color: "from-orange-500/20 to-orange-600/20",
      iconColor: "text-orange-400"
    },
  ]

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="bg-gradient-to-b from-black to-gray-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have questions about JewelSync? We're here to help you transform your jewelry retail business
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN - Contact Cards + Form */}
          <div ref={leftColumnRef} className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.title}
                    ref={el => { cardsRef.current[index] = el }}
                    className={`backdrop-blur-sm border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:border-gold-500/50 hover:-translate-y-2 cursor-pointer group`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-black/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className={`w-6 h-6 text-primary`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-md mb-2">{item.title}</h3>
                        {item.infos.map((info, idx) => (
                          info.action ? (
                            <a key={idx} href={info.action} className="block text-white/80 text-sm font-medium mb-1 hover:text-primary transition">
                              {info.value}
                              {info.subtext && <p className="text-xs text-white/40">{info.subtext}</p>}
                            </a>
                          ) : (
                            <div key={idx} className="mb-1">
                              <p className="text-white/80 text-sm font-medium">{info.value}</p>
                              {info.subtext && <p className="text-xs text-white/40">{info.subtext}</p>}
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Contact Form */}
            <div 
              ref={formRef}
              className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
                <p className="text-white/60">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              {showSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-8 md:py-12">
                  <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
                  <p className="text-white/60 mb-4 max-w-sm">
                    Thank you for contacting us. We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-lg transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-black/50 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-black/50 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-black/50 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition"
                      placeholder="+1-800-JEWELS"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-black/50 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition resize-none"
                      placeholder="Tell us about your jewelry business and what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-semibold rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-gold-500/20"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - FAQ + Map */}
          <div ref={rightColumnRef} className="space-y-8">
            {/* Map Card */}
            <div 
              ref={mapRef}
              className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="p-4 border-b border-white/10 bg-black/30">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Visit Our Office
                </h3>
                <p className="text-sm text-white/50 mt-1">
                  123 Retail Street, New York, NY 10001
                </p>
              </div>
              <div className="h-[240px] w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/5 to-transparent" />
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-white/60 text-sm">Interactive Map Loading...</p>
                  <a 
                    href="https://maps.google.com/?q=123+Retail+Street+New+York+NY+10001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary text-sm hover:underline"
                  >
                    <Navigation className="h-3 w-3" />
                    View on Google Maps →
                  </a>
                </div>
              </div>
              <div className="p-4 border-t border-white/10 bg-black/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Book a visit: <a href="tel:+1-800-JEWELS" className="text-primary hover:underline">1-800-JEWELS</a></span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=123+Retail+Street+New+York+NY+10001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold-300 transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div ref={faqRef}>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-white">
                    Frequently Asked Questions
                  </h3>
                </div>
                <p className="text-white/60 text-sm">
                  Find answers to common questions about JewelSync
                </p>
              </div>

              <div className="space-y-3">
                {faqs.slice(0, 4).map((faq, index) => (
                  <div
                    key={faq.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-gold-500/30 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/10 transition-colors duration-300"
                    >
                      <span className="font-semibold text-white text-sm pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-white/60 transition-transform duration-300 flex-shrink-0 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaqIndex === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="px-5 pb-4 pt-0">
                        <div className="h-px bg-white/10 mb-3" />
                        <p className="text-white/60 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-6 p-4 rounded-xl border  border-white/10 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-white text-sm font-semibold">Trusted by 500+ Jewelry Retailers</span>
                </div>
                <p className="text-white/50 text-xs">
                  ⭐⭐⭐⭐⭐ 4.9/5 from 200+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}