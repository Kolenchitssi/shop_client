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
      dispatch(login(email, password));
      console.log(user);
      navigate(routePath.SHOP_ROUTE);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="authorization" style={{ height: window.innerHeight - 50 }}>
      {!isUserLoading && (
        <div className="Row">
          <div className="Col">
            <div
              className="authorization__card"
              style={{ width: 640, height: 200 }}
            >
              <h2 className="m-auto">Авторизация</h2>

              <form className="form d-flex flex-column">
                {/* TODO сделать для каждой страницы папку и там scss file */}
                <input
                  className=""
                  placeholder="Введите e-mail..."
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
                <input
                  className=""
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
                      Нет аккаунта?
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
                    className=""
                    // variant="outline-success"
                    onClick={click}
                  >
                    "Войти"
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Auth.displayName = "Auth";

export default Auth;
