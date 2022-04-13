import styles from "../styles/Mission.module.css";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ShowWhenInView from "./utils/ShowWhenInView";

const Mission: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.missionwrapper}>
        <ShowWhenInView>
          <div className={styles.mission}>
            <h3>Our Mission</h3>
            <p>
              Today there is a lack of safety tools for radiologists and
              radiographers when MRI-scanning patients with medical devices.
              That means increased risk for patients, insecurity for medical
              staff and loads of time wasted. Our mission is to provide the
              right information in a user-friendly way, that ensures that all
              patients with medical devices can receive a trouble-free MRI scan.
            </p>
          </div>
          {/* <h5>Working with</h5> */}
          <div className={styles.partners}>
            <div className={styles.partnerlogo}>
              <Image src="/inno.svg" width={300} height={34} alt="Future" />
            </div>
            <div className={styles.partnerlogo}>
              <Image src="/nhl.svg" width={260} height={80} alt="Future" />
            </div>
          </div>
        </ShowWhenInView>
      </div>
      <div className={styles.illustration}>
        <ShowWhenInView>
          <div className={styles.healthicon}>
            <Image src="/heart.png" width={1000} height={1000} alt="Future" />
          </div>
          <div className={styles.systemicon}>
            <Image
              src="/data-management.png"
              width={1000}
              height={1000}
              alt="Future"
            />
          </div>
          <div className={styles.peopleicon}>
            <Image src="/people.png" width={1000} height={1000} alt="Future" />
          </div>
          <div className={styles.syshealtharrow}>
            <Image src="/rarrow.png" width={1000} height={1000} alt="Future" />
          </div>
          <div className={styles.pephealtharrow}>
            <Image src="/rarrow.png" width={1000} height={1000} alt="Future" />
          </div>
          <div className={styles.syspeparrow}>
            <Image src="/darrow.png" width={1000} height={1000} alt="Future" />
          </div>
        </ShowWhenInView>
      </div>
    </div>
  );
};

export default Mission;