import type { ComponentType } from 'react'
import styles from './IconLink.module.css'

interface IconLinkProps {
  href: string
  /** A lucide icon or a local brand icon — anything taking a `size` prop. */
  icon: ComponentType<{ size?: number }>
  label: string
  /** Render as a download link (e.g. the resume PDF) rather than navigation. */
  download?: boolean
}

export default function IconLink({ href, icon: Icon, label, download }: IconLinkProps) {
  return (
    <a
      className={styles.link}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...(download ? { download: '' } : {})}
    >
      <span className={styles.cursor} aria-hidden="true">▶</span>
      <Icon size={18} aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}
