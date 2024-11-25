"use-server";

import CTA from "@/components/custom/ui/CTA";
import Hero from "@/components/custom/ui/Hero";
import { redirect } from "next/navigation";

export default async function Home() {
  // @TODO: Temporary until landing page is built
  // redirect("/courses");
  return (
    <main className="flex-1">
      <Hero />
      <CTA />
    </main>
  );
}
