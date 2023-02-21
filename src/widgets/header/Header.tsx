import React, { useEffect, useState } from "react";
import classNames from "clsx";

import { ReactComponent as Logo } from "./logo.svg";
import styles from "./header.module.scss";

type Props = {
  stickable?: boolean;
  className?: string;
  theme?: "light" | "dark";
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
        Header
      </div>
    </>
  );
};
export default Header;
