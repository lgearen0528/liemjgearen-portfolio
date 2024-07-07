"use client";

import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks";
import Timeline from "./timeline";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", { threshold: 0.2, triggerOnce: true });

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeader>My experience</SectionHeader>
      <Timeline inView={inView} />
    </section>
  );
}
