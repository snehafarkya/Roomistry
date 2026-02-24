"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "./ui/button";

interface Moodboard {
  title: string;
  description: string;
  colors: string[];
  style: string;
}

const moodboards: Moodboard[] = [
  {
    title: "Serene Minimalism",
    description:
      "Clean lines and neutral tones for a peaceful, uncluttered space.",
    colors: ["#f5f5f0", "#e8e8e4", "#c9c9c1", "#7a7a6e"],
    style: "Minimalist",
  },
  {
    title: "Urban Modern",
    description:
      "Contemporary design with bold accents and industrial touches.",
    colors: ["#1a1a1a", "#404040", "#2e8b57", "#ff6b35"],
    style: "Modern",
  },
  {
    title: "Warm Bohemian",
    description:
      "Eclectic textures and warm earth tones with global influences.",
    colors: ["#d4a574", "#8b6f47", "#c9935e", "#e8c4a0"],
    style: "Bohemian",
  },
  {
    title: "Classic Elegance",
    description:
      "Timeless design combining traditional elements with modern comfort.",
    colors: ["#2d3436", "#636e72", "#dfe6e9", "#ffeaa7"],
    style: "Classic",
  },
  {
    title: "Scandinavian Light",
    description:
      "Light-filled spaces with functional furniture and natural materials.",
    colors: ["#ffffff", "#f0f0f0", "#d3d3d3", "#4a4a4a"],
    style: "Scandinavian",
  },
  {
    title: "Tropical Paradise",
    description:
      "Vibrant colors and natural textures inspired by tropical landscapes.",
    colors: ["#2c5f2d", "#97bc62", "#ffb703", "#fb8500"],
    style: "Tropical",
  },
];

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all duration-500 ${
            i <= current ? "w-6 bg-primary" : "w-2 bg-border"
          }`}
        />
      ))}
      <span className="ml-2 text-xs text-muted-foreground font-medium">
        Step {current + 1} of {total}
      </span>
    </div>
  );
}

function UploadStep({
  onUpload,
}: {
  onUpload: (imageDataUrl: string) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) onUpload(e.target.result as string);
      };
      reader.readAsDataURL(file);
    },
    [onUpload],
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Upload your room</h2>
        <p className="text-muted-foreground mt-1">
          Take a photo of any room  we'll give inspiration to redesign it for you.
        </p>
      </div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const file = e.dataTransfer.files[0];
          if (file) handleFile(file);
        }}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200 ${
          isDragging
            ? "border-primary bg-primary/5 scale-[1.01]"
            : "border-border/50 hover:border-primary/50 hover:bg-muted/30"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
        />
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
          <div>
            <p className="text-base font-semibold text-foreground">
              Drop your room photo here
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              or click to browse from your device
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            JPG, PNG, WebP · Max 10MB
          </p>
        </div>
      </div>
    </div>
  );
}

function StyleStep({
  uploadedImage,
  selectedStyle,
  onSelectStyle,
  onGenerate,
  onBack,
}: {
  uploadedImage: string;
  selectedStyle: string;
  onSelectStyle: (style: string) => void;
  onGenerate: () => void;
  onBack: () => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Choose a style</h2>
        <p className="text-muted-foreground mt-1">
          Pick the aesthetic you want for your room.
        </p>
      </div>

      <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border/40">
        <img
          src={uploadedImage}
          alt="Your room"
          className="w-16 h-16 rounded-lg object-cover shrink-0"
        />
        <div>
          <p className="text-sm font-medium text-foreground">Your room</p>
          <p className="text-xs text-muted-foreground">
            Ready to be redesigned
          </p>
        </div>
        <button
          onClick={onBack}
          className="ml-auto text-xs text-muted-foreground hover:text-foreground underline"
        >
          Change
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-2 max-h-[340px] overflow-y-auto ">
        {moodboards.map((m) => (
          <button
            key={m.style}
            onClick={() => onSelectStyle(m.style)}
            className={`text-left rounded-xl border-2 p-3 transition-all duration-200 space-y-2 ${
              selectedStyle === m.style
                ? "border-primary bg-primary/5 shadow-md scale-[1.02]"
                : "border-border/40 hover:border-primary/30 hover:shadow-sm"
            }`}
          >
            <div className="flex gap-1">
              {m.colors.map((color, i) => (
                <div
                  key={i}
                  className="h-5 flex-1 rounded-md"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground leading-tight">
                {m.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-tight line-clamp-2">
                {m.description}
              </p>
            </div>
            {selectedStyle === m.style && (
              <span className="inline-block text-[10px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">
                ✓ Selected
              </span>
            )}
          </button>
        ))}
      </div>

      <Button
        onClick={onGenerate}
        disabled={!selectedStyle}
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
          selectedStyle
            ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20"
            : "bg-muted text-muted-foreground cursor-not-allowed"
        }`}
      >
        {selectedStyle
          ? `Generate ${selectedStyle} Design →`
          : "Select a style to continue"}
      </Button>
    </div>
  );
}

