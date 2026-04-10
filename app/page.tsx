import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustedBy } from '@/components/trusted-by'
import { PainPoints } from '@/components/pain-points'
import { Solution } from '@/components/solution'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { CaseStudies } from '@/components/case-studies'
import { Testimonials } from '@/components/testimonials'
import { Blog } from '@/components/blog'
import { About } from '@/components/about'

import {Contact} from '@/components/contactUs'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <PainPoints />
      <Solution />
      <Features />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <Blog />

      <Contact />
      <Footer />
    </main>
  )
}
