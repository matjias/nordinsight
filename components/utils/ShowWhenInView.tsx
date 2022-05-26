import React, { useRef, useState, useEffect, ReactNode } from "react";
import styles from './ShowWhenInView.module.css';

const ShowWhenInView: React.FC<{style?: string; children: ReactNode}> = ({style, children }) => {
  const refWrapper = useRef(null);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowElements(true);
        }
      });
    });

    observer.observe(refWrapper.current);
    return () => observer.unobserve(refWrapper.current);
  }, []);

  return <div ref={refWrapper}>{showElements && <div className={`${styles.wrapper} ${styles[style]}`}>{children}</div>}</div>;
};

export default ShowWhenInView;