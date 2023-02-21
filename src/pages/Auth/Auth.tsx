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

import "./Auth.scss";

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
    <div className="authorization" style={{ height: window.innerHeight - 50 }}>
      <div className="Row">
        <div className="Col">
          <div
            className="Card authorization__card p-5"
            style={{ width: 640, height: 200 }}
          >
            <h2 className="m-auto">
              {isLogin ? "Авторизация" : "Регистрация"}
            </h2>
            <form className="form d-flex flex-column">
              {/* TODO сделать для каждой страницы папку и там scss file */}
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

Auth.displayName = "Auth";

export default Auth;
