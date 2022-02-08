import styles from '../styles/Profile.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface ProfileInfo {
    imageSrc: string;
    name: string;
    title: string;
    description: string;
    linkedInUrl: string;
}

const Profile: React.FC<{info: ProfileInfo}> = ({info}) => {
    return(<div className={styles.wrapper}>
        <div className={styles.profileimage}><Image src={info.imageSrc} width={2000} height={2666} alt="icon" /></div>
        <h5 className={styles.name}>{info.name}</h5>
        <p className={styles.title}>{info.title}</p>
        <p className={styles.description}>{info.description}</p>
        <div className={styles.linkedin} ><Link href={info.linkedInUrl} passHref><Image src='/linkedin.png' width={1000} height={1000} alt="icon" /></Link> </div>
    </div>)
}

export default Profile;