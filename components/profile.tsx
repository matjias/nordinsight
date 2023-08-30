import styles from '../styles/Profile.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface ProfileInfo {
    image: React.ReactNode;
    name: string;
    title: string;
    description?: React.ReactNode;
}

const Profile: React.FC<{info: ProfileInfo}> = ({info}) => {
    return(<div className={styles.wrapper}>
        <div className={styles.profileimage}><div className={styles.imgcontainer}>{info.image}</div></div>
        <h6 className={styles.name}>{info.name}</h6>
        <p className={styles.title}>{info.title}</p>
        <p className={styles.description}>{info.description}</p>
    </div>)
}

export default Profile;