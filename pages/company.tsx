import { useState } from 'react'
import Layout from '../components/general/Layout'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Values from '../components/Values'
import Team from '../components/team'
import Partners from '../components/Partners'
import Hiring from '../components/Hiring'
import CompanyTestimonial from '../components/CompanyTestimonial'
import ContactModal from '../components/ContactModal'

const Company: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }
  return (
    <div className={styles.container}>
      <Layout>
        <section>
          <Hero customStyle={{ width: '70%' }} heading="Enhancing MRI safety by facilitating access to reliable, updated information." />
        </section>
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
      </Layout>
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  )
}

export default Company
