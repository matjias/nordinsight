import styles from "../styles/Mission.module.css";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Mission: React.FC = () => {
  const refWrapper = useRef(null);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowElements(true);
          console.log("hej");
        }
      });
    });

    observer.observe(refWrapper.current);
    return () => observer.unobserve(refWrapper.current);
  }, []);

  return (
    <div className={styles.wrapper}>
       <div className={styles.missionwrapper}>
                    
      {showElements && (
        <React.Fragment>
        <div className={styles.mission}>
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque ultricies purus, a malesuada justo pellentesque in.
            Maecenas nec tortor vestibulum, condimentum mauris eu, feugiat est.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Suspendisse nulla purus, volutpat vel efficitur a, dignissim non ex.
            Aliquam dictum nisi posuere felis pellentesque, vitae bibendum magna
            accumsan. Donec luctus dignissim neque.{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque ultricies purus, a malesuada justo pellentesque in.
            Maecenas nec tortor vestibulum, condimentum mauris eu, feugiat est.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Suspendisse nulla purus, volutpat vel efficitur a, dignissim non ex.
            Aliquam dictum nisi posuere felis pellentesque, vitae bibendum magna
            accumsan. Donec luctus dignissim neque.{" "}
          </p>
        </div>
        </React.Fragment>
      )}
      </div>
      <div ref={refWrapper} className={styles.illustration}>
        {showElements && (
          <React.Fragment>
            <div className={styles.healthicon}>
              <Image
                src="/../public/heart.png"
                width={1000}
                height={1000}
                alt="Future"
              />
            </div>
            <div className={styles.systemicon}>
              <Image
                src="/../public/data-management.png"
                width={1000}
                height={1000}
                alt="Future"
              />
            </div>
            <div className={styles.peopleicon}>
              <Image
                src="/../public/people.png"
                width={1000}
                height={1000}
                alt="Future"
              />
            </div>
            <div className={styles.syshealtharrow}>
              <Image
                src="/../public/rarrow.png"
                width={1000}
                height={1000}
                alt="Future"
              />
            </div>
            <div className={styles.pephealtharrow}>
              <Image
                src="/../public/rarrow.png"
                width={1000}
                height={1000}
                alt="Future"
              />
            </div>
            <div className={styles.syspeparrow}>
              <Image
                src="/../public/darrow.png"
                width={1000}
                height={1000}
                alt="Future"
              />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Mission;
