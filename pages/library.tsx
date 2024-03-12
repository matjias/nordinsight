import { useEffect, useState } from 'react'
import Layout from '../components/general/Layout'
import styles from '../styles/Library.module.css'
import { getImplantData } from '../lib/implantData'
import Link from 'next/link'

const Library: React.FC<{ implants: any[] }> = ({ implants }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')

  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }

  const signupRedirect = () => {
    window.location.href =
      'https://dev-nordradiology.herokuapp.com/sign-up/trial'
  }

  const search = (term) => {
    const filtered = implants.filter((implant) =>
      implant.model.toLowerCase().includes(term.toLowerCase()),
    )
    for (const implant of filtered) {
      const impElement = document.getElementById(implant.slug)
      if (impElement) {
        console.log(impElement)
        impElement.style.display = 'block'
      }
    }
  }

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.search}>
          <div className={styles.info}>
            <h1>NordInsight MRI Safety Library</h1>
            <p>
              Take a sneak peek into NordInight&apos;s extensive implant
              library.
            </p>
          </div>
          <div className={styles.info}>
            <form>
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                id="searchInput"
              />
              <button
                onClick={(e) => {
                  e.preventDefault()
                  search(searchTerm)
                }}
                id="submitButton"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <ul className={styles.results} id="resultList">
          {implants.map((implant) => (
            <li key={implant.slug} id={implant.slug} className={styles.implant}>
              <Link href={`/implants/${implant.slug}/`}>{implant.model}</Link>
            </li>
          ))}
        </ul>
        {/* <ContactModal isOpen={isModalOpen} onClose={toggleModal} /> */}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const implants = await getImplantData()
  return { props: { implants } }
}

export default Library
