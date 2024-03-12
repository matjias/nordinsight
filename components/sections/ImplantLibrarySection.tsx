import styles from '../../styles/ImplantLibrarySection.module.css'
import FeatureCard from '../FeatureCard'
import Container from '../general/Container'
import Image from 'next/image'

const ImplantLibrarySection: React.FC<{ openModal: () => void }> = ({
  openModal,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Comprehensive Implant Library</h2>
        <p>
          Navigating through endless catalogs and spec sheets for implant
          information is a thing of the past. Our Comprehensive Implant Library
          consolidates all the essential details in one easy-to-access place,
          giving you the confidence to make informed decisions quickly.
        </p>
      </div>
      <div className={styles.flex}>
        <Container text="The hunt for implant conditionals often becomes a tedious scavenger hunt across multiple websites, sifting through fragmented pieces of information." />
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
                src="/icons/icon10.png"
                height={56}
                width={56}
                alt="icon"
              />
            </div>

            <p>Out-of-date information</p>
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
        imgUrl="/book.svg"
        buttonTitle="Try it"
        onClickFunction={openModal}
        text="We've revolutionized this search with our Extensive Library of Implant Conditionals. Say goodbye to the hassle of juggling multiple tabs and sources."
      />
      <div className={styles.summary}>
        <h3>
          Our platform centralizes a vast collection of implant conditionals,
          ensuring that all the information you need is just a search away, all
          in one place.
        </h3>
      </div>
    </div>
  )
}

export default ImplantLibrarySection
