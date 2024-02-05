import React from 'react';
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { apiLogoutUser } from 'redux-state/auth/authSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogoutUser = () => {
    dispatch(apiLogoutUser());
  };
  return (
    <div className={css.userMenu}>
      <p>mango@mail.com</p>
      <button onClick={handleLogoutUser} type="button">
        Logout
      </button>
    </div>
  );
};
