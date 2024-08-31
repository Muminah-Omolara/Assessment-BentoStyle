import styles from "./recent.module.css";
import experience from "../assets/Experience.png";

export default function Recent() {
  return (
    <div className={styles.recentWork}>
      <div>
        <ul className={styles.recentUl}>
          <li>Recent work</li>
        </ul>
      </div>
      <div className={styles.experience}>
        <img src={experience} alt="" />
      </div>

      {/* <div className={styles.experience}>
        <p>Product designer <p className={styles.year}>2023 - Present Figma</p> </p>
        <p>UI/UX designer 2021 - 2022 Google</p>
        <p>Product designer 2023 - Present Figma</p>
        <p>Product designer 2023 - Present Figma</p>
      </div> */}
    </div>
  );
}
