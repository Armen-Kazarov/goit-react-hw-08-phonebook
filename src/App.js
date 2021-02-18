import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Spinner from './Components/Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import AppBar from "Components/AppBar/AppBar";
import authOperations from 'redux/auth/auth-operations';
import PrivateRoute from 'Components/PrivateRoute';
import PublicRoute from 'Components/PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';
import './App.css';

const HomeView =  lazy(() =>
    import(
      'views/HomeView/HomeView' /* webpackChunkName: "HomeView"*/
      ),
);

const ContactsView =  lazy(() =>
  import(
    'views/ContactsView/ContactsView' /* webpackChunkName: "ContactsView"*/
    ),
);

const LoginView =  lazy(() =>
  import(
    'views/LoginView/LoginView' /* webpackChunkName: "LoginView"*/
    ),
);

const RegisterView =  lazy(() =>
  import(
    'views/RegisterView/RegisterView' /* webpackChunkName: "RegisterView"*/
    ),
);

export default function App() {

  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
        <>
          <AppBar />
            <Suspense fallback={<Spinner />}>
              <Switch>
                <PublicRoute path="/" exact>
                  <HomeView />
                </PublicRoute>
                <PublicRoute exact path="/register" restricted>
                  <RegisterView />
                </PublicRoute>
                <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                  <LoginView />
                </PublicRoute>
                <PrivateRoute path="/contacts" redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
              </Switch>
          </Suspense>
        </>
  );
}