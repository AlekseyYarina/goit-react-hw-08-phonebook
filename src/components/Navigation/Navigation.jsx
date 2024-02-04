import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux-state/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
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
      {isLoggedIn ? (
        <>
          <NavLink
            className={({ isActive }) =>
              `${css.navlink} ${isActive ? css.active : ''}`
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </>
      ) : (
        <>
          {' '}
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
        </>
      )}
    </div>
  );
};
