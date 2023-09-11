import { useState } from 'react'
import Layout from '../components/general/Layout'
import styles from '../styles/Home.module.css'
import ContactModal from '../components/ContactModal'
import Heading from '../components/sections/Heading'
import Newsletter from '../components/newsletter'
import RiskGuarantee from '../components/sections/RiskGuarantee'
import ScanningSection from '../components/sections/ScanningSection'
import AISearchSection from '../components/sections/AISearchSection'
import ImplantLibrarySection from '../components/sections/ImplantLibrarySection'

const Company: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }
  return (
    <div className={styles.container}>
      <Layout>
        <section>
          <Heading title="Discover What Sets NordInsight Apart">
            <div>
              <Newsletter />
            </div>
          </Heading>
        </section>
        <div className={styles.content}>
          <section id="conditionalFinder">
            <ScanningSection openModal={toggleModal} />
          </section>
          <section id="search">
            <AISearchSection openModal={toggleModal} />
          </section>
          <section id="library">
            <ImplantLibrarySection openModal={toggleModal} />
          </section>
          <section>
            <RiskGuarantee openModal={toggleModal} />
          </section>
        </div>
      </Layout>
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  )
}

export default Company
