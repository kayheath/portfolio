import Section from './components/Section/Section'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import CatSprite from './components/CatSprite/CatSprite'

export default function App() {
  return (
    <main>
      <ThemeToggle />
      <CatSprite />

      <Section title="Kayla Heath">
        <p>
          Welcome — this is the start of my portfolio. A pixelated cat will be
          roaming this page soon.
        </p>
      </Section>

      <Section title="About">
        <p>A short intro about me goes here.</p>
      </Section>

      <Section title="Projects">
        <p>Selected work will live here.</p>
      </Section>

      <Section title="Contact">
        <p>How to get in touch.</p>
      </Section>
    </main>
  )
}
