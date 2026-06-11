import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, for highlighting nav links.
 * Observes a band across the middle of the viewport; the section crossing it
 * becomes active. `ids` should be a stable (module-level) array.
 */
export function useScrollSpy(ids: string[], rootMargin = '-45% 0px -50% 0px') {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin, threshold: 0 },
    )

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids, rootMargin])

  return activeId
}
