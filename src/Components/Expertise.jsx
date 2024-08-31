import styles from "./expertise.module.css";

export default function Expertise() {
  return (
    <div className={styles.container}>
      <div className={styles.productDesign}>
        <p>Product Design</p>
      </div>
      <div className={styles.flex}>
        <div className={styles.userExperience}>
          <p>User Experience</p>
        </div>
        <div className={styles.noCodeDevelop}>
          <p>NoCode develop</p>
        </div>
      </div>
    </div>
  );
}
