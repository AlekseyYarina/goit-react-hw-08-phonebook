import { ContactUs, Navigation, UserMenu } from 'components';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <header>
        <Navigation />
        <UserMenu />
      </header>
      <main>{children}</main>
      <footer>
        <ContactUs />
      </footer>
    </div>
  );
};
