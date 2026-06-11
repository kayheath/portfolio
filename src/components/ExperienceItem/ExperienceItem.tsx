import type { Experience } from '../../content/experience'
import Panel from '../Panel/Panel'
import styles from './ExperienceItem.module.css'

export default function ExperienceItem({ item }: { item: Experience }) {
  const active = item.dates.includes('Present')

  return (
    <Panel className={styles.item}>
      <header className={styles.head}>
        <div>
          <h3 className={styles.role}>{item.role}</h3>
          <p className={styles.org}>{item.org}</p>
        </div>
        <span className={`${styles.status} ${active ? styles.active : styles.done}`}>
          {active ? 'ACTIVE' : 'DONE'}
        </span>
      </header>
      <p className={styles.dates}>{item.dates}</p>
      <ul className={styles.objectives}>
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </Panel>
  )
}
