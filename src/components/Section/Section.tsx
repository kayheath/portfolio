import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  /** Used as the section heading and the anchor id (for in-page nav later). */
  title: string
  children?: ReactNode
}

/**
 * A reusable full-height page section. Composes the portfolio's main areas
 * (Hero, About, Projects, Contact) and gives the page something to scroll.
 */
export default function Section({ title, children }: SectionProps) {
  const id = title.toLowerCase().replace(/\s+/g, '-')

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  )
}
