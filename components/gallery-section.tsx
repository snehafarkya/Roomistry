'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function GallerySection() {
  const transformations = [
    {
      style: 'Minimalist',
      colors: ['#f5f5f0', '#e8e8e4', '#ffffff', '#4a4a4a'],
      description: 'Clean lines and neutral tones',
    },
    {
      style: 'Modern Luxury',
      colors: ['#1a1a1a', '#d4af37', '#ffffff', '#2c2c2c'],
      description: 'Bold and sophisticated',
    },
    {
      style: 'Warm Rustic',
      colors: ['#8b6f47', '#d4a574', '#c9935e', '#f5deb3'],
      description: 'Cozy and inviting',
    },
    {
      style: 'Scandinavian',
      colors: ['#ffffff', '#f0f0f0', '#d3d3d3', '#555555'],
      description: 'Light and functional',
    },
    {
      style: 'Industrial',
      colors: ['#2c2c2c', '#555555', '#808080', '#d3d3d3'],
      description: 'Raw and contemporary',
    },
    {
      style: 'Coastal',
      colors: ['#87ceeb', '#f0f8ff', '#deb887', '#2f4f4f'],
      description: 'Fresh and breezy',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-medium text-primary">GALLERY</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Room Transformations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the amazing transformations our users have achieved
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformations.map((item, idx) => (
            <Card
              key={idx}
              className="overflow-hidden border border-border/40 hover:shadow-lg hover:border-primary/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative aspect-video bg-gradient-to-br overflow-hidden" style={{
                backgroundImage: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]}, ${item.colors[2]})`
              }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <svg className="w-12 h-12 mx-auto text-background/50 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2 border-t border-border/40">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{item.style}</h3>
                  <Badge variant="secondary" className="text-xs">{idx + 1}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="flex gap-2 pt-2">
                  {item.colors.map((color, cidx) => (
                    <div
                      key={cidx}
                      className="h-8 w-full rounded border border-border/40"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
