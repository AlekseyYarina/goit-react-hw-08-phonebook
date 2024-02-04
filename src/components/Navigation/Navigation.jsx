import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          `${css.navlink} ${isActive ? css.active : ''}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.navlink} ${isActive ? css.active : ''}`
        }
        to="/contacts"
      >
        Contacts
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.navlink} ${isActive ? css.active : ''}`
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.navlink} ${isActive ? css.active : ''}`
        }
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};
