import type { ReactNode } from 'react'
import styles from './Panel.module.css'

/** A cozy pixel-game panel: notched corners + chunky border, on theme colors. */
export default function Panel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`${styles.panel}${className ? ` ${className}` : ''}`}>{children}</div>
}
