import React, { useState, ChangeEvent } from "react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

// import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import {
  // LOGIN_ROUTE,
  // REGISTRATION_ROUTE,
  // SHOP_ROUTE,
  routePath,
} from "app/routes/routePaths";

import { useAppDispatch, useAppSelector } from "app/hooks/hooks";
import { login, registration } from "features/user/userActionCreator";

import FormikInputField from "shared/FormikInputField";
import FormikControls from "shared/FormikControl/FormikControl";
import FormikContainer from "shared/FormikContainer/FormikContainer";

import { LoginForm } from "widgets/login-form";
import { RegistrationForm } from "widgets/registration-form";
import styles from "./Registration.module.scss";

const Registration: React.FunctionComponent = () => {
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

  const click = async () => {
    try {
      if (isLogin) {
        dispatch(login(email, password));
        console.log(user);
      } else {
        dispatch(registration({ email, password, role }));
      }
      navigate(routePath.SHOP_ROUTE);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className={styles.registration}
      // style={{ height: window.innerHeight - 50 }}
    >
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.card}>
            {/* <FormikControls
              name={"test name"}
              fieldType="input"
              typeInput={"text"}
            /> */}
            <h2 className={styles.title}>
              {"Регистрация нового пользователя"}
            </h2>
            <FormikContainer />
            <hr />
            <LoginForm />
            <hr />
            <RegistrationForm />
            <hr />

            <form className="form d-flex flex-column">
              <input
                className="mt-3"
                placeholder="Введите e-mail..."
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <input
                className="mt-3"
                placeholder="Введите пароль..."
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
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
                <button
                  className="mt-3 align-self-end"
                  // variant="outline-success"
                  onClick={click}
                >
                  {isLogin ? "Войти" : "Регистрация"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Registration.displayName = "Registration";

export default Registration;
