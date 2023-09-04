import styles from "./Container.module.css"

interface ContainerProps {
    text: string
}


const Container: React.FC<ContainerProps> = ({ text }) => {
    return (
        <div className={styles.wrapper}>
            <h5>Problem</h5>
            <h4>{text}</h4>

        </div>
    )
}
export default Container;
