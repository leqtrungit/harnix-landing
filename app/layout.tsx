import type { Metadata, Viewport } from "next";
import { Azeret_Mono, Public_Sans, Space_Grotesk } from "next/font/google";
import { SiteProviders } from "@/components/providers";
import { siteConfig } from "@/lib/config";
import { LANG_STORAGE_KEY, THEME_STORAGE_KEY } from "@/lib/storage";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-public-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-azeret-mono",
  display: "swap",
});

const description =
  "Harnix giúp doanh nghiệp đưa trợ lý AI vào app sẵn có, và thấy rõ từng câu trả lời: AI đã đọc tài liệu nào, gọi công cụ gì, tốn bao nhiêu.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Harnix — Giao việc cho AI. Nắm từng bước.",
    template: "%s — Harnix",
  },
  description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Harnix — Giao việc cho AI. Nắm từng bước.",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Harnix — Giao việc cho AI. Nắm từng bước.",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0d" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

/**
 * Applies the stored theme/language before first paint so the page never
 * flashes the wrong palette. Dark is the design's default and stays the default
 * regardless of the OS setting — only an explicit choice here switches it.
 */
const bootstrap = `(function(){try{
var d=document.documentElement;
var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
d.dataset.theme=(t==='light'||t==='dark')?t:'dark';
var l=localStorage.getItem(${JSON.stringify(LANG_STORAGE_KEY)});
if(l==='en'||l==='vi'){d.lang=l;}
}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      data-theme="dark"
      className={`${publicSans.variable} ${spaceGrotesk.variable} ${azeretMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
        <SiteProviders>{children}</SiteProviders>
      </body>
    </html>
  );
}
