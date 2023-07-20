import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
// import { SHOP_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE } from "../utils/constantsRoutes";
// import { observer } from "mobx-react-lite"; //для отслеживания и перерисовки компонента
import { useAppSelector } from "app/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { routePath } from "app/routes/routePaths";

// import { Context } from "../index";
// import "./navBar.css";
import { Button, Container, Input } from "@mui/material";
import styles from "./nav-bar.module.scss";

const NavBar = () => {
  const { user, isUserAuth, isUserLoading } = useAppSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  const logOut = () => {
    // user.setUser({});
    // user.setIsAuth(false);
  };
  return (
    <div>
      <div className={styles["nav-bar"]}>
        <a href={routePath.SHOP_ROUTE}>Shop {String(isUserAuth)}</a>
        <div>
          <Input />
          Найти
        </div>
        {isUserAuth ? (
          <div className="navigation">
            {/* <Nav.Link className="nav-bar_link" href={SHOP_ROUTE}>
              Домой{" "}
            </Nav.Link> */}

            <NavLink to={routePath.SHOP_ROUTE}>Home</NavLink>
            <Button
              className="nav-bar_link"
              onClick={() => navigate(routePath.ADMIN_ROUTE)}
            >
              Админ. панель
            </Button>

            <Button
              className="nav-bar_link"
              onClick={() => {
                // navigate(LOGIN_ROUTE);
                logOut();
              }}
            >
              Выйти
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={() => navigate(routePath.LOGIN_ROUTE)}>
              Авторизация
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
