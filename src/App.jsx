import "./App.css";
import AIMusicProduct from "./Components/AIMusicProduct";
import DesktopBody from "./Components/DesktopBody";
import Expertise from "./Components/Expertise";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Navbar";
import Recent from "./Components/Recent";
import SecondAIMusic from "./Components/SecondAIMusicProduct";
import styles from "./Components/bentomobile.module.css";
import MobileApp from "./Components/mobileApp";

export default function App() {
  return (
    <div className={styles.bentoMobile}>
      <div>
        <Nav />
      </div>
      <div>
        <Header />
      </div>
      <div className="desktopStyles">
        <DesktopBody />
      </div>
      <div className="mobileStyles">
        <div>
          <Recent />
        </div>
        <div>
          <Expertise />
        </div>
        <div>
          <MobileApp />
        </div>
        <div>
          <AIMusicProduct />
        </div>
        <div>
          <SecondAIMusic />
        </div>
      </div>
      <Footer />
    </div>
  );
}
