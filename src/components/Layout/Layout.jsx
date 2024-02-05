import { ContactUs, Navigation, UserMenu } from 'components';
import { Box, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux-state/auth/authSelectors';

export const Layout = ({ children }) => {
  const isLogged = useSelector(selectAuthIsLoggedIn);
  return (
    <Box minH="100vh" color="black">
      <Flex direction="column" minH="100vh" justifyContent="space-between">
        <header bg="white" p="4" spacing="4" align="center">
          <Flex direction="row" justifyContent="space-between">
            <Navigation />
            {isLogged && <UserMenu />}
          </Flex>
        </header>
        <main flex="1" p="4">
          {children}
        </main>
        <footer bg="gray.200" p="4">
          <ContactUs />
        </footer>
      </Flex>
    </Box>
  );
};
