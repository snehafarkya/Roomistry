'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-accent/10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-12 md:p-16 text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Ready to Transform Your Space?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who have already discovered their perfect room design. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="#upload">Try Now Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#pricing">See Pricing</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">No credit card required • 7-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
