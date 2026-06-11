import { useEffect, useState } from 'react'

/**
 * Types `text` out once, character by character, while `active` is true.
 * Returns the current partial string and whether typing has finished. With
 * reduced motion, the full text appears immediately.
 */
export function useTypedText(text: string, active: boolean, charMs = 28) {
  const [count, setCount] = useState(0)

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (!active || reduced) return
    if (count >= text.length) return
    const timer = window.setTimeout(() => setCount((c) => c + 1), charMs)
    return () => clearTimeout(timer)
  }, [active, reduced, count, text.length, charMs])

  if (!active) return { shown: '', done: false }
  if (reduced) return { shown: text, done: true }
  return { shown: text.slice(0, count), done: count >= text.length }
}
