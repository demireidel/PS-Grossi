"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-6">
        <h2 className="font-serif text-4xl text-foreground mb-4">
          Something went wrong
        </h2>
        <p className="text-muted-foreground mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-8 py-4 bg-secondary text-secondary-foreground text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
