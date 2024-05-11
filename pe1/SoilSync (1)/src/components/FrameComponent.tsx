import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <footer className={styles.weAreLeaderParent}>
      <div className={styles.weAreLeader}>
        <div className={styles.dividor} />
        <img className={styles.styleIcon} alt="" src="/style@2x.png" />
        <div className={styles.arrayElement} />
        <h1 className={styles.buildingAGreener}>
          Building a greener future through innovative soil fertility solutions.
        </h1>
      </div>
      <div className={styles.graphVertex}>
        <div className={styles.treeLeaf}>
          <div className={styles.copyrightSoilsyncAll}>
            Copyright ©Soilsync. All Right Reserved.
          </div>
          <div className={styles.stackTop}>
            <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
