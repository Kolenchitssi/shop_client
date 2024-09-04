import { ReactNode } from "react";
import classNames from "clsx";
import styles from "./Spinner.module.scss";

interface Props {
  isFetching?: boolean;
  size?: number;
  className?: string;
  color?: string;
  label?: string;
  withLabel?: boolean;
  children?: ReactNode;
}

const Spinner: React.FunctionComponent<Props> = (props) => {
  const {
    isFetching,
    className,
    size = 40,
    label,
    color = "#818a91",
    withLabel = true,
    children,
  } = props;
  return isFetching ? (
    <div className={classNames(styles.spinner, className, "spinner")}>
      <span
        className={styles.spinner__animation}
        style={{
          height: size,
          width: size,
          borderLeftColor: color,
        }}
      ></span>
      {withLabel && (
        <span
          className={styles.spinner__info}
          style={{
            color,
          }}
        >
          {label ? label : "Loading ..."}
        </span>
      )}
    </div>
  ) : (
    <>{children}</>
  );
};

export default Spinner;
