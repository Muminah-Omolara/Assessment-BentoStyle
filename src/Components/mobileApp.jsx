import iphone from "../assets/iphoneImg.png";
import styles from "./mobileApp.module.css";

export default function MobileApp() {
  return (
    <div>
      <div className={styles.mobileApp}>
        <div>
          <h3>iOS Mobile App</h3>
        </div>
        <div className={styles.arrow}>
          <p>Product develop</p>
          <svg
            className={styles.arrowSvg}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.27898 1.39902L8.64943 7.61096M8.27898 1.39902L2.06705 1.76946M8.27898 1.39902L1.46391 9.07846"
              stroke="#FDFDFD"
              stroke-width="1.32321"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className={styles.phone}>
          <img src={iphone} alt="" />
        </div>
      </div>
    </div>
  );
}
