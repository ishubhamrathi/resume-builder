import React from 'react';
import styles from "./Header.module.css";
import resumeSvg from "../../assests/resume.svg"
const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
      <p className={styles.heading}>
        A <span>Resume</span> that stand out!
      </p>
      <p className={styles.heading}>
        Make your own resume. <span>It's free</span>
      </p>
      </div>
      <div className={styles.right}>
        <img alt="" src={resumeSvg}></img>
      </div>
    </div>
  )
}

export default Header
