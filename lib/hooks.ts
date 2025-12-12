import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"
import type { SectionName } from "./types"

interface SectionViewOptions {
  threshold?: number
  triggerOnce?: boolean
}

export function useSectionInView(
  sectionName: SectionName,
  options: SectionViewOptions = {},
) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  const { ref, inView } = useInView(options)

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
    inView,
  }
}
