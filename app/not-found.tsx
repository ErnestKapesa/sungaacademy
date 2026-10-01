import { RollButton } from "@/components/ui/Buttons";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[85svh] flex-col justify-end pb-20 pt-32">
      <p className="label border-b border-line pb-4 text-ink-mute">Error 404</p>
      <h1 className="display-xl mt-10">
        This page has <em>wandered</em> off.
      </h1>
      <p className="mt-8 max-w-md text-lg text-ink-soft">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <RollButton href="/">Back to home</RollButton>
        <RollButton href="/contact" variant="line">
          Contact us
        </RollButton>
      </div>
    </section>
  );
}
