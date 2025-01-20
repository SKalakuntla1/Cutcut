import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-background text-foreground px-4">
      <h1 className="text-6xl font-bold text-center mb-6">
        Cut<span className="text-primary">Cut</span>
      </h1>
      <p className="text-xl text-center max-w-2xl mb-8 text-muted-foreground">
        Your professional video editing companion. Create stunning videos with ease using our powerful editing tools and intuitive interface.
      </p>
      <div className="flex gap-4">
        <Link
          href="/auth/signup"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
        <Link
          href="/auth/signin"
          className="px-6 py-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
} 