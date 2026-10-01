import { Reveal } from "./motion";
import { Button } from "./Button";

export function CtaBand({
  title = "Ready to be part of the Sunga Academy family?",
  text = "Enrollment is open for Baby Class through Grade 7. Come visit our campus, meet our teachers, and see where bright futures begin.",
  showSupport = true,
}: {
  title?: string;
  text?: string;
  showSupport?: boolean;
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-gold-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-navy-400/30 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg text-navy-100">{text}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact#enroll" arrow>
              Enroll Your Child
            </Button>
            <Button href="/contact" variant="outline-light">
              Contact Us
            </Button>
            {showSupport && (
              <Button href="/support" variant="outline-light">
                Support Our Growth
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
