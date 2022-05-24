import styles from '../styles/Profile.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface ProfileInfo {
    imageSrc: string;
    name: string;
    title: string;
    description?: React.ReactNode;
    linkedInUrl: string;
}

const Profile: React.FC<{info: ProfileInfo}> = ({info}) => {
    return(<div className={styles.wrapper}>
        <div className={styles.profileimage}><img src={info.imageSrc} alt="icon" /></div>
        <h5 className={styles.name}>{info.name}</h5>
        <p className={styles.title}>{info.title}</p>
        <div className={styles.linkedin} ><Link href={info.linkedInUrl} passHref><Image src='/linkedin.png' width={1000} height={1000} alt="icon" /></Link> </div>
        <p className={styles.description}>{info.description}</p>
    </div>)
}

export default Profile;