import styles from '../../styles/Heading.module.css'

interface HeadingProps {
  title: string
  children: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default Heading
