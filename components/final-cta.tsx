'use client'

export function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Ready to Transform Your Jewelry Business?
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          Join hundreds of jewelry retailers who&apos;ve already improved their operations with JewelPOS. Start your free trial today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary hover:bg-gray-900 text-primary font-bold rounded transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
            Book Free Demo
          </button>
          <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-black font-bold rounded transition-all duration-300 border border-black/30 backdrop-blur-md">
            Contact Sales
          </button>
        </div>

        <p className="text-black/70 text-sm mt-8">
          ✓ 30-day free trial • No credit card required • Full feature access
        </p>
      </div>
    </section>
  )
}
