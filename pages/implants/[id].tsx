import Link from 'next/link'
import {
  getImplantData,
  getImplantFromFile,
  saveImplantsToFile,
} from '../../lib/implantData'
import Layout from '../../components/general/Layout'
import styles from '../../styles/ImplantPage.module.css'
import Button, { ButtonType } from '../../components/general/Button'

const Implant: React.FC<{ implant: any }> = ({ implant }) => {
  const statusImg = `/${implant.status}.png`

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.implant}>
          <header>
            {/* <p>MRI Safety information for:</p> */}
            <div className={styles.title}>
              <h1>{implant.model}</h1>
              <img src={statusImg} alt={implant.status} />
            </div>
            <h2>{implant.manufacturer}</h2>
          </header>
          <h3>{implant.type}</h3>
          <p dangerouslySetInnerHTML={{ __html: implant.desc }} />
          <div className={styles.contact}>
            <h4>
              Need access to full up-to-date conditionals? Sign up for 7-day
              free trial
            </h4>
            <Button
              className={styles.button}
              type={ButtonType.primary}
              onClick={() =>
                (window.location.href =
                  'https://db.nordradiology.com/sign-up/trial')
              }
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = ({ params }) => {
  console.log(params)
  const implant = getImplantFromFile(params.id)
  return { props: { implant } }
}

export async function getStaticPaths() {
  const implants = await getImplantData()
  saveImplantsToFile(implants)

  const paths = implants.map((implant) => {
    return {
      params: { id: implant.slug },
    }
  })

  // console.log(paths)

  return { paths, fallback: false }
}

export default Implant
