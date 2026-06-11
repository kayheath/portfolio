// Animation registry for the pixel cat. All sheets are 40×40-px frames in a
// single horizontal strip, facing right. See src/assets/sprites/README.md.
//
// These imports resolve to bundled asset URLs at build time. The PNGs are
// git-ignored (paid art) — they must exist locally / be supplied to the deploy.
import idle from '../assets/sprites/cat01_idle_strip8_recolored.png'
import sit from '../assets/sprites/cat01_sit_strip8_recolored.png'
import liedown from '../assets/sprites/cat01_liedown_strip24_recolored.png'
import sleep from '../assets/sprites/cat01_sleep_strip8_recolored.png'
import walk from '../assets/sprites/cat01_walk_strip8_recolored.png'
import run from '../assets/sprites/cat01_run_strip4_recolored.png'
import jump from '../assets/sprites/cat01_jump_strip4_recolored.png'

export const FRAME_SIZE = 40

export interface SpriteMeta {
  /** Bundled URL of the spritesheet. */
  url: string
  /** Number of frames in the strip. */
  frames: number
  /** Playback speed in frames per second. */
  fps: number
  /** Whether the animation loops, or plays once and hands off. */
  loop: boolean
}

export const SPRITES = {
  idle: { url: idle, frames: 8, fps: 6, loop: true },
  sit: { url: sit, frames: 8, fps: 5, loop: true },
  liedown: { url: liedown, frames: 24, fps: 12, loop: false },
  sleep: { url: sleep, frames: 8, fps: 3, loop: true },
  walk: { url: walk, frames: 8, fps: 10, loop: true },
  run: { url: run, frames: 4, fps: 12, loop: true },
  jump: { url: jump, frames: 4, fps: 12, loop: false },
} as const satisfies Record<string, SpriteMeta>

export type CatAnimation = keyof typeof SPRITES
