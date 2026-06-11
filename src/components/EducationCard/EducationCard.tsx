import type { Education } from '../../content/education'
import Panel from '../Panel/Panel'
import styles from './EducationCard.module.css'

export default function EducationCard({ edu }: { edu: Education }) {
  return (
    <Panel className={styles.card}>
      <header className={styles.head}>
        <div>
          <h3 className={styles.school}>{edu.school}</h3>
          <p className={styles.degree}>{edu.degree}</p>
        </div>
        <span className={styles.gpa}>{edu.gpa} GPA</span>
      </header>
      <p className={styles.term}>{edu.term}</p>
      <ul className={styles.honors}>
        {edu.honors.map((honor) => (
          <li key={honor} className={styles.badge}>
            {honor}
          </li>
        ))}
      </ul>
    </Panel>
  )
}
