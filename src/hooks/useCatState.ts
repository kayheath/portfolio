import { useCallback, useEffect, useState } from 'react'
import type { CatAnimation } from '../sprites/catSprites'
import type { ScrollState } from './useScroll'

// Scroll speed (px/sec) above which the cat runs instead of walks.
const RUN_THRESHOLD = 1200

// How long at rest before the cat sits / lies down (ms). Sleep follows once
// the lie-down animation finishes playing.
const BOREDOM = { sit: 3000, liedown: 8000 }

export interface CatState {
  animation: CatAnimation
  facing: 1 | -1
  /** Trigger a one-off jump. */
  jump: () => void
  /** Hook up to the sprite's animationend to advance one-off animations. */
  onAnimationEnd: () => void
}

/**
 * Derives the cat's current animation + facing from scroll activity, layering
 * an idle "boredom" timeline and a transient click-to-jump on top.
 */
export function useCatState(scroll: ScrollState): CatState {
  const { direction, velocity } = scroll
  const moving = direction !== 'idle'
  const facing: 1 | -1 = direction === 'up' ? -1 : 1

  const [stage, setStage] = useState<CatAnimation>('idle')
  const [jumping, setJumping] = useState(false)

  // Reset boredom the moment movement starts (render-phase state adjustment,
  // per https://react.dev/learn/you-might-not-need-an-effect).
  const [wasMoving, setWasMoving] = useState(moving)
  if (moving !== wasMoving) {
    setWasMoving(moving)
    if (moving) setStage('idle')
  }

  // While at rest, escalate sleepiness on a timer.
  useEffect(() => {
    if (moving) return
    const timers = [
      window.setTimeout(() => setStage('sit'), BOREDOM.sit),
      window.setTimeout(() => setStage('liedown'), BOREDOM.liedown),
    ]
    return () => timers.forEach(clearTimeout)
  }, [moving])

  const jump = useCallback(() => {
    setJumping(true)
    setStage('idle') // wake up
  }, [])

  // Fires when a non-looping animation finishes: clear a jump, or let the
  // lie-down settle into sleep.
  const onAnimationEnd = useCallback(() => {
    setJumping(false)
    setStage((s) => (s === 'liedown' ? 'sleep' : s))
  }, [])

  let animation: CatAnimation
  if (jumping) {
    animation = 'jump'
  } else if (moving) {
    animation = Math.abs(velocity) >= RUN_THRESHOLD ? 'run' : 'walk'
  } else {
    animation = stage
  }

  return { animation, facing, jump, onAnimationEnd }
}
