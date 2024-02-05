import React from 'react';
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAuthIsLoading,
  selectAuthUserData,
} from 'redux-state/auth/authSelectors';
import { apiLogoutUser } from 'redux-state/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const userName = userData?.name ?? "Couldn't get user name";
  console.log(userName);
  const handleLogoutUser = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <div className={css.userMenu}>
      <p>{userName}</p>
      <button onClick={handleLogoutUser} disabled={isLoading} type="button">
        Logout
      </button>
    </div>
  );
};
