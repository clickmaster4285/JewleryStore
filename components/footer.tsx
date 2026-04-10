'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold-400">◆</span> JewelSync
            </h3>
            <p className="text-white/60 text-sm">
              Smart POS system designed specifically for modern jewelry retailers.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><Link href="#features" className="hover:text-gold-400 transition">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-gold-400 transition">Pricing</Link></li>
              <li><Link href="#security" className="hover:text-gold-400 transition">Security</Link></li>
              <li><Link href="#roadmap" className="hover:text-gold-400 transition">Roadmap</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><Link href="#docs" className="hover:text-gold-400 transition">Documentation</Link></li>
              <li><Link href="#api" className="hover:text-gold-400 transition">API Reference</Link></li>
              <li><Link href="#guides" className="hover:text-gold-400 transition">Guides</Link></li>
              <li><Link href="#support" className="hover:text-gold-400 transition">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@JewelSync.com" className="hover:text-gold-400 transition">hello@JewelSync.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1-800-JEWELS" className="hover:text-gold-400 transition">1-800-JEWELS</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>123 Retail St, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <p className="text-white/60 text-sm">
              © 2024 JewelSync. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-white/60 text-sm">
              <Link href="#privacy" className="hover:text-gold-400 transition">Privacy Policy</Link>
              <Link href="#terms" className="hover:text-gold-400 transition">Terms of Service</Link>
              <Link href="#cookies" className="hover:text-gold-400 transition">Cookies</Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300 hover:text-gold-400">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300 hover:text-gold-400">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition duration-300 hover:text-gold-400">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
