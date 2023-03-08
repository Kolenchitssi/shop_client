import React from "react";

import styles from "./style.module.scss";

interface TogleProps {
  value: boolean;
  onChange: () => void;
  labelBefore?: string;
  labelAfter?: string;
}

const Toggle: React.FC<TogleProps> = ({
  value,
  onChange,
  labelBefore = "Dark",
  labelAfter = "Light",
}) => (
  <div className={styles.root}>
    {labelBefore && <div className={styles.labelText}> {labelBefore}</div>}
    <div className={styles.wrapper}>
      <label className={styles.switch} htmlFor="toggler">
        <input
          className={styles.toggler}
          id="toggler"
          type="checkbox"
          onClick={onChange}
          checked={value}
          readOnly
        />
        <span className={styles.slider} />
        <span className={styles.wave} />
      </label>
    </div>
    {labelAfter && <div className={styles.labelText}> {labelAfter}</div>}
  </div>
);

export default Toggle;
