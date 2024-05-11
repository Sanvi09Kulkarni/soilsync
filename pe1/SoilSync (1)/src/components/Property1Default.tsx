import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Default.module.css";

export type Property1DefaultType = {
  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default: FunctionComponent<Property1DefaultType> = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.button}>
        <b className={styles.clickHere}>Analyse</b>
      </div>
    </div>
  );
};

export default Property1Default;
