'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white flex-shrink-0">
            JewelSync
          </Link>

          {/* Desktop Menu - Hidden on tablet */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#home" className="text-white/80 hover:text-white transition whitespace-nowrap">Home</Link>
            <Link href="#features" className="text-white/80 hover:text-white transition whitespace-nowrap">Features</Link>
            <Link href="#solutions" className="text-white/80 hover:text-white transition whitespace-nowrap">How it Works</Link>
            <Link href="#case-studies" className="text-white/80 hover:text-white transition whitespace-nowrap">Case Studies</Link>
            <Link href="#blog" className="text-white/80 hover:text-white transition whitespace-nowrap">Blog</Link>
            <Link href="#testimonials" className="text-white/80 hover:text-white transition whitespace-nowrap">Testimonials</Link>
          </div>

          {/* Contact Sales Button - Hidden on tablet, shows on desktop */}
          <div className="hidden lg:block">
            <Link href="/#contact" className="px-6 py-2 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded transition shadow-lg hover:shadow-gold-500/50 duration-300 whitespace-nowrap">
              Contact Sales
            </Link>
          </div>

          {/* Mobile Menu Button - Shows on tablet and mobile */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Shows on tablet and mobile */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-2">
            <Link href="#home" className="block py-3 text-white/80 hover:text-white transition">Home</Link>
            <Link href="#features" className="block py-3 text-white/80 hover:text-white transition">Features</Link>
            <Link href="#solutions" className="block py-3 text-white/80 hover:text-white transition">How it Works</Link>
            <Link href="#case-studies" className="block py-3 text-white/80 hover:text-white transition">Case Studies</Link>
            <Link href="#blog" className="block py-3 text-white/80 hover:text-white transition">Blog</Link>
            <Link href="#testimonials" className="block py-3 text-white/80 hover:text-white transition">Testimonials</Link>
            <Link href="/#contact" className="mt-4 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded transition block text-center">
              Contact Sales
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}