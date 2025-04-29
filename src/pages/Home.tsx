import { lazy, Suspense } from 'react'
import { Hero } from '../components/Hero'

const Benefits = lazy(() => import('../components/Benefits').then(module => ({ default: module.Benefits })))
const Features = lazy(() => import('../components/Features').then(module => ({ default: module.Features })))
const Testimonials = lazy(() => import('../components/Testimonials').then(module => ({ default: module.Testimonials })))
const Pricing = lazy(() => import('../components/Pricing').then(module => ({ default: module.Pricing })))
const CtaSection = lazy(() => import('../components/CtaSection').then(module => ({ default: module.CtaSection })))

const LazyComponent = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={
    <div className="flex items-center justify-center py-20">
      <div className="animate-pulse w-full max-w-7xl mx-auto h-96 bg-gray-100 rounded-xl"></div>
    </div>
  }>
    {children}
  </Suspense>
)

export function Home() {
  return (
    <div>
      <Hero />
      <LazyComponent><Benefits /></LazyComponent>
      <LazyComponent><Features /></LazyComponent>
      <LazyComponent><Testimonials /></LazyComponent>
      <LazyComponent><Pricing /></LazyComponent>
      <LazyComponent><CtaSection /></LazyComponent>
    </div>
  )
}
