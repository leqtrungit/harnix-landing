import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/leads";
import { isValidEmail } from "@/lib/validation";

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim() : "";
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  try {
    await deliverLead("waitlist", { email });
  } catch (error) {
    console.error("[harnix] waitlist lead delivery failed", error);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
