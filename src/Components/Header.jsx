import styles from "./header.module.css";
import profilePic from "../assets/profilePic.jpg";
// import hire from "../assets/hireMe.png";
import copy from "../assets/CopyEmail.png";
import DesktopBody from "./DesktopBody";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div>
          <div className={styles.desktopUl}>
            <ul className={styles.headerUl}>
              <li>AVAILABLE FOR JOB</li>
            </ul>
            <p className={styles.firstPara}>UI/UX DESIGNER</p>
          </div>
          <div>
            <img src={profilePic} alt="" className={styles.profilePicture} />
          </div>
          <div className={styles.desktopHeader}>
            <div>
              <div>
                <h1>I'm Zainab Nisa</h1>
                <p>I design digital products with great experience.</p>
              </div>
              <div className={styles.callToAction}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button className={styles.hireBtn}>Hire me </button>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className={styles.line}></div>
                    <span className={styles.text}>+</span>
                  </div>
                </div>
                <div>
                  <img className={styles.copyBtn} src={copy} alt="" />
                </div>
              </div>
            </div>
            <div>
              <img src={profilePic} alt="" className={styles.desktopImg} />
            </div>
          </div>
          {/* <div>
            <button className={styles.copyBtn}>Copy Email</button>
          </div> */}
        </div>
      </div>

    </>
  );
}
