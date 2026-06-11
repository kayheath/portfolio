import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../content/projects'
import Panel from '../Panel/Panel'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Panel className={styles.card}>
      <h3 className={styles.title}>
        {project.title}
        {project.href && (
          <a className={styles.link} href={project.href} target="_blank" rel="noreferrer">
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        )}
      </h3>
      <p className={styles.blurb}>{project.blurb}</p>
      <p className={styles.result}>{project.result}</p>
      <ul className={styles.tags}>
        {project.tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </Panel>
  )
}
