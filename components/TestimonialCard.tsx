import Image from "next/image";
import styles from "../styles/TestimonialCard.module.css";

interface TestimonialCardProps {
    name: string;
    position: string;
    text: string;
    imgUrl: string;

}

const TestimonialCard: React.FC<TestimonialCardProps> = ({name, position, text, imgUrl}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <div className={styles.image}>
                <Image src={imgUrl} width={64} height={64} alt="profile-img" objectFit="cover"/>
                </div>
                <div className={styles.person_info}>
                    <p>{name}</p>
                    <p>{position}</p>
                </div>
            </div>
            <p className={styles.testimonial}>{text}</p>
        </div>

    )
}

export default TestimonialCard;