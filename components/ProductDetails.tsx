import styles from '../styles/ProductDetails.module.css'
import ProductDetailCard from './ProductDetailCard'

const ProductDetails: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <h2>Swift Onboarding & Implementation</h2>
        <p className={styles.subtitle}>
          At NordInsight, we understand the value of time, especially in the
          healthcare sector. That&apos;s why we&apos;ve optimized our platform
          for instant access and ease of use. Jump-start your MRI scanning
          process without a hitch.
        </p>

        <div className={styles.cards}>
          <ProductDetailCard
            title="Hassle-free setup"
            imgUrl="/icon1.png"
            text="Initiate your hospital's access with just an email. No intricate installations or configurations. "
          />

          <ProductDetailCard
            title="Navigate with Ease"
            imgUrl="/icon2.png"
            text="Our platform operates similarly to search engines like Google,  making it user-friendly."
          />

          <ProductDetailCard
            title="Access our Platform"
            imgUrl="/icon3.png"
            text="No need for intricate system integrations or software installations. "
          />
          <ProductDetailCard
            title="Unmatched Reliability"
            imgUrl="/icon3.png"
            text="Experience peace of mind with NordInsight's 99.99% uptime. Clear Cost Benefits with NordInsight"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
