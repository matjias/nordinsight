import styles from '../../styles/AISearchSection.module.css'
import FeatureCard from '../FeatureCard'
import Container from '../general/Container'
import Image from 'next/image'

const AISearchSection: React.FC<{ openModal: () => void }> = ({
  openModal,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2>AI-Powered Search Efficiency</h2>
      <p className={styles.info}>
        Finding the right implant information shouldn&apos;t be like looking for
        a needle in a haystack. Our AI-Powered Search Efficiency lets you use
        broader, everyday terms to zero in on the implants you&apos;re searching
        for. No medical jargon needed—just simple, effective results.
      </p>
      <Container text="Healthcare professionals, already under the constant pressure of time, find themselves wading through vast amounts of data, seeking the right implant information. Every minute spent searching is a minute not spent on patient care." />
      <FeatureCard
        imgUrl="/advsearch.svg"
        subtitle="Solution"
        layout="right"
        buttonTitle="Try it"
        onClickFunction={openModal}
        text="Enter our Fast AI-Powered Search Engine. Designed with healthcare professionals in mind, this search engine drastically reduces the time taken to find relevant implant details."
      />
      <div className={styles.flex}>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.icon}
              src="/icons/icon7.png"
              width={57}
              height={56}
              alt="icon"
            />
          </div>
          <p>Reduced search time for implant details</p>
        </div>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.icon}
              src="/icons/icon8.png"
              width={57}
              height={56}
              alt="icon"
            />
          </div>
          <p>Up-to-date implant information</p>
        </div>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.icon}
              src="/icons/icon9.png"
              width={57}
              height={56}
              alt="icon"
            />
          </div>

          <p>More time for patient care</p>
        </div>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.icon}
              src="/icons/icon5.png"
              width={57}
              height={56}
              alt="icon"
            />
          </div>
          <p>Healthcare professional oriented design</p>
        </div>
      </div>
    </div>
  )
}

export default AISearchSection
