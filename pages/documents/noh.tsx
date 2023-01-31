import styles from './noh.module.css'


const Documents = () => {
    return (
        <div className={styles.wrapper}>
            <h3>NOH x NordInsight</h3>
            <p>Afsluttende rapport vedrørende test forløb udført i efteråret 2022 kan findes her:</p>
            <a href='https://files.nordinsight.com/documents/Afsluttende_rapport_NOH_NordInsight_2022.pdf' target={'_blank'} rel="noreferrer">PDF</a>
            <a href='https://files.nordinsight.com/documents/Afsluttende_rapport_NOH_NordInsight_2022.docx' download="Afsluttende_rapport_NOH_NordInsight_2022.docx">WORD</a>
        </div>
    )
}

export default Documents;