import { memo } from "react";
import classNames from "clsx";
import { NavLink } from "react-router-dom";
import { routePath } from "app/routes/routePaths";

import styles from "./begin.module.scss";

interface Props {
  className?: string;
}

const Begin: React.FunctionComponent<Props> = memo((props) => {
  const { className = "" } = props;

  return (
    <>
      <div
        className={classNames(className, styles.wrapper, {
          // [`${styles.wrapper}--light`]: theme === "light",
          // [`${styles.wrapper}--dark`]: theme === "dark",
        })}
      >
        <NavLink className={styles.link} to={routePath.SHOP_ROUTE}>
          link
        </NavLink>
      </div>
    </>
  );
});

Begin.displayName = "Begin";

export default Begin;
