import { FunctionComponent } from "react";
import Header from "./Header";
import styles from "./HeroSection.module.css";

const HeroSection: FunctionComponent = () => {
  return (
    <section className={styles.heroSection}>
      <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      <Header />
      <div className={styles.heroSectionChild} />
      <div className={styles.heroSectionInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper}>
                <div className={styles.underline01Parent}>
                  <img
                    className={styles.underline01Icon}
                    loading="lazy"
                    alt=""
                    src="/underline-01.svg"
                  />
                  <h3 className={styles.soilSync}>Soil Sync</h3>
                </div>
              </div>
              <h1 className={styles.tomorrowsHarvest}>Tomorrow's Harvest</h1>
              <h1 className={styles.beginsToday}>Begins Today.</h1>
            </div>
            <div className={styles.dissuadeEcstaticAndContainer}>
              <p className={styles.blankLine}>&nbsp;</p>
              <p
                className={styles.empoweringFarmersWith}
              >{`Empowering farmers with advanced technology to nurture the land `}</p>
              <p className={styles.forGenerationsTo}>
                for generations to come.
              </p>
            </div>
          </div>
          <button className={styles.component11}>
            <div className={styles.tryNow}>Try Now</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
