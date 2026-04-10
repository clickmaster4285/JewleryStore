'use client'

import { AlertCircle, TrendingDown, Lock, Eye, DollarSign } from 'lucide-react'

const painPoints = [
  {
    icon: AlertCircle,
    title: 'Stock Mismatch',
    description: 'Gold & diamonds inventory errors costing thousands in losses'
  },
  {
    icon: TrendingDown,
    title: 'Manual Billing Errors',
    description: 'Time-consuming manual processes leading to costly mistakes'
  },
  {
    icon: Eye,
    title: 'No Real-time Tracking',
    description: 'Lack of visibility into current inventory and sales'
  },
  {
    icon: Lock,
    title: 'Theft & Missing Stock',
    description: 'Difficulty tracking high-value items and preventing loss'
  },
  {
    icon: DollarSign,
    title: 'No Profit Visibility',
    description: 'Unable to understand true profitability by product line'
  }
]

export function PainPoints() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Challenges Facing Jewelry Retailers
          </h2>
          <p className="text-white/70 text-lg">
            The pain points that cost you time and money every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={index}
                className="group relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:border-gold-500/50 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-gold-500/0 rounded-lg transition-all duration-300" />
                
                <div className="relative">
                  <Icon className="w-10 h-10 text-gold-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-white/60">{point.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
