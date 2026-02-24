'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'RoomGPT completely transformed my living room! The AI suggestions were spot-on and helped me create a space I truly love.',
      author: 'Sarah Mitchell',
      role: 'Home Owner',
      avatar: 'SM',
      rating: 5,
    },
    {
      quote: 'As an interior designer, I use RoomGPT to quickly explore design concepts with clients. It saves hours of mood board creation.',
      author: 'James Chen',
      role: 'Interior Designer',
      avatar: 'JC',
      rating: 5,
    },
    {
      quote: 'The moodboards are incredibly detailed and the shopping integration makes it so easy to actually buy the pieces. Brilliant!',
      author: 'Emma Rodriguez',
      role: 'Design Enthusiast',
      avatar: 'ER',
      rating: 5,
    },
    {
      quote: 'I was skeptical about AI design, but RoomGPT proved me wrong. The suggestions are creative and actually implementable.',
      author: 'Michael Thompson',
      role: 'Apartment Dweller',
      avatar: 'MT',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-medium text-primary">LOVED BY THOUSANDS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Customer Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about their design journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border border-border/40 bg-gradient-to-br from-background to-background/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-2">
                  <Avatar className="h-10 w-10 bg-primary/20 text-primary">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
