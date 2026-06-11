import { useInView } from '../../hooks/useInView'
import { useTypedText } from '../../hooks/useTypedText'
import Panel from '../Panel/Panel'
import styles from './DialogueBox.module.css'

interface DialogueBoxProps {
  portrait: string
  name: string
  text: string
}

/** A Stardew-style dialogue box: portrait + text that types in on scroll. */
export default function DialogueBox({ portrait, name, text }: DialogueBoxProps) {
  const [ref, inView] = useInView<HTMLDivElement>()
  const { shown, done } = useTypedText(text, inView)

  return (
    <div ref={ref}>
      <Panel className={styles.dialogue}>
        <img
          className={styles.portrait}
          src={portrait}
          alt={`${name}, as a pixel character`}
          width={112}
          height={112}
        />
        <div className={styles.body}>
          <span className={styles.name}>{name}</span>
          <p className={styles.text}>
            {shown}
            {done && (
              <span className={styles.caret} aria-hidden="true">
                {' '}
                ▸
              </span>
            )}
          </p>
        </div>
      </Panel>
    </div>
  )
}
