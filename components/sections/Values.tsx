import FeatureCard from '../FeatureCard'
import styles from '../../styles/Values.module.css'

const Values: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  const scrollToTeamSection = () => {
    const teamSection = document.querySelector('#team')
    if (teamSection) {
      teamSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2>Towards a Safer MRI Future</h2>
      <FeatureCard
        layout="left"
        buttonTitle="Get to know us"
        onClickFunction={scrollToTeamSection}
        imgUrl="/idea.svg"
        text="We envision a future where MRI safety information for implants is readily available to all healthcare professionals worldwide, ensuring patients' safety and optimizing the MRI scanning process."
      />
      <FeatureCard
        layout="right"
        buttonTitle="Contact Us"
        onClickFunction={openModal}
        imgUrl="/manage.svg"
        text="Our implant database aims to centralize and streamline the process, ensuring that radiographers and radiologists have the most accurate and up-to-date information at their fingertips."
      />
    </div>
  )
}

export default Values
