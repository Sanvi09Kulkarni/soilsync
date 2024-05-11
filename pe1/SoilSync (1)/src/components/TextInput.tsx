import { FunctionComponent } from "react";
import styles from "./TextInput.module.css";

export type TextInputType = {
  label?: string;
};

const TextInput: FunctionComponent<TextInputType> = ({ label }) => {
  return (
    <div className={styles.textInput}>
      <div className={styles.dataAggregator}>
        <b className={styles.label}>{label}</b>
      </div>
      <input
        className={styles.outputProcessor}
        placeholder="Enter"
        type="text"
      />
    </div>
  );
};

export default TextInput;
