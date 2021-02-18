import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
      <nav >
        <NavLink to="/" className={s.link} activeClassName={s.activeLink} exact>
          Home
        </NavLink>

        {isLoggedIn && <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink} >
          Contacts
        </NavLink>}
      </nav>
    );
}

export default Navigation;