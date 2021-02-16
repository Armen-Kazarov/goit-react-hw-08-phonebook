import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <nav className={s.navigationBar}>
    <NavLink to="/register" className={s.link} activeClassName={s.activeLink} exact>
      Register
    </NavLink>
    <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
      login
    </NavLink>
  </nav>
);

export default AuthNav;