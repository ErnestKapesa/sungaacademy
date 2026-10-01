import { NextResponse } from "next/server";

const ROLES = ["Parent/Guardian", "Prospective Partner/Donor", "Other"];

/**
 * Receives contact / enrollment enquiries from the contact form.
 *
 * TODO: connect this to a real delivery channel before launch — e.g. send an
 * email with Resend/SendGrid/Nodemailer, or save to a spreadsheet/CRM. Until
 * then, submissions are only written to the server log.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(body.name, 120);
  const phone = str(body.phone, 40);
  const email = str(body.email, 160);
  const message = str(body.message, 4000);
  const role = ROLES.includes(str(body.role, 60)) ? str(body.role, 60) : "Other";

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "Please fill in your name, phone number and message." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  console.info("[contact] New enquiry", { name, phone, email, role, message, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
