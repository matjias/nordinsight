import styles from '../../styles/Team.module.css'
import Profile from '../profile'
import Image from 'next/image'

const Team: React.FC = () => {
  const mathiasInfo = {
    image: <Image src="/sixten.jpg" height={500} width={380} alt="icon" />,
    name: 'Mathias Sixten Pedersen',
    title: 'CTO & Co-founder',
    linkedInUrl: 'https://linkedin.com/in/sixped',
  }
  const simonInfo = {
    image: <Image src="/simon.png" height={500} width={380} alt="icon" />,
    name: 'Simon Elliott Thomassen',
    title: 'CEO & Co-founder',
    linkedInUrl:
      'https://www.linkedin.com/in/simon-elliott-thomassen-884682a1/',
  }

  return (
    <div className={styles.wrapper}>
      <h2>Hey, let&#39;s solve MRI-safety together!</h2>
      <div className={styles.profiles}>
        <Profile info={simonInfo} />
        <Profile info={mathiasInfo} />
      </div>
    </div>
  )
}
export default Team
