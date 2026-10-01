import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy-900 pt-24 text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="container-x relative text-center">
        <p className="font-display text-8xl font-semibold text-gold-400 sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-semibold sm:text-5xl">This page has wandered off.</h1>
        <p className="mx-auto mt-4 max-w-md text-navy-200">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Button href="/" arrow>
            Back to home
          </Button>
          <Button href="/contact" variant="outline-light">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
