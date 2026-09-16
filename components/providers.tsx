"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translate, type CopyKey, type Lang } from "@/lib/copy";
import { LANG_STORAGE_KEY, THEME_STORAGE_KEY } from "@/lib/storage";

export type Theme = "dark" | "light";

type SiteContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: CopyKey) => string;
};

const SiteContext = createContext<SiteContextValue | null>(null);

/**
 * The server renders the design's defaults (dark / vi). The inline script in
 * <head> applies the visitor's stored choice before paint, so we read it back
 * on mount rather than guessing during render — that keeps hydration clean.
 */
export function SiteProviders({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [lang, setLangState] = useState<Lang>("vi");

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.theme === "light") setThemeState("light");
    if (root.lang === "en") setLangState("en");
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private mode / blocked storage — the choice just won't persist.
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // As above.
    }
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
      lang,
      setLang,
      t: (key: CopyKey) => translate(lang, key),
    }),
    [theme, setTheme, lang, setLang],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProviders>");
  return ctx;
}

/** Shorthand for the common case: `const t = useCopy();` */
export function useCopy() {
  return useSite().t;
}
