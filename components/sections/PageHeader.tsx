import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal, SplitText } from "@/components/ui/motion";

/** Editorial page opener shared by the inner pages. */
export function PageHeader({
  crumb,
  title,
  intro,
  aside,
  children,
}: {
  crumb: string;
  /** Wrap words in *asterisks* for italics, "\n" for a line break. */
  title: string;
  intro?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="wrap pt-28 sm:pt-36">
      <Reveal y={0} delay={0.7} className="label flex justify-between gap-6 border-b border-line pb-4 text-ink-mute">
        <nav aria-label="Breadcrumb" className="flex gap-2">
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span>/</span>
          <span className="text-ink">{crumb}</span>
        </nav>
        {aside && <span className="hidden sm:inline">{aside}</span>}
      </Reveal>

      <SplitText as="h1" onMount delay={0.75} className="display-xl mt-8 block sm:mt-12" text={title} />

      {intro && (
        <div className="mt-12 grid pb-16 sm:mt-16 sm:pb-24 lg:grid-cols-12">
          <Reveal delay={1.05} className="lede text-ink-soft lg:col-span-7 lg:col-start-6">
            {intro}
          </Reveal>
        </div>
      )}
      {children}
    </header>
  );
}
