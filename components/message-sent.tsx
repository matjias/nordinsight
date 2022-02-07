import styles from '../styles/MessageSent.module.css'
import Image from 'next/image'

const MessageSent: React.FC<{name: string}> = ({name}) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.messageicon}>
            <Image
                src="/../public/check-mark.png"
                width={1000}
                height={1000}
                alt="Future"
                />
            </div>
            <h2>Thanks, {name}</h2>
            <p>Your message has been sent. We will get back to you ASAP.</p>
        </div>
    )
}

export default MessageSent;