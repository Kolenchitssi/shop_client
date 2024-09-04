import React, { useState, ChangeEvent } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { ReactComponent as EnterIcon } from "assets/icons/status+pulled.svg";

import {
  // LOGIN_ROUTE,
  // REGISTRATION_ROUTE,
  // SHOP_ROUTE,
  routePath,
} from "app/routes/routePaths";

import { useAppDispatch, useAppSelector } from "app/hooks/hooks";
import { login, registration } from "features/user/userActionCreator";

import styles from "./Auth.module.scss";

const BootstrapButton = styled(Button)({
  boxShadow: "1px 1px 6px 2px rgba(0,128,0,0.3)",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  borderRadius: "50% 0",
  lineHeight: 1.2,
  backgroundColor: "#00bf44",
  borderColor: "#00cc22",
  minWidth: 120,
  fontFamily: [
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#2b4",
    borderColor: "#4a4",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Auth: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { user, isUserAuth, isUserLoading } = useAppSelector(
    (state) => state.user
  );
  const location = useLocation();
  const navigate = useNavigate();
  /*   console.log(location);
  {
  hash:"",
  key: "default",
  pathname:"/login",
  search:"",
  state: null,
} */

  const isLogin = location.pathname === routePath.LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //todo role = ADMIN
  const [role, setRole] = useState("ADMIN");

  //! why async?
  const click = async () => {
    try {
      dispatch(login({email, password}));
      console.log(user);
      navigate(routePath.SHOP_ROUTE);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className={styles.authorization}>
      {!isUserLoading && (
        <div className={styles["authorization__card"]}>
          <h1 className={styles.title}>Авторизация</h1>

          <form className={styles.form}>
            <div className={styles.row}>
              <label htmlFor="auth_e-mail" className={styles.label}>
                E-mail:
              </label>
              <input
                id="auth_e-mail"
                className=""
                placeholder="Введите e-mail..."
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="auth_e-mail" className={styles.label}>
                Password:
              </label>
              <input
                className=""
                placeholder="Введите пароль..."
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {isLogin ? (
                <div>
                  Нет аккаунта?{" "}
                  <NavLink to={routePath.REGISTRATION_ROUTE}>
                    Регистрация
                  </NavLink>
                </div>
              ) : (
                <div>
                  Есть аккаунт?
                  <NavLink to={routePath.LOGIN_ROUTE}>Войти</NavLink>
                </div>
              )}

              <Button
                className={styles.button}
                size="small"
                variant="contained"
                color="success"
                onClick={click}
              >
                Вход
              </Button>

              <ColorButton
                className={styles.button_customize}
                size="small"
                variant="contained"
                startIcon={<EnterIcon />}
                endIcon={<EnterIcon />}
              >
                Custom CSS Enter
              </ColorButton>

              <BootstrapButton
                className={styles.button}
                size="small"
                variant="contained"
                disableRipple
              >
                Enter
              </BootstrapButton>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

Auth.displayName = "Auth";

export default Auth;
