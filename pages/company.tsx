import { useState } from 'react'
import Layout from '../components/general/Layout'
import styles from '../styles/Home.module.css'
import Values from '../components/Values'
import Team from '../components/team'
import Partners from '../components/Partners'
import Hiring from '../components/Hiring'
import CompanyTestimonial from '../components/CompanyTestimonial'
import ContactModal from '../components/ContactModal'
import Heading from '../components/Heading'
import Button, { ButtonType } from '../components/general/Button'

const Company: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }
  return (
    <div className={styles.container}>
      <Layout>
        <section>
            <Heading title="Enhancing MRI safety by facilitating access to reliable, updated information." > 
            <div className={styles.button}>
                <Button onClick={toggleModal} type={ButtonType.primary} className={styles.transparent}>Get in Touch with Us</Button>
            </div>
            
            </Heading>
        </section>
        <div className={styles.content}>
          <section>
            <Values openModal={toggleModal} />
          </section>
          <section id="team">
            <Team />
          </section>
          <section>
            <CompanyTestimonial openModal={toggleModal} />
          </section>
          <section>
            <Partners heading="Our partners and collaborators" />
          </section>
          <section>
            <Hiring />
          </section>
        </div>
      </Layout>
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  )
}

export default Company
