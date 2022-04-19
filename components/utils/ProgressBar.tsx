import { useEffect, useRef, useState } from "react";
import styles from "../../styles/ProgressBar.module.css";

const ProgressBar: React.FC<{ progress: number, start: string, end: string }> = ({ progress, start, end }) => {
  //   const progRef = useRef(null);
  //   let prog = 0;

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       prog++;
  //       progRef.current.style.width = `${100-prog}%`;
  //       if (prog > progress) {
  //         clearInterval(timer);
  //       }
  //     }, 20);
  //     return
  //   }, []);

  return (
    <div className={styles.outer}>
        <span className={styles.start}>{start}</span>
        {/* <div className={styles.marker}></div> */}
      <div className={styles.inner}>
        <div
          className={styles.mask}
          style={{ width: `${Math.floor(100 - progress)}%` }}
        ></div>
        <div className={styles.ani}></div>
      </div>
        <span className={styles.end}>{end}</span>
    </div>
    // <Bar key={prog} progress={prog} />
  );
};

export default ProgressBar;
