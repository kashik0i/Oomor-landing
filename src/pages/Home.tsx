import { Hero } from '../components/Hero'
import { Benefits } from '../components/Benefits'
import { Features } from '../components/Features'
import { Testimonials } from '../components/Testimonials'
import { Pricing } from '../components/Pricing'
import { CtaSection } from '../components/CtaSection'

export function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      <Pricing />
      <CtaSection />
    </div>
  )
}
