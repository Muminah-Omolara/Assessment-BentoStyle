import styles from "./secondAI.module.css";

import FirstMap from "../assets/Map1.png";
import SecondMap from "../assets/Map2.png";

export default function SecondAIMusic() {
  return (
    <div className={styles.mapCaseStudy}>
      <div>
        <h3>AI Music Product</h3>
      </div>
      <div className={styles.arrow}>
        <p> UX Case Study</p>
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
      <div className={styles.mapImage}>
        <img className={styles.FirstMap} src={FirstMap} alt="" />
        <img className={styles.SecondMap} src={SecondMap} alt="" />
      </div>
    </div>
  );
}
