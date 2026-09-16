import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/leads";
import { readPartnerSubmission, validatePartner } from "@/lib/validation";

export async function POST(request: Request) {
  let submission;
  try {
    submission = readPartnerSubmission(await request.json());
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const errors = validatePartner(submission);
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    await deliverLead("partner", submission);
  } catch (error) {
    console.error("[harnix] partner lead delivery failed", error);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