function ResultStep({
  uploadedImage,
  generatedImages,
  loading,
  selectedStyle,
  onTryAnother,
  onStartOver,
}: {
  uploadedImage: string;
  generatedImages: string[];
  loading: boolean;
  selectedStyle: string;
  onTryAnother: () => void;
  onStartOver: () => void;
}) {
  const [savedIndex, setSavedIndex] = useState<number | null>(null);

  const handleDownload = (imageUrl: string, index: number) => {
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = `inspiration-${selectedStyle.toLowerCase()}-${index + 1}.png`;
    a.click();
    setSavedIndex(index);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          {loading
            ? "Generating inspirations..."
            : "Your style inspirations are ready!"}
        </h2>
        <p className="text-muted-foreground mt-1">
          {loading
            ? "Generating 3 variations for you ✨"
            : `3 ${selectedStyle} inspirations based on your room type.`}
        </p>
      </div>

      {/* Original room */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border/40">
        <img
          src={uploadedImage}
          alt="Your room"
          className="w-16 h-16 rounded-lg object-cover shrink-0"
        />
        <div>
          <p className="text-sm font-medium text-foreground">
            Your current room
          </p>
          <p className="text-xs text-muted-foreground">
            {selectedStyle} style inspirations below
          </p>
        </div>
      </div>

      {/* 3 Variations */}
      {loading ? (
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-muted flex flex-col items-center justify-center gap-2"
            >
              <div className="flex gap-1 items-end">
                {[0, 1, 2].map((j) => (
                  <div
                    key={j}
                    className="w-1 bg-primary rounded-full animate-bounce"
                    style={{ height: "16px", animationDelay: `${j * 0.15}s` }}
                  />
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground">
                Variation {i + 1}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {generatedImages.map((img, i) => (
            <div key={i} className="space-y-2">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border/40 group">
                <img
                  src={img}
                  alt={`Variation ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => handleDownload(img, i)}
                    className="px-3 py-1.5 cursor-pointer bg-white text-black text-xs font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>
              <p className="text-xs text-center text-muted-foreground font-medium">
                Variation {i + 1} {savedIndex === i ? "✓ Saved" : ""}
              </p>
            </div>
          ))}
        </div>
      )}

      {!loading && (
        <div className="flex gap-3">
          <button
            onClick={onTryAnother}
            className="flex-1 py-2.5 rounded-xl border border-border/60 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
          >
            Try Another Style
          </button>
          <button
            onClick={onStartOver}
            className="flex-1 py-2.5 rounded-xl border border-border/60 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
          >
            New Photo
          </button>
        </div>
      )}
    </div>
  );
}

export function DesignWizardModal({
  isOpen,
  onClose,
  initialStyle = "",
}: {
  isOpen: boolean;
  onClose: () => void;
  initialStyle?: string;
}) {
  const [step, setStep] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState(initialStyle);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const handleUpload = (dataUrl: string) => {
    setUploadedImage(dataUrl);
    setStep(1);
  };

  const handleGenerate = async () => {
    if (!uploadedImage || !selectedStyle) return;
    setStep(2);
    setLoading(true);
    setGeneratedImages([]);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ style: selectedStyle, image: uploadedImage }),
      });
      const data = await response.json();
      if (data.images) {
        setGeneratedImages(data.images);
      } else {
        throw new Error(data.error || "Generation failed");
      }
    } catch (err: any) {
      alert(err.message || "Something went wrong");
      setStep(1);
    } finally {
      setLoading(false);
    }
  };

  const handleTryAnother = () => {
    setGeneratedImages([]);
    setStep(1);
  };

  const handleStartOver = () => {
    setUploadedImage(null);
    setGeneratedImages([]);
    setSelectedStyle(initialStyle);
    setStep(0);
  };

  const handleClose = () => {
    handleStartOver();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-2xl bg-background rounded-3xl shadow-2xl border border-border/40 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border/40">
            <StepIndicator current={step} total={3} />
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6">
            {step === 0 && <UploadStep onUpload={handleUpload} />}
            {step === 1 && uploadedImage && (
              <StyleStep
                uploadedImage={uploadedImage}
                selectedStyle={selectedStyle}
                onSelectStyle={setSelectedStyle}
                onGenerate={handleGenerate}
                onBack={() => setStep(0)}
              />
            )}
            {step === 2 && uploadedImage && (
              <ResultStep
                uploadedImage={uploadedImage}
                generatedImages={generatedImages} // ← changed
                loading={loading}
                selectedStyle={selectedStyle}
                onTryAnother={handleTryAnother}
                onStartOver={handleStartOver}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
