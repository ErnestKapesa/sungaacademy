"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { Arrow } from "@/components/ui/Buttons";
import { easeOut } from "@/components/ui/motion";

const roles = ["Parent/Guardian", "Prospective Partner/Donor", "Other"] as const;
type Status = "idle" | "sending" | "sent" | "error";

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
  textarea,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  textarea?: boolean;
}) {
  const cls =
    "peer block w-full resize-none border-0 border-b border-line bg-transparent px-0 pb-3 pt-7 text-xl text-ink outline-none transition-colors placeholder-transparent focus:border-ink";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={id} rows={4} required={required} placeholder={label} className={cls} />
      ) : (
        <input id={id} name={id} type={type} required={required} autoComplete={autoComplete} placeholder={label} className={cls} />
      )}
      <label
        htmlFor={id}
        className="label pointer-events-none absolute left-0 top-1 text-ink-mute transition-all duration-300 peer-placeholder-shown:top-7 peer-placeholder-shown:text-xl peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-1 peer-focus:text-[0.7rem] peer-focus:uppercase peer-focus:tracking-[0.16em]"
      >
        {label}
        {required && " *"}
      </label>
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-700 ease-out-expo peer-focus:scale-x-100" />
    </div>
  );
}

export function ContactForm() {
  const [role, setRole] = useState<(typeof roles)[number]>("Parent/Guardian");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, role }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="sent"
          role="status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="border-t border-ink pt-10"
        >
          <p className="display-md">
            Thank you — <em>we’ll be in touch.</em>
          </p>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            Your message has reached the school office. We’ll get back to you with details on availability, fees and
            the enrollment process.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-10 border-b border-ink pb-0.5 font-medium"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={onSubmit}
          className="grid gap-x-8 gap-y-6 sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <Field id="name" label="Full name" required autoComplete="name" />
          </div>
          <Field id="phone" label="Phone number" type="tel" required autoComplete="tel" />
          <Field id="email" label="Email address" type="email" autoComplete="email" />

          <fieldset className="pt-4 sm:col-span-2">
            <legend className="label text-ink-mute">I am a</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {roles.map((r) => (
                <label
                  key={r}
                  className={clsx(
                    "cursor-pointer rounded-full px-4 py-2 text-[0.95rem] ring-1 ring-inset transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink",
                    role === r ? "bg-ink text-paper ring-ink" : "text-ink ring-ink/25 hover:ring-ink",
                  )}
                >
                  <input
                    type="radio"
                    name="roleChoice"
                    value={r}
                    checked={role === r}
                    onChange={() => setRole(r)}
                    className="sr-only"
                  />
                  {r}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="sm:col-span-2">
            <Field id="message" label="Message" required textarea />
          </div>

          {status === "error" && (
            <p role="alert" className="text-sm text-red-700 sm:col-span-2">
              {error}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-6 pt-4 sm:col-span-2">
            <p className="text-sm text-ink-mute">* Required</p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex h-14 items-center gap-4 rounded-full bg-ink pl-7 pr-2 font-medium text-paper disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <span className="flex size-10 items-center justify-center rounded-full bg-paper/12 transition-transform duration-500 ease-out-expo group-hover:-rotate-45">
                <Arrow />
              </span>
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
