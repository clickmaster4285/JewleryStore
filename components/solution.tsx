'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'

const solutions = [
  'Real-time inventory tracking with barcode scanning',
  'Automated billing and invoicing system',
  'CRM for customer relationship management',
  'Advanced analytics and profit insights',
  'Multi-store management from one dashboard',
  'Secure data backup and compliance'
]

export function Solution() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-96 lg:h-full rounded-lg overflow-hidden group">
            <Image
              src="/solution-image.jpg"
              alt="Solution showcase"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              The Complete Solution
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Our intelligent POS system transforms jewelry retail operations with real-time inventory, automated billing, and comprehensive analytics.
            </p>

            {/* Solutions List */}
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mt-1 group-hover:shadow-lg group-hover:shadow-gold-500/50 transition-all duration-300">
                    <Check size={16} className="text-black" />
                  </div>
                  <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {solution}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
