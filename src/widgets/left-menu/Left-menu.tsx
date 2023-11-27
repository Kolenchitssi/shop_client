import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

import { useAppSelector } from "app/hooks/hooks";
import { useNavigate } from "react-router-dom";

import classNames from "clsx";

import { routePath } from "app/routes/routePaths";
import { ButtonLink } from "shared/ui/basic/ButtonLink";

import styles from "./left-menu.module.scss";

type Props = {
  className?: string;
  theme?: "light" | "dark";
};

const LeftMenu: React.FunctionComponent = (props: Props) => {
  const { className = "", theme = "light" } = props;
  const navigate = useNavigate();

  const { user, isUserAuth, isUserLoading } = useAppSelector(
    (state) => state.user
  );

  return (
    <>
      <div
        className={classNames(className, styles.leftMenu, {
          [`${styles.leftMenu}-light`]: theme === "light",
          [`${styles.leftMenu}-dark`]: theme === "dark",
        })}
      >
        <div className={styles.menuWrapper}>
          <NavLink to={routePath.SHOP_ROUTE}>Shop {String(isUserAuth)}</NavLink>
          {/* /Can may use <NavLink to={SHOP_ROUTE}>Home</NavLink> */}
          {!isUserAuth ? (
            <div>
              <ButtonLink className={styles.rowLink} to={routePath.SHOP_ROUTE}>
                Домой
              </ButtonLink>
              <ButtonLink
                className={styles.rowLink}
                onClick={() => navigate(routePath.ADMIN_ROUTE)}
              >
                Админ. Панель
              </ButtonLink>
              <ButtonLink
                className={styles.rowLink}
                onClick={() => {
                  // navigate(routePath.LOGIN_ROUTE);
                  // logOut();
                  //todo logOut
                }}
              >
                Выйти
              </ButtonLink>
            </div>
          ) : (
            <div>
              <Button
                className={styles.rowLink}
                variant="outlined"
                size="small"
                onClick={() => navigate(routePath.LOGIN_ROUTE)}
              >
                Авторизация
              </Button>
              <div className={styles.rowLink}>3www</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default LeftMenu;
