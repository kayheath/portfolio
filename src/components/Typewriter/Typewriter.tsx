import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useTypewriter } from '../../hooks/useTypewriter'
import styles from './Typewriter.module.css'

/** Cycles through `words`, typing/deleting each, with a blinking caret. */
export default function Typewriter({ words }: { words: string[] }) {
  const reduced = usePrefersReducedMotion()
  const text = useTypewriter(words, { reduced })

  return (
    <span className={styles.wrap}>
      <span>{text}</span>
      <span className={styles.caret} aria-hidden="true" />
    </span>
  )
}
