import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <nav className={s.nav}>
    <NavLink to="/register" className={s.link} activeClassName={s.activeLink} exact>
      Register
    </NavLink>

    <NavLink to="/login" className={s.link} activeClassName={s.activeLink} >
      login
    </NavLink>
  </nav>
);

export default AuthNav;