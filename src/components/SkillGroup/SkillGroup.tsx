import type { SkillGroup as SkillGroupData } from '../../content/skills'
import Panel from '../Panel/Panel'
import styles from './SkillGroup.module.css'

export default function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <Panel className={styles.group}>
      <h3 className={styles.label}>{group.label}</h3>
      <ul className={styles.items}>
        {group.items.map((item) => (
          <li key={item} className={styles.chip}>
            {item}
          </li>
        ))}
      </ul>
    </Panel>
  )
}
