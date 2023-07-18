import { useAppSelector } from "app/hooks/hooks";
import React, { FC, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import { useTypedSelector } from '../hooks/useTypeSelector';
import { routePath } from "./routePaths";
import { authRoutes, publicRoutes } from "./router";

interface IAppRouterProps {
  isAuthorized?: boolean;
}

const AppRouter: FC<IAppRouterProps> = ({ isAuthorized }) => {
  const { user, isUserAuth, isUserLoading } = useAppSelector(
    (state) => state.user
  );
  // todo добавить навигацию для Суперадмина он может изменять роли пользователей
  return (
    <Routes>
      {isUserAuth &&
        authRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
      {/* редирект при неправильном адресе  */}
      <Route path="*" element={<Navigate to={routePath.SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
