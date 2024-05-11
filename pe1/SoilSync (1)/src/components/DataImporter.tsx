import { FunctionComponent } from "react";
import MODERNAGRICULTURE from "./MODERNAGRICULTURE";
import styles from "./DataImporter.module.css";

const DataImporter: FunctionComponent = () => {
  return (
    <section className={styles.dataImporter}>
      <MODERNAGRICULTURE />
    </section>
  );
};

export default DataImporter;
