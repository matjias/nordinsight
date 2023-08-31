import styles from '../styles/Profile.module.css'
import Link from 'next/link';

interface ProfileInfo {
  image: React.ReactNode;
  name: string;
  title: string;
  description?: React.ReactNode;
  linkedInUrl: string; 
}

const Profile: React.FC<{ info: ProfileInfo }> = ({ info }) => {

  return (
    <Link href={info.linkedInUrl} >
      <a className={styles.linkWrapper} href={info.linkedInUrl} target="_blank" rel="noopener noreferrer"> 
        <div className={styles.wrapper}>
          <div className={styles.profileimage}>
            <div className={styles.imgcontainer}>{info.image}</div>
          </div>
          <p className={styles.name}>{info.name}</p>
          <p className={styles.title}>{info.title}</p>
          <p className={styles.description}>{info.description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Profile;

