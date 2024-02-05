import { ContactUs, Navigation, UserMenu } from 'components';
import css from './Layout.module.css';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux-state/auth/authSelectors';

export const Layout = ({ children }) => {
  const isLogged = useSelector(selectAuthIsLoggedIn);
  return (
    <div className={css.container}>
      <header>
        <Navigation />
        {isLogged && <UserMenu />}
      </header>
      <main>{children}</main>
      <footer>
        <ContactUs />
      </footer>
    </div>
  );
};
