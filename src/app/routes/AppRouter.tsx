import { useAppSelector } from "app/hooks/hooks";
import React, { FC, Suspense, useContext } from "react";
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
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<span>Loading2 component...</span>}>
                <Element />
              </Suspense>
            }
          />
        ))}
      {publicRoutes.map(({ path, Element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<span>Loading3 component...</span>}>
              <Element />
            </Suspense>
          }
        />
      ))}
      {/* редирект при неправильном адресе  */}
      <Route path="*" element={<Navigate to={routePath.SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
