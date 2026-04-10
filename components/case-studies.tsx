'use client'

import Image from 'next/image'
import { TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    company: 'Elegance Jewelers',
    before: 'Manual inventory causing $5,000/month in losses',
    after: 'Real-time tracking with 99.8% accuracy',
    stats: [
      { label: 'Inventory Accuracy', before: '85%', after: '99.8%' },
      { label: 'Time Saved Weekly', before: '0hrs', after: '20hrs' },
      { label: 'Revenue Increase', before: '0%', after: '+35%' }
    ]
  },
  {
    id: 2,
    company: 'Diamond Dreams Co',
    before: 'Billing errors occurring daily',
    after: 'Automated accurate invoicing system',
    stats: [
      { label: 'Billing Errors', before: '12/day', after: '0/month' },
      { label: 'Customer Satisfaction', before: '82%', after: '98%' },
      { label: 'Processing Speed', before: '25min', after: '3min' }
    ]
  },
  {
    id: 3,
    company: 'Premium Gold House',
    before: 'No visibility into profitability',
    after: 'Complete business intelligence',
    stats: [
      { label: 'Profit Visibility', before: 'Manual', after: 'Real-time' },
      { label: 'Decision Time', before: '1 week', after: '5 mins' },
      { label: 'Margin Improvement', before: '0%', after: '+22%' }
    ]
  }
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Real Results from Real Retailers
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See how jewelry businesses transformed with JewelPOS
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-12 bg-gradient-to-r from-gold-500/10 to-transparent p-8 lg:p-12 rounded-xl border border-gold-500/30">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
              <Image
                src="/case-study-1.jpg"
                alt="Featured case study"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-gold-400" size={24} />
                <span className="text-gold-400 font-semibold">Featured Success</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Elegance Jewelers: 35% Revenue Growth in 6 Months
              </h3>
              <p className="text-white/70 mb-6">
                By implementing JewelPOS, this premium jewelry retailer eliminated inventory discrepancies, reduced billing errors by 100%, and increased revenue by 35% through better data-driven decisions.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded">
                  <p className="text-gold-400 font-bold text-lg">99.8%</p>
                  <p className="text-white/60 text-sm">Accuracy</p>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <p className="text-gold-400 font-bold text-lg">20hrs</p>
                  <p className="text-white/60 text-sm">Saved/week</p>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <p className="text-gold-400 font-bold text-lg">+35%</p>
                  <p className="text-white/60 text-sm">Revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Case Studies */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.slice(1).map((study) => (
            <div key={study.id} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-gold-500/50 transition-all duration-300 hover:bg-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">{study.company}</h3>
              
              <div className="mb-6 space-y-2">
                <div>
                  <p className="text-white/60 text-sm">Before</p>
                  <p className="text-white font-semibold">{study.before}</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">After</p>
                  <p className="text-gold-400 font-semibold">{study.after}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {study.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/5 p-3 rounded text-center">
                    <p className="text-white/60 text-xs mb-1">{stat.label}</p>
                    <p className="text-white text-xs font-semibold mb-1">{stat.before}</p>
                    <p className="text-gold-400 text-xs font-bold">→ {stat.after}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
