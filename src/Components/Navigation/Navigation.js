import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className={s.navigationBar}>
    <NavLink to="/" className={s.link} activeClassName={s.activeLink} exact>
      Home
    </NavLink>
    <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;