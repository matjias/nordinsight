import styles from '../styles/Hero.module.css'
import Button, { ButtonType } from './general/Button'
import AnimateOnScroll from './utils/AnimateOnScroll'

const Hero: React.FC = () => {
  return (
    <div className={styles.background}>
      <AnimateOnScroll settings={{ transformY: 0 }}>
        <div className={styles.wrapper}>
          <div className={styles.hero}>
            <h5>NORDINSIGHT</h5>
            <h3>The Future of Implant Safety in MRI Scanning</h3>
            <p>
              Navigating the MRI safety labyrinth? Say goodbye to countless
              hours lost and discover the way forward with NordInsight&apos;s
              comprehensive implant library.
            </p>
          </div>
          <Button
            small
            onClick={() => {
              window.location.href = 'https://db.nordradiology.com'
            }}
            type={ButtonType.primary}
          >
            <span>Go to platform</span>
          </Button>
        </div>
      </AnimateOnScroll>
    </div>
  )
}

export default Hero
