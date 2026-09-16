/**
 * Where a submitted lead goes.
 *
 * No CRM is wired up yet, so the default is to POST the payload to
 * `LEADS_WEBHOOK_URL` (Slack, Zapier, an internal endpoint — anything that
 * accepts JSON). Without that variable the lead is logged server-side and the
 * submission still succeeds; swap this function for a real integration when
 * there is one.
 */
export async function deliverLead(
  kind: "partner" | "waitlist",
  payload: Record<string, unknown>,
) {
  const url = process.env.LEADS_WEBHOOK_URL;
  const body = { kind, receivedAt: new Date().toISOString(), ...payload };

  if (!url) {
    console.info("[harnix] lead received (no LEADS_WEBHOOK_URL set)", body);
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Lead webhook responded ${res.status}`);
  }
}
