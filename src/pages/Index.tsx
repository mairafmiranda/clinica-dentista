import { Hero } from '@/components/sections/Hero'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { ClinicalExcellence } from '@/components/sections/ClinicalExcellence'

export default function Index() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServicesPreview />
      <ClinicalExcellence />
      <Testimonials />
    </div>
  )
}
