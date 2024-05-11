import { FunctionComponent } from "react";
import styles from "./MODERNAGRICULTURE.module.css";

const MODERNAGRICULTURE: FunctionComponent = () => {
  return (
    <div className={styles.modernAgriculture}>
      <div className={styles.bg} />
      <img className={styles.styleIcon} alt="" src="/style1@2x.png" />
      <div className={styles.style}>
        <div className={styles.dataManager} />
        <div className={styles.dataMonitor} />
      </div>
      <div className={styles.dataSecurity}>
        <div className={styles.dataBackup}>
          <div className={styles.modernAgricultureParent}>
            <div className={styles.modernAgriculture1}>MODERN AGRICULTURE</div>
            <h1 className={styles.realTimeUsage}>Real-Time Usage:</h1>
          </div>
          <div className={styles.dataFission}>
            <div className={styles.farmers}>Farmers:</div>
            <div className={styles.dataAsynch}>
              <div className={styles.dataStack}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.dataPool}>
                  <div className={styles.dissuadeEcstaticAnd}>
                    Farmers can utilize the soil fertility evaluation tool to
                    assess the health of their soil in real-time, enabling them
                    to make informed decisions regarding nutrient management,
                    irrigation scheduling, and crop rotation to optimize yields.
                  </div>
                </div>
              </div>
              <div className={styles.dividor} />
              <div className={styles.dataMap}>
                <div className={styles.dataGraph}>
                  <img className={styles.icon1} alt="" src="/icon.svg" />
                </div>
                <div className={styles.dataDashboard}>
                  <div className={styles.agronomists}>Agronomists:</div>
                  <div className={styles.dissuadeEcstaticAnd1}>
                    Agronomists can leverage the tool to provide tailored
                    recommendations to farmers, facilitating proactive soil
                    management strategies and enhancing agricultural
                    productivity while promoting sustainable practices.
                  </div>
                </div>
              </div>
              <div className={styles.dividor1} />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.iconWrapper}>
                <img className={styles.icon2} alt="" src="/icon.svg" />
              </div>
              <div className={styles.environmentalAgenciesParent}>
                <div className={styles.environmentalAgencies}>
                  Environmental Agencies:
                </div>
                <div className={styles.dissuadeEcstaticAnd2}>
                  Environmental agencies can utilize the tool to monitor soil
                  health on a broader scale, identify trends in soil fertility
                  degradation, and develop targeted interventions to mitigate
                  soil erosion, nutrient depletion, and other environmental
                  concerns.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.image20Icon}
        loading="lazy"
        alt=""
        src="/image-20@2x.png"
      />
    </div>
  );
};

export default MODERNAGRICULTURE;
