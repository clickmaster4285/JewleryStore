'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Simple fade in on mount
    if (footerRef.current) {
      footerRef.current.style.opacity = '0'
      footerRef.current.style.transform = 'translateY(20px)'
      footerRef.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      
      setTimeout(() => {
        if (footerRef.current) {
          footerRef.current.style.opacity = '1'
          footerRef.current.style.transform = 'translateY(0)'
        }
      }, 100)
    }
  }, [])

  return (
    <footer 
      ref={footerRef}
      id="contact" 
      className="bg-black border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              JewelSync
            </h3>
            <p className="text-white/70 text-sm">
              Smart POS system designed specifically for modern jewelry retailers.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="#features" className="hover:text-white hover:underline transition">Features</Link></li>
              <li><Link href="#case-studies" className="hover:text-white hover:underline transition">Case Studies</Link></li>
              <li><Link href="#blog" className="hover:text-white hover:underline transition">Blogs</Link></li>
              <li><Link href="#testimonials" className="hover:text-white hover:underline transition">Testimonials</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="#contact" className="hover:text-white hover:underline transition">Documentation</Link></li>
              <li><Link href="#contact" className="hover:text-white hover:underline transition">API Reference</Link></li>
              <li><Link href="#contact" className="hover:text-white hover:underline transition">Guides</Link></li>
              <li><Link href="#contact" className="hover:text-white hover:underline transition">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:marketing@clickmasters.pk" className="hover:text-white hover:underline transition">marketing@clickmasters.pk</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+92-333-1116842" className="hover:text-white hover:underline transition">+92 333-1116842</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Main PWD Rd, Islamabad, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <p className="text-white/60 text-sm">
              © 2026 JewelSync. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-white/60 text-sm">
              <Link href="#privacy" className="hover:text-white hover:underline transition">Privacy Policy</Link>
              <Link href="#23terms" className="hover:text-white hover:underline transition">Terms of Service</Link>
              <Link href="#cookies" className="hover:text-white hover:underline transition">Cookies</Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}