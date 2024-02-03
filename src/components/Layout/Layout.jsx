import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
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
      </header>
      <main className={css.container}>{children}</main>
    </div>
  );
};
