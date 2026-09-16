"use client";

import { useSite } from "@/components/providers";
import { MoonIcon, SunIcon } from "@/components/icons";
import { segClass } from "@/components/ui";
import { LANGS } from "@/lib/copy";

export function LangToggle() {
  const { lang, setLang, t } = useSite();

  return (
    <div
      role="group"
      aria-label={t("langLabel")}
      className="flex gap-[2px] rounded-full border border-line2 p-[2px] font-mono text-[10.5px]"
    >
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`cursor-pointer rounded-full border-0 px-[9px] py-[4px] ${segClass(lang === code)}`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function ThemeToggle({ size = 34 }: { size?: number }) {
  const { theme, toggleTheme, t } = useSite();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t("themeLabel")}
      className="grid cursor-pointer place-items-center rounded-lg border border-line2 bg-transparent text-text2 hover:text-text"
      style={{ width: size, height: size }}
    >
      {theme === "dark" ? (
        <SunIcon size={size > 32 ? 16 : 15} />
      ) : (
        <MoonIcon size={size > 32 ? 16 : 15} />
      )}
    </button>
  );
}
