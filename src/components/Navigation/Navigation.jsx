// import { NavLink } from 'react-router-dom';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Flex, Link, Button } from '@chakra-ui/react';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux-state/auth/authSelectors';

export const Navigation = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  const getLinkStyles = isActive => ({
    mx: '2',
    p: '2',
    className: `${css.navlink} ${isActive ? css.active : ''}`,
  });
  return (
    <Flex>
      <Link
        as={RouterLink}
        to="/"
        {...getLinkStyles(location.pathname === '/')}
      >
        <Button size="md">Home</Button>
      </Link>
      {isLoggedIn ? (
        <Link
          as={RouterLink}
          to="/contacts"
          {...getLinkStyles(location.pathname === '/contacts')}
        >
          <Button size="md">Contacts</Button>
        </Link>
      ) : (
        <>
          <Link
            as={RouterLink}
            to="/register"
            {...getLinkStyles(location.pathname === '/register')}
          >
            <Button size="md">Register</Button>
          </Link>
          <Link
            as={RouterLink}
            to="/login"
            {...getLinkStyles(location.pathname === '/login')}
          >
            <Button size="md">Login</Button>
          </Link>
        </>
      )}
    </Flex>
  );
};
