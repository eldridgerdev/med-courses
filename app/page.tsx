"use-server";

import CTA from "@/components/custom/ui/CTA";
import Hero from "@/components/custom/ui/Hero";
import { redirect } from "next/navigation";

export default async function Home() {
  // @TODO: Temporary until landing page is built
  // redirect("/courses");
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <CTA />
      </main>
    </div>
  );
}
