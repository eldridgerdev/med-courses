"use-server";

import CTA from "@/components/custom/ui/CTA";
import Hero from "@/components/custom/ui/Hero";

export default async function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <CTA />
    </main>
  );
}
