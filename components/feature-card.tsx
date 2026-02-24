'use client'

import { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  badge?: string
}

export function FeatureCard({ icon, title, description, badge }: FeatureCardProps) {
  return (
    <Card className="border border-border/40 bg-gradient-to-br from-background to-background/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          {badge && (
            <span className="text-xs font-semibold bg-accent/20 text-accent px-2 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
