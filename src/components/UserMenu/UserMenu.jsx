import React from 'react';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.userMenu}>
      <p>mango@mail.com</p>
      <button>Logout</button>
    </div>
  );
};
