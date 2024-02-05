import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from 'redux-state/auth/authOperations';
// import { apiLoginUser } from 'redux-state/auth/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = {
      email,
      password,
    };
    dispatch(apiLoginUser(formData));
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="userEmail"
            placeholder="Ivan777@example.com"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="userPassword"
            placeholder="********"
            minLength={8}
            required
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
