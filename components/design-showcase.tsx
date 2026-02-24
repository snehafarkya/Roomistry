'use client'

import { Card } from '@/components/ui/card'

interface DesignShowcaseProps {
  title: string
  category: string
  thumbnail?: string
  colors: string[]
}

export function DesignShowcase({ title, category, colors }: DesignShowcaseProps) {
  return (
    <Card className="overflow-hidden border border-border/40 hover:shadow-lg transition-all duration-300 group">
      <div className="relative aspect-square bg-gradient-to-br from-background to-background/50 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-md transform group-hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>
      <div className="p-4 space-y-2">
        <div>
          <p className="font-semibold text-foreground text-sm">{title}</p>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>
      </div>
    </Card>
  )
}
