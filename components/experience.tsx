"use client";

import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks";
import Timeline from "./timeline";

export default function Experience() {
    // @ts-ignore TODO: Fix experience section
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeader>My experience</SectionHeader>
      <Timeline />
    </section>
  );
}
