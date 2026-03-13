import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-6">
        <p className="text-secondary uppercase tracking-[0.4em] text-[10px] font-medium mb-6">
          404
        </p>
        <h2 className="font-serif text-4xl text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex px-8 py-4 bg-secondary text-secondary-foreground text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
