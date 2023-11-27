import { lazy } from "react";

import { routePath } from "./routePaths";

// import Admin from "pages/Admin";
// import Basket from "pages/Basket";
// import Shop from "pages/Shop";
// import Auth from "pages/Auth";
// import Registration from "pages/Registration";
// import DevicePage from "pages/DevicePage";
// import ErrorPage from "pages/ErrorPage";

//c Lazy крашилось приложение как будто еще не получен ответ сейчас вроде работате возможно что обновил npm
const Admin = lazy(() => import("pages/Admin"));
const Basket = lazy(() => import("pages/Basket"));
const Shop = lazy(() => import("pages/Shop"));
const Auth = lazy(() => import("pages/Auth"));
const Registration = lazy(() => import("pages/Registration"));
const DevicePage = lazy(() => import("pages/DevicePage"));
const ErrorPage = lazy(() => import("pages/ErrorPage"));

export interface IRoute {
  path: string;
  Element: React.ComponentType;
}

export const authRoutes = [
  {
    path: routePath.ADMIN_ROUTE,
    Element: Admin,
    // errorElement: ErrorPage,
  },
  {
    path: routePath.BASKET_ROUTE,
    Element: Basket,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: routePath.SHOP_ROUTE,
    Element: Shop,
  },
  {
    path: routePath.LOGIN_ROUTE,
    Element: Auth,
  },
  {
    path: routePath.REGISTRATION_ROUTE,
    Element: Registration,
  },
  {
    path: `${routePath.DEVICE_ROUTE}/:id`,
    Element: DevicePage,
  },
];
