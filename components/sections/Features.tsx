import FeatureCard from '../FeatureCard'
import styles from '../../styles/Features.module.css'

const Features: React.FC = () => {
  const navigateToSection = (sectionId: string) => {
    const offset = 500

    if (window.location.pathname !== '/product') {
      window.location.href = `/product#${sectionId}`
    } else {
      const targetElement = document.getElementById(sectionId)

      if (targetElement) {
        window.scroll({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <h2>Ready to Revolutionize Your MRI Safety Operations?</h2>
        <FeatureCard
          title="Conditional Finder for Implants"
          layout="left"
          text="Our platform introduces the groundbreaking Conditional Finder—a tool that seamlessly aggregates conditionals for a vast array of implants. No more second-guessing. Simply leverage advanced filtering to pinpoint the exact implant type and its corresponding details, ensuring both safety and accuracy in MRI scans."
          videoUrl="/filter.webm"
          buttonTitle="Learn more"
          onClickFunction={() => navigateToSection('conditionalFinder')}
        />
        <FeatureCard
          title="AI-Powered Search Efficiency"
          layout="right"
          text="Enter our Fast AI-Powered Search Engine. Designed with healthcare professionals in mind, this search engine drastically reduces the time taken to find relevant implant details. By harnessing the power of AI, it instantly fetches the most pertinent information, ensuring professionals spend more time with patients and less time searching."
          videoUrl="/search.webm"
          buttonTitle="Learn more"
          onClickFunction={() => navigateToSection('search')}
        />
        <FeatureCard
          title="Comprehensive Implant Library"
          layout="left"
          text="We've revolutionized this search with our Extensive Library of Implant Conditionals. Say goodbye to the hassle of juggling multiple tabs and sources. Our platform centralizes a vast collection of implant conditionals, ensuring that all the information you need is just a search away, all in one place."
          imgUrl="/lib.png"
          buttonTitle="Learn more"
          onClickFunction={() => navigateToSection('library')}
        />
      </div>
    </div>
  )
}

export default Features
