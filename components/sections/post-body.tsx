"use client";

import type { ReactNode } from "react";
import { useSite } from "@/components/providers";

/**
 * Both languages are already compiled server-side (this file just picks
 * which one to show), so switching language is instant — no refetch, no
 * flash of Vietnamese while English loads.
 */
export function PostBody({ vi, en }: { vi: ReactNode; en: ReactNode | null }) {
  const { lang } = useSite();
  const showEn = lang === "en" && en !== null;

  return <article className="mt-8">{showEn ? en : vi}</article>;
}
