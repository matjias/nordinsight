import styles from '../styles/ProductDetails.module.css'
import ProductDetailCard from './ProductDetailCard'
import ShowWhenInView from './utils/ShowWhenInView'
import Image from 'next/image'

const ProductDetails: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <ShowWhenInView style="fade-in">
          <h3>Swift Onboarding & Implementation</h3>
          <p className={styles.subtitle}>
            At NordInsight, we understand the value of time, especially in the
            healthcare sector. That&apos;s why we&apos;ve optimized our platform
            for instant access and ease of use. Jump-start your MRI scanning
            process without a hitch.
          </p>

          <div className={styles.cards}>
            <ProductDetailCard
              title="Immediate Implementation"
              imgUrl="/icon1.png"
              text="Hassle-free Setup: Initiate your hospital's access with just an email. No intricate installations or configurations. 

              Empower Your Team: Once set up, your hospital admin can seamlessly add team members, ensuring everyone is onboarded and ready to go."
            />

            <ProductDetailCard
              title="Onboarding Experience"
              imgUrl="/icon2.png"
              text="Navigate with Ease: Our platform operates similarly to familiar search engines like Google, making it intuitive for anyone to use.

            rials to guide you, ensuring you're making the most of what we offer."
            />

            <ProductDetailCard
              title="No Integration Hassles"
              imgUrl="/icon3.png"
              text="Access our platform: directly through any web browser. 
              No need for intricate system integrations or software installations. 
              
              It's standalone efficiency at its best, ensuring your team can focus on patient care rather than technicalities."
            />
            <ProductDetailCard
              title="Unmatched Reliability"
              imgUrl="/icon3.png"
              text="Experience peace of mind with NordInsight's 99.99% uptime. 
              Clear Cost Benefits with NordInsight
              
              Immediate Savings: A department of 20 radiographers saves around 20 hours every week, directly translating to monetary benefits."
            />
          </div>
        </ShowWhenInView>
      </div>
    </div>
  )
}

export default ProductDetails
