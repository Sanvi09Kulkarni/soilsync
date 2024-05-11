import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.nav}>
      <div className={styles.bg} />
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-3@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.soilSyncWrapper}>
              <h1 className={styles.soilSync}>Soil Sync</h1>
            </div>
            <div className={styles.solutions}>Solutions</div>
          </div>
        </div>
      </div>
      <div className={styles.navInner}>
        <div className={styles.frameContainer}>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.contactUs}>Contact Us</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
