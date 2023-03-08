import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "clsx";
import logo from "assets/logoText.png";
import { routePath } from "app/routes/routePaths";

import { ReactComponent as Logo } from "./logo.svg";
import styles from "./header.module.scss";

type Props = {
  stickable?: boolean;
  className?: string;
  theme?: "light" | "dark"; //уже не нужно
};

const Header = (props: Props) => {
  const { className = "", theme = "light" } = props;

  return (
    <>
      <div
        className={classNames(className, styles.header, {
          [`${styles.header}-light`]: theme === "light",
          [`${styles.header}-dark`]: theme === "dark",
        })}
      >
        <div className={styles.logoWrapper}>
          <NavLink className={styles.logo} to={routePath.SHOP_ROUTE}>
            <img className={styles.logoPicture} src={logo}></img>
          </NavLink>
        </div>
        <h1>Wood Shop: Wooden toys and furniture</h1>
      </div>
    </>
  );
};
export default Header;
