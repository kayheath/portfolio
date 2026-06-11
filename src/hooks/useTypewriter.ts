import { useEffect, useState } from 'react'

interface TypewriterOptions {
  /** ms per character while typing. */
  typeMs?: number
  /** ms per character while deleting. */
  deleteMs?: number
  /** ms to hold a completed word before deleting. */
  pauseMs?: number
  /** When true, skip the animation and show the first word statically. */
  reduced?: boolean
}

/**
 * Cycles through `words`, typing each out, pausing, deleting, and moving on.
 * Returns the current partial string. All timers run in callbacks (not the
 * effect body) so renders stay cheap.
 */
export function useTypewriter(
  words: string[],
  { typeMs = 90, deleteMs = 45, pauseMs = 1400, reduced = false }: TypewriterOptions = {},
) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced || words.length === 0) return

    const current = words[wordIndex % words.length]
    const atFullWord = !deleting && text === current
    const atEmpty = deleting && text === ''
    const delay = atFullWord ? pauseMs : deleting ? deleteMs : typeMs

    const timer = window.setTimeout(() => {
      if (atFullWord) {
        setDeleting(true)
      } else if (atEmpty) {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        )
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, pauseMs, reduced])

  return reduced ? (words[0] ?? '') : text
}
