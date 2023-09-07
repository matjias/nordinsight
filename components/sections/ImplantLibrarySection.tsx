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
            <Image src="/test_icon.svg" height={56} width={56} alt="icon" />
            <p>Potential delays</p>
          </div>
          <div className={styles.flex}>
            <Image src="/test_icon.svg" height={56} width={56} alt="icon" />
            <p>Care inefficiencies</p>
          </div>
          <div className={styles.flex}>
            <Image src="/test_icon.svg" height={56} width={56} alt="icon" />
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
        text="No more second-guessing, Simply leverage advanced filtering to pinpoint the exact implant type and its corresponding details, ensuring both safety and accuracy in MRI scans."
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
