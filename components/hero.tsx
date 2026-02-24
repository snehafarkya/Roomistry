'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-image min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background/80 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 place-content-center place-items-center gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-2 items-center justify-center ">
            <div className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <p className="text-sm font-medium text-primary">✨ Transform Your Space with AI</p>
            </div>

            <div className='flex flex-col gap-4 justify-center items-center text-center'>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight ">
                Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Perfect Room</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg text-center">
                Upload a photo of your room and let our AI generate stunning design suggestions and moodboards tailored to your style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="gap-2">
                <Link href="#upload">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8l-6-4m6 4l6-4" />
                  </svg>
                  Try Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 place-content-center place-items-center">
              <div>
                <p className="text-3xl font-bold text-primary ">50K+</p>
                <p className="text-sm text-muted-foreground">Rooms Designed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4.9</p>
                <p className="text-sm text-muted-foreground">User Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">99%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          {/* <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/40 bg-gradient-to-br from-primary/10 to-accent/10 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <svg className="w-24 h-24 mx-auto text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-muted-foreground">Upload Your Room Photo</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
