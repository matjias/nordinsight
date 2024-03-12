import { useState } from 'react'
import Layout from '../components/general/Layout'
import styles from '../styles/Home.module.css'
import ContactModal from '../components/ContactModal'
import Heading from '../components/sections/Heading'
import RiskGuarantee from '../components/sections/RiskGuarantee'
import ScanningSection from '../components/sections/ScanningSection'
import AISearchSection from '../components/sections/AISearchSection'
import ImplantLibrarySection from '../components/sections/ImplantLibrarySection'
import Button, { ButtonType } from '../components/general/Button'
import productPageStyles from '../styles/product.module.css'

const Company: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }

  const signupRedirect = () => {
    window.location.href =
      'https://dev-nordradiology.herokuapp.com/sign-up/trial'
  }

  return (
    <div className={styles.container}>
      <Layout>
        <section className={productPageStyles.hero}>
          <div className={productPageStyles.gradient}>
            <Heading title="Discover What Sets NordInsight Apart">
              <div className={styles.button}>
                <Button
                  type={ButtonType.signUp}
                  onClick={() =>
                    (window.location.href =
                      'https://dev-nordradiology.herokuapp.com/sign-up/trial')
                  }
                >
                  Sign up for a Free Trial
                </Button>
              </div>
            </Heading>
          </div>
        </section>
        <div className={styles.content}>
          <section id="conditionalFinder">
            <ScanningSection openModal={signupRedirect} />
          </section>
          <section id="search">
            <AISearchSection openModal={signupRedirect} />
          </section>
          <section id="library">
            <ImplantLibrarySection openModal={signupRedirect} />
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
