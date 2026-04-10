'use client'

const brands = [
  'Cartier',
  'Swarovski',
  'Tiffany & Co',
  'Pandora',
  'Bulgari',
  'Van Cleef',
  'Harry Winston',
  'De Beers'
]

export function TrustedBy() {
  return (
    <section className="bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-white/70 text-lg mb-12">
          Trusted by jewelry retailers worldwide
        </h2>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-xl font-semibold text-white/50 hover:text-gold-400 transition duration-300"
              >
                {brand}
              </div>
            ))}
          </div>

          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
