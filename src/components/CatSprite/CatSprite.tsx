import type { CSSProperties } from 'react'
import { FRAME_SIZE, SPRITES } from '../../sprites/catSprites'
import { useScroll } from '../../hooks/useScroll'
import { useCatState } from '../../hooks/useCatState'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import styles from './CatSprite.module.css'

// Integer scale keeps the pixel art crisp. 40px × 3 = 120px cat.
const SCALE = 3

/**
 * The scroll-driven pixel cat. Lives fixed at the bottom of the viewport: idles
 * (and gets sleepy) at rest, walks/runs across as you scroll, jumps on click.
 */
export default function CatSprite() {
  const scroll = useScroll()
  const cat = useCatState(scroll)
  const reduced = usePrefersReducedMotion()

  const animation = reduced ? 'sit' : cat.animation
  const meta = SPRITES[animation]

  const rootStyle = {
    '--frame': `${FRAME_SIZE}px`,
    '--scale': SCALE,
    '--p': reduced ? 0 : scroll.progress,
    '--face': reduced ? 1 : cat.facing,
  } as CSSProperties

  const spriteStyle = {
    '--sheet': `url(${meta.url})`,
    '--frames': meta.frames,
    '--dur': `${meta.frames / meta.fps}s`,
  } as CSSProperties

  return (
    <div
      className={`${styles.root}${reduced ? ` ${styles.static}` : ''}`}
      style={rootStyle}
      onClick={reduced ? undefined : cat.jump}
      aria-hidden="true"
    >
      <div
        key={animation}
        className={`${styles.sprite} ${meta.loop ? styles.loop : styles.once}`}
        style={spriteStyle}
        onAnimationEnd={cat.onAnimationEnd}
      />
    </div>
  )
}
