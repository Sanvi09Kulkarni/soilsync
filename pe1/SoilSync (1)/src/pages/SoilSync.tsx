import { FunctionComponent } from "react";
import HeroSection from "../components/HeroSection";
import PopularFoodsAndVegetables from "../components/PopularFoodsAndVegetables";
import OurIntroduction from "../components/OurIntroduction";
import DataImporter from "../components/DataImporter";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./SoilSync.module.css";

const SoilSync: FunctionComponent = () => {
  return (
    <div className={styles.soilSync}>
      <HeroSection />
      <PopularFoodsAndVegetables />
      <section className={styles.agricultureMattersVideoSec}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <h1 className={styles.withSoilSyncContainer}>
          <span>{`"With Soil Sync, we're not just predicting the future of soil health; `}</span>
          <span className={styles.wereShapingIt}>we're shaping it.</span>
          <span>"</span>
        </h1>
      </section>
      <OurIntroduction />
      <DataImporter />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default SoilSync;
