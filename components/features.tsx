'use client'

import { BarChart3, CreditCard, Users, LineChart, Building2, Barcode } from 'lucide-react'

const features = [
  {
    icon: Barcode,
    title: 'Barcode Scanning',
    description: 'Fast and accurate inventory tracking with advanced barcode technology'
  },
  {
    icon: CreditCard,
    title: 'Smart Billing',
    description: 'Automated invoicing and payment processing for jewelry transactions'
  },
  {
    icon: Users,
    title: 'Customer CRM',
    description: 'Build relationships with detailed customer profiles and purchase history'
  },
  {
    icon: LineChart,
    title: 'Real Analytics',
    description: 'Comprehensive sales and profit analytics with actionable insights'
  },
  {
    icon: Building2,
    title: 'Multi-Store',
    description: 'Manage multiple locations from a single powerful dashboard'
  },
  {
    icon: BarChart3,
    title: 'Inventory Mgmt',
    description: 'Advanced stock management with automatic low-stock alerts'
  }
]

export function Features() {
  return (
    <section id="features" className="bg-gradient-to-b from-black via-gray-900/50 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to run a modern jewelry retail business efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl hover:border-gold-500/50 transition-all duration-300 hover:from-white/15 hover:to-white/10 hover:shadow-2xl hover:shadow-gold-500/20"
              >
                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-gold-400 mb-4 group-hover:scale-125 group-hover:text-gold-300 transition-all duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 bg-gradient-to-br from-gold-500/10 to-transparent" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
