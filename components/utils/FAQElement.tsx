import { useRef, useState } from "react";
import styles from "../../styles/FaqElement.module.css";

const FaqElement: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const descriptionRef = useRef(null);
  const [open, setOpen] = useState(false);

  const toggleDescription = () => {
    if (!open) {
      descriptionRef.current.style.display = "block";
    } else {
      descriptionRef.current.style.display = "none";
    }
    setOpen(!open);
  };

  return (
    <div className={!open ? styles.wrapper : styles.wrapper  + ' ' + styles.open}>
      <div className={styles.toggle} onClick={toggleDescription}>
      <span className={styles.arrow}></span><h5>{title}</h5>
      </div>
      <p className={styles.description} ref={descriptionRef}>
        {description}
      </p>
    </div>
  );
};

export default FaqElement;
