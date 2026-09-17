import { faqs } from "@/lib/copy";
import { siteConfig } from "@/lib/config";

/**
 * JSON-LD for the landing page. Three graph nodes, cross-referenced by `@id`
 * so crawlers read them as one entity rather than three loose objects:
 *
 * - Organization — who is behind the site, for the knowledge panel.
 * - WebSite — the site itself, in Vietnamese.
 * - FAQPage — the accordion further down. The answers are already on the page
 *   in full, which is what makes them eligible; the markup only labels them.
 *
 * Keep `faqs` in `lib/copy.ts` the single source: editing a question there
 * updates both the rendered accordion and this markup.
 */
export function StructuredData() {
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;

  const socials = [
    siteConfig.social.linkedin,
    siteConfig.social.facebook,
    siteConfig.social.github,
  ].filter(Boolean);

  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      description:
        "Nền tảng vận hành AI agent: đưa trợ lý AI vào app sẵn có và theo dõi từng bước của mỗi câu trả lời.",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/apple-icon`,
        width: 180,
        height: 180,
      },
      ...(socials.length ? { sameAs: socials } : {}),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "vi-VN",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      isPartOf: { "@id": websiteId },
      inLanguage: "vi-VN",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // The payload is built from local modules, never user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
