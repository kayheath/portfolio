import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import styles from './Nav.module.css'

interface NavLink {
  id: string
  label: string
}

// Module-level constants keep the scrollspy effect stable across renders.
const LINKS: NavLink[] = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
]
const IDS = ['home', ...LINKS.map((l) => l.id)]

export default function Nav() {
  const active = useScrollSpy(IDS)

  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.brand}>
        kayla
      </a>
      <ul className={styles.links}>
        {LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`${styles.link} ${active === link.id ? styles.active : ''}`}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  )
}
