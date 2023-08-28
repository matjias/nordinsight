import styles from '../styles/Testimonials.module.css'
import TestimonialCard from './TestimonialCard'

const Testimonials: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Real Stories from Hospitals Like Yours</h2>

      <div className={styles.cards}>
        <TestimonialCard
          imgUrl="/"
          text='"We waste countless hours and scanning slots (i.e. money), on searching for implant conditionality or safety on the internet. I am glad to have found NordInsight&rsquo;s platform. With their implant platform, researching MRI safety for our patients became a walk in the park!"'
          name="Samuel Oliviera"
          position="Head of Radiology"
        />
        <TestimonialCard
          imgUrl="/"
          text='"We waste countless hours and scanning slots (i.e. money), on searching for implant conditionality or safety on the internet. I am glad to have found NordInsight&rsquo;s platform. With their implant platform, researching MRI safety for our patients became a walk in the park!"'
          name="Samuel Oliviera"
          position="Head of Radiology"
        />
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

export default Testimonials;
