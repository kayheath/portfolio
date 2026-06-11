import { FileText, Heart } from 'lucide-react'
import Section from './components/Section/Section'
import { Github, Linkedin } from './components/IconLink/brandIcons'
import Nav from './components/Nav/Nav'
import CatSprite from './components/CatSprite/CatSprite'
import Typewriter from './components/Typewriter/Typewriter'
import IconLink from './components/IconLink/IconLink'
import ExperienceItem from './components/ExperienceItem/ExperienceItem'
import ProjectCard from './components/ProjectCard/ProjectCard'
import SkillGroup from './components/SkillGroup/SkillGroup'
import EducationCard from './components/EducationCard/EducationCard'
import DialogueBox from './components/DialogueBox/DialogueBox'
import Panel from './components/Panel/Panel'
import kaylaPortrait from './assets/kayla.png'
import { ABOUT, LINKS, TYPEWRITER_WORDS } from './content/profile'
import { EXPERIENCE } from './content/experience'
import { PROJECTS } from './content/projects'
import { SKILLS } from './content/skills'
import { EDUCATION } from './content/education'
import styles from './App.module.css'

function Links() {
  return (
    <div className={styles.links}>
      <IconLink href={LINKS.linkedin} icon={Linkedin} label="LinkedIn" />
      <IconLink href={LINKS.github} icon={Github} label="GitHub" />
      <IconLink href={LINKS.resume} icon={FileText} label="Resume" download />
    </div>
  )
}

export default function App() {
  return (
    <main>
      <Nav />
      <CatSprite />

      <section id="home" className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.name}>Kayla Heath</h1>
          <p className={styles.tagline}>
            I am a <Typewriter words={TYPEWRITER_WORDS} />
          </p>
          <Links />
        </div>
      </section>

      <Section title="About">
        <DialogueBox portrait={kaylaPortrait} name="Kayla" text={ABOUT} />
      </Section>

      <Section title="Experience">
        <div className={styles.stack}>
          {EXPERIENCE.map((item) => (
            <ExperienceItem key={`${item.org}-${item.roles[0].title}`} item={item} />
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          <Panel className={styles.locked}>
            <span className={styles.lockedMark}>???</span>
            <p>more on the way</p>
          </Panel>
        </div>
      </Section>

      <Section title="Skills">
        <div className={styles.skills}>
          {SKILLS.map((group) => (
            <SkillGroup key={group.label} group={group} />
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className={styles.stack}>
          {EDUCATION.map((edu) => (
            <EducationCard key={edu.school} edu={edu} />
          ))}
        </div>
      </Section>

      <Section title="Contact">
        <p className={styles.contact}>
          I'm always happy to talk software, data, or teaching — reach out!
        </p>
        <Links />
      </Section>

      <footer className={styles.footer}>
        Made with
        <Heart size={14} fill="currentColor" className={styles.heart} aria-label="love" />
        by Kayla Heath
      </footer>
    </main>
  )
}
