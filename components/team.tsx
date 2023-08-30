import styles from '../styles/Team.module.css'
import Profile from './profile'
import Image from 'next/image'

const Team: React.FC = () => {
  const mathiasInfo = {
    image: <Image src="/sixten.jpg" height={600} width={467} alt="icon" />,
    name: 'Mathias Sixten Pedersen',
    title: 'CTO & Co-founder',
    linkedInUrl: 'https://linkedin.com/in/sixped',
  }
  const simonInfo = {
    image: <Image src="/simon.png" height={600} width={467} alt="icon" />,
    name: 'Simon Elliott Thomassen',
    title: 'CEO & Co-founder',
    linkedInUrl:
      'https://www.linkedin.com/in/simon-elliott-thomassen-884682a1/',
  }

  return (
    <div className={styles.wrapper} id="#team">
      <h3>Hey, let&#39;s solve MRI-safety together!</h3>
      <div className={styles.profiles}>
        <div>
          <Profile info={simonInfo} />
        </div>
        <div>
          <Profile info={mathiasInfo} />
        </div>
        <div>
          <Profile info={mathiasInfo} />
        </div>
        <div>
          <Profile info={simonInfo} />
        </div>
      </div>
    </div>
  )
}
export default Team
