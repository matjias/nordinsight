import styles from '../styles/Team.module.css'
import Profile from './profile';

const Team: React.FC = () => {

    const mathiasInfo = {
        imageSrc: '/../public/mathias.jpeg',
        name: 'Mathias Sixten Pedersen',
        title: 'CTO & Co-founder',
        description: '',
        linkedInUrl: 'https://linkedin.com/in/sixped'
    }
    const simonInfo = {
        imageSrc: '/../public/simon.jpg',
        name: 'Simon Elliott Thomassen',
        title: 'CEO & Co-founder',
        description: '',
        linkedInUrl: 'https://www.linkedin.com/in/simon-elliott-thomassen-884682a1/'
    }

 return(<div className={styles.wrapper}>
     <h3>Team</h3>
     <div className={styles.profiles}>
         <Profile info={simonInfo} />
         <Profile info={mathiasInfo} />
     </div>
 </div>)   
}
export default Team;