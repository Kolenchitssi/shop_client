import React, { useEffect, useState } from "react";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
// import { check } from "./http/userApi";

import { Counter } from "../features/counter/Counter";
import {
  setUser,
  setIsAuth,
  setIsLoading,
  userSliceActions,
} from "../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { LeftMenu } from "widgets/left-menu";
import { NavBar } from "widgets/nav-bar";

import { TopMenu } from "widgets/top-menu";
import ThemeProvider from "./styles/themes/themeProvider";

import "./App.scss";
import Loader from "shared/ui/basic/Loader";

function App() {
  const dispatch = useAppDispatch();
  //*** здесь мы забираем весь объект user={user, isUserAuth, isUserLoading}
  const { user, isUserAuth, isUserLoading } = useAppSelector(
    (state) => state.user
  );
  // говорят что лучще чтобы не вызывать перерендер вот так:
  const user2 = useAppSelector((state) => state.user.user);
  // тоесть если нам нужен только user а остальные 2 допустим не используем в этом компоненте то если они изменятся то так как мы забираем весь объект при деструктуризаци как выше с *** с ними  то мы получим ненужное обновление компонента
  const isUserAuth2 = useAppSelector((state) => state.user.isUserAuth);
  const isUserLoading2 = useAppSelector((state) => state.user.isUserLoading);

  // <-- но так длиннее если много компонентов, если нам нужны они все то 1 вариант пойдет

  console.log(isUserLoading, "isUserLoading");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // check()
    //   .then((data) => {
    //     dispatch(setIsAuth(true));
    //     dispatch(setUser({ is: true }));
    //     // user.setUser(true); //! почему тут не объект
    //   })
    //   .finally(() => setLoading(false));
    //! temp exaple когда экшены в 1 объекте
    dispatch(
      userSliceActions.setUser({
        email: "string",
        name: "string",
        userId: 1,
        role: "Admin",
      })
    );
  }, [dispatch]);

  if (isUserLoading) {
    return (
      <div>
        Loading ...
        <Loader />
      </div>
    );
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
