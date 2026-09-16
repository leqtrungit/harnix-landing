"use client";

import { Logo } from "@/components/logo";
import { useCopy } from "@/components/providers";
import { LangToggle, ThemeToggle } from "@/components/toggles";
import type { CopyKey } from "@/lib/copy";

const NAV: { href: string; key: CopyKey }[] = [
  { href: "#how", key: "navHow" },
  { href: "#demo", key: "navDemo" },
  { href: "#dev", key: "navDev" },
  { href: "#blog", key: "navBlog" },
  { href: "#faq", key: "navFaq" },
];

export function Header() {
  const t = useCopy();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-[18px] px-6 py-3">
        <a
          href="#top"
          className="flex items-center gap-[9px] text-text no-underline"
        >
          <Logo markSize={26} wordSize={20} gap={1} />
        </a>

        <nav className="ml-3 flex flex-1 flex-wrap items-center gap-1">
          {NAV.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-[10px] py-[7px] text-[14.5px] text-text2 no-underline hover:bg-surface2 hover:text-text"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle size={34} />
          <a
            href="#waitlist"
            className="rounded-lg bg-accent px-[15px] py-[9px] text-sm font-semibold whitespace-nowrap text-accent-ink no-underline"
          >
            {t("ctaJoin")}
          </a>
        </div>
      </div>
    </header>
  );
}
