import AIMusicProduct from "./AIMusicProduct";
import Expertise from "./Expertise";
import MobileApp from "./mobileApp";
import Recent from "./Recent";
import SecondAIMusic from "./SecondAIMusicProduct";
import styles from "./desktopbody.module.css";

export default function DesktopBody() {
  return (
    <div className={styles.desktopView}>
      <div>
        <Recent className={styles.recent} />
        <MobileApp />
      </div>
      <div>
        <Expertise />
        <AIMusicProduct />
        <SecondAIMusic />
      </div>
    </div>
  );
}
