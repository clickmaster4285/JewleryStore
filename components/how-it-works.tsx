'use client'

import { Download, Zap, BarChart3, Check } from 'lucide-react'

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Install & Setup',
    description: 'Get JewelPOS up and running in just 15 minutes with our quick setup wizard'
  },
  {
    icon: Zap,
    number: '02',
    title: 'Sync Your Inventory',
    description: 'Import your existing jewelry inventory and set up real-time tracking'
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Start Tracking',
    description: 'Begin monitoring sales, inventory, and customer data with live analytics'
  },
  {
    icon: Check,
    number: '04',
    title: 'Grow Your Business',
    description: 'Use insights to optimize operations and increase profitability'
  }
]

export function HowItWorks() {
  return (
    <section id="solutions" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Four simple steps to transform your jewelry retail business
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-500 to-gold-500/20 transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div key={index} className={`flex ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
                  {/* Content */}
                  <div className="flex-1 md:w-1/2">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-gold-500/50 transition-all duration-300 hover:bg-white/10">
                      <p className="text-gold-400 font-bold text-lg mb-2">{step.number}</p>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-white/60">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="flex-shrink-0 md:w-1/2 flex justify-center">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-2xl shadow-gold-500/50 z-10">
                      <Icon size={32} className="text-black" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
