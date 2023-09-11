import Container from '../general/Container'
import styles from '../../styles/ScanningSection.module.css'
import FeatureCard from '../FeatureCard'
import Image from 'next/image'

const ScanningSection: React.FC<{ openModal: () => void }> = ({
  openModal,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Scan All Implants Safely:</h2>
        <p>Conditional Finder Does the Hard Work</p>
      </div>

      <div className={styles.flex}>
        <Container text="Struggling with unidentified or multiple implants during MRI scans? Lack of clear guidance can slow you down and pose safety risks." />
        <div className={styles.card}>
          <div className={styles.flex}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.icon}
                src="/icons/icon4.png"
                height={56}
                width={56}
                alt="icon"
              />
            </div>
            <p>Potential delays</p>
          </div>
          <div className={styles.flex}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.icon}
                src="/icons/icon5.png"
                height={56}
                width={56}
                alt="icon"
              />
            </div>
            <p>Care inefficiencies</p>
          </div>
          <div className={styles.flex}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.icon}
                src="/icons/icon6.png"
                height={56}
                width={56}
                alt="icon"
              />
            </div>
            <p>Denied MRI scans</p>
          </div>
        </div>
      </div>
      <FeatureCard
        subtitle="Solution"
        layout="left"
        imgUrl="/test_img.png"
        buttonTitle="Contact us"
        onClickFunction={openModal}
        text="We've revolutionized this search with our Extensive Library of Implant Conditionals. Say goodbye to the hassle of juggling multiple tabs and sources."
      />
    </div>
  )
}

export default ScanningSection
