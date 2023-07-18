import { lazy } from "react";

import { routePath } from "./routePaths";

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
