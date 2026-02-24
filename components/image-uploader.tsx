'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function ImageUploader({ selectedStyle }: { selectedStyle: string }) {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        setGeneratedImage(null) // reset old result
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleReset = () => {
    setUploadedImage(null)
    setGeneratedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const generateDesign = async () => {
    if (!uploadedImage) return

    setLoading(true)
    setGeneratedImage(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
     body: JSON.stringify({
  style: selectedStyle,
  image: uploadedImage  // add this
})
      })

      const data = await response.json()

      if (data.image) {
        setGeneratedImage(data.image)
      } else {
        alert('Generation failed')
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto" id="upload">
      <Card className="border border-border/40 bg-gradient-to-br from-background to-background/50 p-8">
        {uploadedImage ? (
          <div className="space-y-6">

            {/* BEFORE IMAGE */}
            <div>
              <p className="text-sm font-medium mb-2 text-muted-foreground">
                Original Room
              </p>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border/40 bg-muted">
                <img
                  src={uploadedImage}
                  alt="Uploaded room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* LOADING STATE */}
            {loading && (
              <p className="text-center text-sm text-muted-foreground">
                Generating design... This may take 10–20 seconds ✨
              </p>
            )}

            {/* GENERATED IMAGE */}
            {generatedImage && (
              <div>
                <p className="text-sm font-medium mb-2 text-muted-foreground">
                  AI Generated Design
                </p>
                <div className="relative aspect-video rounded-lg overflow-hidden border border-border/40 bg-muted">
                  <img
                    src={generatedImage}
                    alt="Generated design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex gap-3">
              <Button
                onClick={handleReset}
                variant="outline"
                className="flex-1"
                disabled={loading}
              >
                Choose Another Photo
              </Button>

              <Button
                className="flex-1"
                onClick={generateDesign}
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Generate Design'}
              </Button>
            </div>

          </div>
        ) : (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
            className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-primary bg-primary/5'
                : 'border-border/40 hover:border-primary/40 hover:bg-background/50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8l-6-4m6 4l6-4"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-lg font-semibold text-foreground">
                  Drop your room photo here
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  or click to browse from your device
                </p>
              </div>

              <p className="text-xs text-muted-foreground">
                Supported formats: JPG, PNG, WebP (Max 10MB)
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}