import React from "react";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "app/hooks/hooks";
import classNames from "clsx";

import { routePath } from "app/routes/routePaths";
import logo from "assets/logoText.png";

import styles from "./style.module.scss";

type Props = {
  className?: string;
  theme?: "light" | "dark";
};

const TopMenu: React.FunctionComponent = (props: Props) => {
  const { className = "", theme = "light" } = props;

  const { isUserAuth } = useAppSelector((state) => state.user);

  return (
    <>
      <div
        className={classNames(className, styles.topMenu, {
          [`${styles.topMenu}-light`]: theme === "light",
          [`${styles.topMenu}-dark`]: theme === "dark",
        })}
      >
        <div className={styles.logoWrapper}>
          <NavLink className={styles.logo} to={routePath.SHOP_ROUTE}>
            <img className={styles.logoPicture} src={logo}></img>
          </NavLink>
        </div>

        {/* /Can may use <NavLink to={SHOP_ROUTE}>Home</NavLink> */}
        {isUserAuth ? (
          <div className={styles.menuWrapper}>
            {String(isUserAuth)}
            <NavLink className={styles.link} to={routePath.SHOP_ROUTE}>
              Домой
            </NavLink>
            <NavLink className={styles.link} to={routePath.ADMIN_ROUTE}>
              Админ. Панель
            </NavLink>
            <NavLink
              className={styles.link}
              to={routePath.LOGIN_ROUTE}
              onClick={() => {
                console.log("logout");

                //todo logOut
                // logOut();
              }}
            >
              Выйти
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink className={styles.link} to={routePath.LOGIN_ROUTE}>
              Авторизация
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};
export default TopMenu;
