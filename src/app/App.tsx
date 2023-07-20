import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
// import { check } from "./http/userApi";

import { Counter } from "../features/counter/Counter";
import { setUser, setIsAuth, setIsLoading } from "../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { LeftMenu } from "widgets/left-menu";
import {NavBar} from "widgets/nav-bar";

import { TopMenu } from "widgets/top-menu";
import ThemeProvider from "./styles/themes/themeProvider";

import "./App.scss";

function App() {
  const dispatch = useAppDispatch();
  const { user, isUserAuth, isUserLoading } = useAppSelector(
    (state) => state.user
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // check()
    //   .then((data) => {
    //     dispatch(setIsAuth(true));
    //     dispatch(setUser({ is: true }));
    //     // user.setUser(true); //! почему тут не объект
    //   })
    //   .finally(() => setLoading(false));
  }, []);
  if (isUserLoading) {
    return <div> Loading ...</div>;
  }
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="app__wrapper">
          <Header />
          <TopMenu />
          <NavBar />
          <div className="main">
            <LeftMenu />
            <AppRouter />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

