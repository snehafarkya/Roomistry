'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AnnouncementBanner() {
  return (
    <div className="relative w-full bg-gradient-to-r from-primary/10 to-accent/10 border-b border-primary/20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-3 text-sm">
          <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a6 6 0 016-6h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V6z" />
            <circle cx="10" cy="10" r="1" fill="currentColor" />
          </svg>
          <span className="text-foreground">
            🎉 <strong>7-day free trial</strong> starts now – no credit card needed!
          </span>
          <Button asChild variant="ghost" size="sm" className="ml-auto">
            <Link href="#pricing">Learn more →</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
