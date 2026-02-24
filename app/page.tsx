'use client';
import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorks } from '@/components/how-it-works'
import { MoodboardsSection } from '@/components/moodboards-section'
import { ImageUploader } from '@/components/image-uploader'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PricingSection } from '@/components/pricing-section'
import { CTASection } from '@/components/cta-section'
import { GallerySection } from '@/components/gallery-section'
import { AnnouncementBanner } from '@/components/announcement-banner'


export default function Home() {
  const [selectedStyle, setSelectedStyle] = useState('Modern');
  return (
    <main className="min-h-screen bg-background">
      {/* <AnnouncementBanner /> */}
      <Header />
      <Hero />
      <FeaturesSection />
      <HowItWorks />
       {/* <MoodboardsSection
        selectedStyle={selectedStyle}
        onStyleSelect={setSelectedStyle}
      /> */}
      {/* <GallerySection /> */}
      {/* <TestimonialsSection /> */}
     
      
      {/* Image Upload Section */}
    
          {/* <ImageUploader selectedStyle={selectedStyle} /> */}
          <MoodboardsSection/>
        
 {/* <PricingSection /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
