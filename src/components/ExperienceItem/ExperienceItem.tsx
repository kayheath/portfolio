import type { Experience } from '../../content/experience'
import Panel from '../Panel/Panel'
import styles from './ExperienceItem.module.css'

export default function ExperienceItem({ item }: { item: Experience }) {
  const multiRole = item.roles.length > 1

  return (
    <Panel className={styles.item}>
      <h3 className={styles.org}>{item.org}</h3>
      <ol className={`${styles.roles} ${multiRole ? styles.timeline : ''}`}>
        {item.roles.map((role) => {
          const active = role.dates.includes('Present')
          return (
            <li key={role.title} className={styles.role}>
              <div className={styles.roleHead}>
                <div>
                  <p className={styles.roleTitle}>{role.title}</p>
                  <p className={styles.dates}>{role.dates}</p>
                </div>
                <span className={`${styles.status} ${active ? styles.active : styles.done}`}>
                  {active ? 'ACTIVE' : 'DONE'}
                </span>
              </div>
              <ul className={styles.objectives}>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          )
        })}
      </ol>
    </Panel>
  )
}
