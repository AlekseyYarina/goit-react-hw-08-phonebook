import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Container,
} from '@chakra-ui/react';
import { apiLoginUser } from 'redux-state/auth/authOperations';

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
    <Container maxW="400px" mt="15" mb="20">
      <Box p="6" boxShadow="lg" rounded="md" bg="white">
        <form onSubmit={onSubmit}>
          <FormControl mb="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="userEmail"
              placeholder="Ivan777@example.com"
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="userPassword"
              placeholder="********"
              minLength={8}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
