'use client'

interface MoodboardCardProps {
  title: string
  description: string
  colors: string[]
  style: string
  isSelected?: boolean
  onSelect?: (style: string) => void
}

export function MoodboardCard({ title, description, colors, style, isSelected, onSelect }: MoodboardCardProps) {
  return (
    <div
      onClick={() => onSelect?.(style)}
      className={`cursor-pointer rounded-2xl border-2 p-5 transition-all space-y-4
        ${isSelected
          ? 'border-primary bg-primary/5 shadow-lg scale-[1.02]'
          : 'border-border/40 hover:border-primary/40 hover:shadow-md'
        }`}
    >
      {/* Color Palette */}
      <div className="flex gap-2">
        {colors.map((color, i) => (
          <div
            key={i}
            className="h-10 flex-1 rounded-lg"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Text */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">{title}</h3>
          {isSelected && (
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              Selected ✓
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {/* Style Tag */}
      <div>
        <span className="text-xs font-medium text-muted-foreground border border-border/40 px-2 py-1 rounded-full">
          {style}
        </span>
      </div>
    </div>
  )
}