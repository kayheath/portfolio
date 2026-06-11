import { useEffect, useRef, useState } from 'react'

export type ScrollDirection = 'up' | 'down' | 'idle'

export interface ScrollState {
  /** Page scroll progress, 0 (top) to 1 (fully scrolled). */
  progress: number
  /** Signed scroll speed in px/sec (+down, -up). */
  velocity: number
  direction: ScrollDirection
}

// How long without a scroll event before we consider the user at rest.
const IDLE_MS = 150

/**
 * Tracks scroll progress, velocity, and direction. Updates are throttled to one
 * per animation frame to keep scrolling smooth.
 */
function computeProgress(): number {
  if (typeof window === 'undefined') return 0
  const max = document.documentElement.scrollHeight - window.innerHeight
  return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
}

export function useScroll(): ScrollState {
  const [state, setState] = useState<ScrollState>(() => ({
    progress: computeProgress(),
    velocity: 0,
    direction: 'idle',
  }))

  const lastY = useRef(0)
  const lastT = useRef(0)
  const frame = useRef<number | null>(null)
  const idleTimer = useRef<number | null>(null)

  useEffect(() => {
    lastY.current = window.scrollY
    lastT.current = performance.now()

    const onFrame = () => {
      frame.current = null
      const now = performance.now()
      const y = window.scrollY
      const dt = now - lastT.current
      const dy = y - lastY.current
      lastY.current = y
      lastT.current = now

      const velocity = dt > 0 ? (dy / dt) * 1000 : 0
      const direction: ScrollDirection =
        dy > 0 ? 'down' : dy < 0 ? 'up' : 'idle'

      setState({ progress: computeProgress(), velocity, direction })

      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = window.setTimeout(() => {
        setState((s) => ({ ...s, velocity: 0, direction: 'idle' }))
      }, IDLE_MS)
    }

    const onScroll = () => {
      if (frame.current == null) frame.current = requestAnimationFrame(onFrame)
    }

    const onResize = () =>
      setState((s) => ({ ...s, progress: computeProgress() }))

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (frame.current) cancelAnimationFrame(frame.current)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [])

  return state
}
