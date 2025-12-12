"use client"
import { motion } from "framer-motion"
export default function SectionDivider() {
  return (
    <motion.section
      className="dark:bg-white/40 hidden w-1 h-16 my-24 bg-slate-300 sm:block" //this section is only visible in desktop view only and when i was writing the margin bottom in the components. Margin bottom is set to mb-28 as it doesn't have this section divider in mobile view but mb-0 incase of desktop as it uses this section.
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    ></motion.section>
  )
}
