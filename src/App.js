import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Spinner from 'components/Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import AppBar from "Components/AppBar/AppBar";
import authOperations from 'redux/auth/auth-operations'
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

const dispatch = useDispatch();

useEffect(() => {
  dispatch(authOperations.fetchCurrentUser());
}, [dispatch]);

export default function App() {

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
