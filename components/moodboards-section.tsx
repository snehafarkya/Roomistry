'use client'

import { useState } from 'react'
import { DesignWizardModal } from './design-wizard-modal'

const moodboards = [
  {
    title: 'Serene Minimalism',
    description: 'Clean lines and neutral tones create a peaceful, uncluttered space perfect for relaxation.',
    colors: ['#f5f5f0', '#e8e8e4', '#c9c9c1', '#7a7a6e'],
    style: 'Minimalist',
  },
  {
    title: 'Urban Modern',
    description: 'Contemporary design with bold accents and industrial touches for city living.',
    colors: ['#1a1a1a', '#404040', '#2e8b57', '#ff6b35'],
    style: 'Modern',
  },
  {
    title: 'Warm Bohemian',
    description: 'Eclectic mix of textures and warm earth tones with global influences and character.',
    colors: ['#d4a574', '#8b6f47', '#c9935e', '#e8c4a0'],
    style: 'Bohemian',
  },
  {
    title: 'Classic Elegance',
    description: 'Timeless design combining traditional elements with modern comfort and luxury.',
    colors: ['#2d3436', '#636e72', '#dfe6e9', '#ffeaa7'],
    style: 'Classic',
  },
  {
    title: 'Scandinavian Light',
    description: 'Light-filled spaces with functional furniture and natural materials for bright living.',
    colors: ['#ffffff', '#f0f0f0', '#d3d3d3', '#4a4a4a'],
    style: 'Scandinavian',
  },
  {
    title: 'Tropical Paradise',
    description: 'Vibrant colors and natural textures inspired by tropical landscapes and nature.',
    colors: ['#2c5f2d', '#97bc62', '#ffb703', '#fb8500'],
    style: 'Tropical',
  },
]

export function MoodboardsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [initialStyle, setInitialStyle] = useState('')

  const openWithStyle = (style: string) => {
    setInitialStyle(style)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="moodboards" className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm font-medium text-primary">DESIGN INSPIRATION</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Explore Moodboards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click any style to start redesigning your room instantly
            </p>
          </div>

          <div id='upload' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moodboards.map((m, idx) => (
              <button
                key={idx}
                onClick={() => openWithStyle(m.style)}
                className="text-left rounded-2xl border border-border/40 p-5 space-y-4 transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 group"
              >
                <div className="flex gap-2">
                  {m.colors.map((color, i) => (
                    <div
                      key={i}
                      className="h-10 flex-1 rounded-lg transition-transform group-hover:scale-y-110"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">{m.title}</h3>
                    <svg
                      className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">{m.description}</p>
                </div>
                <span className="inline-block text-xs font-medium text-muted-foreground border border-border/40 px-2 py-1 rounded-full group-hover:border-primary/40 group-hover:text-primary transition-colors">
                  {m.style}
                </span>
              </button>
            ))}
          </div>

          <div  className="text-center">
            <button
              onClick={() => openWithStyle('')}
              className="inline-flex cursor-pointer items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              Upload My Room & Pick a Style
            </button>
          </div>
        </div>
      </section>

      <DesignWizardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialStyle={initialStyle}
      />
    </>
  )
}