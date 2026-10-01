"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Send, LoaderCircle, CircleCheck, AlertCircle } from "lucide-react";
import clsx from "clsx";

const roles = ["Parent/Guardian", "Prospective Partner/Donor", "Other"] as const;

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "peer w-full rounded-2xl border border-navy-900/15 bg-white px-4 pb-2.5 pt-6 text-navy-900 outline-none transition placeholder-transparent focus:border-gold-500 focus:ring-4 focus:ring-gold-400/20";
const label =
  "pointer-events-none absolute left-4 top-2 text-xs font-medium text-navy-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-gold-700";

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
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[28rem] flex-col items-center justify-center text-center"
            role="status"
          >
            <motion.span
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
              className="flex size-20 items-center justify-center rounded-full bg-gold-400 text-navy-950"
            >
              <CircleCheck className="size-10" />
            </motion.span>
            <h3 className="mt-6 text-3xl font-semibold text-navy-900">Thank you!</h3>
            <p className="mt-3 max-w-sm text-navy-700">
              Your message has been received. Our team will get back to you soon with details on availability, fees, and
              the enrollment process.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white"
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
            className="grid gap-4 sm:grid-cols-2"
            noValidate={false}
          >
            <div className="relative sm:col-span-2">
              <input id="name" name="name" required autoComplete="name" placeholder="Full Name" className={field} />
              <label htmlFor="name" className={label}>
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="Phone Number"
                className={field}
              />
              <label htmlFor="phone" className={label}>
                Phone Number
              </label>
            </div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email Address"
                className={field}
              />
              <label htmlFor="email" className={label}>
                Email Address
              </label>
            </div>

            <fieldset className="sm:col-span-2">
              <legend className="mb-3 text-sm font-medium text-navy-700">I am a:</legend>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <label
                    key={r}
                    className={clsx(
                      "relative cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-gold-400/40",
                      role === r
                        ? "border-navy-900 bg-navy-900 text-white"
                        : "border-navy-900/15 bg-white text-navy-800 hover:border-navy-900/40",
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

            <div className="relative sm:col-span-2">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Message"
                className={clsx(field, "resize-none")}
              />
              <label htmlFor="message" className={label}>
                Message
              </label>
            </div>

            {status === "error" && (
              <p role="alert" className="flex items-center gap-2 text-sm text-red-600 sm:col-span-2">
                <AlertCircle className="size-4" /> {error}
              </p>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-8 py-4 font-semibold text-white shadow-lg shadow-navy-900/20 transition hover:bg-navy-700 disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <LoaderCircle className="size-5 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Submit
                    <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
