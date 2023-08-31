import styles from '../styles/CompanyTestimonial.module.css'
import Button, { ButtonType } from './general/Button'
import TestimonialCard from './TestimonialCard'

const CompanyTestimonial: React.FC<{ openModal: () => void }> = ({
  openModal,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1>Bridging the Gap</h1>
      <div className={styles.flex}>
        <div className={styles.card}>
          <h4>
            Revolutionizing the way healthcare professionals access and use MRI
            safety information for implants.
          </h4>
          <Button onClick={openModal} type={ButtonType.secondary}>
            Contact us
          </Button>
        </div>
        <TestimonialCard
          imgUrl="/"
          text='"We waste countless hours and scanning slots (i.e. money), on searching for implant conditionality or safety on the internet. I am glad to have found NordInsight&rsquo;s platform. With their implant platform, researching MRI safety for our patients became a walk in the park!"'
          name="Samuel Oliviera"
          position="Head of Radiology"
        />
      </div>
    </div>
  )
}
export default CompanyTestimonial
