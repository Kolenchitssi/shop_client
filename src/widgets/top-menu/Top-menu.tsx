import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "clsx";
import { useAppSelector } from "app/hooks/hooks";
import { useThemeContext, themes } from "app/styles/themes/ThemeContext";

import { routePath } from "app/routes/routePaths";

import styles from "./style.module.scss";
import Toggle from "shared/ToggleTheme/ToggleTheme";

type Props = {
  className?: string;
  theme?: "light" | "dark";
};

const TopMenu: React.FunctionComponent = (props: Props) => {
  const { className = "" } = props;
  const { isUserAuth } = useAppSelector((state) => state.user);

  const { theme, setTheme } = useThemeContext();

  return (
    <>
      <div
        className={classNames(className, styles.topMenu, {
          [`${styles.topMenu}-light`]: theme === "light",
          [`${styles.topMenu}-dark`]: theme === "dark",
        })}
      >
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
        <div>
          <Toggle
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}
            value={theme === themes.light}
          />
        </div>
      </div>
    </>
  );
};
export default TopMenu;
