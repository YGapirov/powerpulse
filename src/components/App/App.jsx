import { GlobalStyle } from '../../GlobalStyle';

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
// import { refreshUser } from '../../redux/auth/operations';
import { Layout } from '../Layout/Layout';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import { LoadingMessage } from './App.styled';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/SignUp/SignUp'));
const LoginPage = lazy(() => import('../../pages/SignIn/SignIn'));
const ProfilePage = lazy(() => import('../../pages/Profile/ProfilePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return isRefreshing ? (
    <LoadingMessage>Refreshing...</LoadingMessage>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/profile" component={<ProfilePage />} />
            }
          />
          {/* <Route
            path="/*" // Обробник для невідомих маршрутів (може бути ваша 404 сторінка)
            element={<NotFoundPage />}
          /> */}
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
