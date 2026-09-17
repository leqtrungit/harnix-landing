import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SkipLink } from "@/components/skip-link";
import { StructuredData } from "@/components/structured-data";
import { Blog } from "@/components/sections/blog";
import { Demo } from "@/components/sections/demo";
import { Developer } from "@/components/sections/developer";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Operate } from "@/components/sections/operate";
import { Partner } from "@/components/sections/partner";
import { RunAnatomy } from "@/components/sections/run-anatomy";
import { Waitlist } from "@/components/sections/waitlist";
import { Why } from "@/components/sections/why";
import { posts } from "@/content/posts";

export default function Home() {
  return (
    <>
      <StructuredData />
      <SkipLink />
      <Header />
      <main id="top" className="mx-auto max-w-[1160px] px-6">
        <Hero />
        <Why />
        <HowItWorks />
        <Demo />
        <RunAnatomy />
        <Operate />
        <Developer />
        <Blog initialPosts={posts} />
        <Partner />
        <Faq />
        <Waitlist />
        <Footer />
      </main>
    </>
  );
}
