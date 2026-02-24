'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for exploring',
      price: 'Free',
      period: '',
      features: [
        '5 room designs per month',
        '3 design styles',
        'Basic moodboards',
        'Community support',
      ],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Pro',
      description: 'For design enthusiasts',
      price: '$9.99',
      period: '/month',
      features: [
        'Unlimited room designs',
        'All design styles',
        'Advanced moodboards',
        'Priority support',
        'Save & organize designs',
        'Shopping integration',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      description: 'For professionals',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited everything',
        'API access',
        'White-label options',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-medium text-primary">TRANSPARENT PRICING</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Simple & Affordable</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your design needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`border transition-all duration-300 ${
                plan.highlight
                  ? 'border-primary/40 shadow-xl scale-105 lg:scale-110 relative'
                  : 'border-border/40 hover:border-primary/20 hover:shadow-lg'
              } bg-gradient-to-br from-background to-background/50`}
            >
              {plan.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.highlight ? 'default' : 'outline'}>
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            All plans include a 7-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
