import { FunctionComponent } from "react";
import styles from "./OurIntroduction.module.css";

const OurIntroduction: FunctionComponent = () => {
  return (
    <section className={styles.ourIntroduction}>
      <div className={styles.style} />
      <div className={styles.singleSelect}>
        <div className={styles.style1} />
      </div>
      <div className={styles.errorHandler}>
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      </div>
      <div className={styles.temporaryHolder}>
        <div className={styles.text}>
          <div className={styles.title}>
            <div className={styles.aboutUs}>About Us</div>
            <h1 className={styles.whyChooseSoil}>Why Choose Soil Sync?</h1>
          </div>
          <div className={styles.dataComparator}>
            <h2 className={styles.yourzameenkasaathi}>#YourZameenkaSaathi</h2>
            <div className={styles.dissuadeEcstaticAnd}>
              At Soil Sync, we understand that achieving maximum agricultural
              output and sustainable agriculture depend on maintaining ideal
              soil fertility. However, conventional soil examination techniques
              are often expensive, time-consuming, and labor-intensive. That's
              why we're pioneering a new approach.
            </div>
          </div>
          <div className={styles.dataSeparator}>
            <div className={styles.dataTransformer}>
              <img
                className={styles.materialSymbolscheckCircleIcon}
                loading="lazy"
                alt=""
                src="/materialsymbolscheckcircle.svg"
              />
              <div className={styles.sayGoodbyeTo}>
                Say goodbye to lengthy soil examination processes
              </div>
            </div>
            <div className={styles.dataTransformer1}>
              <img
                className={styles.materialSymbolscheckCircleIcon1}
                alt=""
                src="/materialsymbolscheckcircle.svg"
              />
              <div className={styles.weDeliverPrecise}>
                We deliver precise soil fertility forecasts
              </div>
            </div>
            <div className={styles.dataTransformer2}>
              <img
                className={styles.materialSymbolscheckCircleIcon2}
                alt=""
                src="/materialsymbolscheckcircle.svg"
              />
              <div className={styles.soilSyncContributes}>
                Soil Sync contributes to sustainable agricultural practices
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurIntroduction;
