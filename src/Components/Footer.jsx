import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.mobileFooter}>
        <div className={styles.footer}>
          <div>
            <ul className={styles.footerUl}>
              <li>AVAILABLE FOR JOB</li>
            </ul>
          </div>
          <div className={styles.socials}>
            <h4>
              <span>Twitter</span>
            </h4>
            <h4>Instagram</h4>
            <h4>LinkedIn</h4>
          </div>
          <div>
            <p>Portfolio 2024</p>
          </div>
        </div>
      </div>

      {/* Desktop footer */}

      <div className={styles.desktopFooter}>
        <div>
          <p>Portfolio 2024</p>
        </div>
        <div className={styles.desktopSocials}>
          <h4>
            <span>Twitter</span>
          </h4>
          <h4>Instagram</h4>
          <h4>LinkedIn</h4>
        </div>

        <div>
          <ul className={styles.footerUl}>
            <li>AVAILABLE FOR JOB</li>
          </ul>
        </div>
      </div>
    </>
  );
}
