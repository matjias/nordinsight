import { useState } from 'react'
import Navbar from '../Navbar'
import ContactModal from '../ContactModal'
import Footer from '../sections/Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <div>
      <Navbar openModal={toggleModal} />
      {children}
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  )
}

export default Layout
