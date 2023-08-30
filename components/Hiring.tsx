import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Hiring.module.css'
import Button, { ButtonType } from './general/Button'

const Hiring: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Join us in our mission</h3>
      <h6>
        From design to development, from med-tech to startup acceleration,
        we&apos;re scouting for standout talents. Think you have what it takes?
        Get in touch!
      </h6>

      <Button
        type={ButtonType.primary}

        onClick={() => window.open('https://thehub.io/startups/nordinsight', '_blank')}
      >See open positions in thehub{' '}
      <FontAwesomeIcon
        icon={faArrowRight}
        style={{ width: '16px', height: '16px' }}
      /></Button>
    </div>
  )
}

export default Hiring
