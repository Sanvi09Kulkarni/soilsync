import { FunctionComponent } from "react";
import TextInput from "./TextInput";
import Property1Default from "./Property1Default";
import styles from "./PopularFoodsAndVegetables.module.css";

const PopularFoodsAndVegetables: FunctionComponent = () => {
  return (
    <section className={styles.popularFoodsAndVegetables}>
      <div className={styles.styleWrapper}>
        <div className={styles.style} />
      </div>
      <div className={styles.popularFoodsAndVegetablesInner}>
        <div className={styles.image6Parent}>
          <img className={styles.image6Icon} alt="" src="/image-61@2x.png" />
          <div className={styles.successfullyProjectCompleted}>
            <div className={styles.successfullyProjectCompletedChild} />
            <div className={styles.iconWrapper}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
            </div>
            <div className={styles.successfullyProjectCompletedInner}>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>90+</div>
              <div className={styles.successfullyProjectCompleted1}>
                Successfully Project Completed
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.getYourSoilAnalysisParent}>
            <div className={styles.getYourSoil}>Get Your Soil Analysis</div>
            <h1 className={styles.enterDetailsTo}>
              Enter details to get a comprehensive soil analysis
            </h1>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.textInputParent}>
            <TextInput label="pH" />
            <TextInput label="Soil moisture" />
            <TextInput label="Air Quality Index (AQI)" />
          </div>
        </div>
        <Property1Default
          property1DefaultPosition="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
        />
      </form>
    </section>
  );
};

export default PopularFoodsAndVegetables;
