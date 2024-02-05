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
import { apiRegisterUser } from 'redux-state/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = {
      name,
      email,
      password,
    };
    dispatch(apiRegisterUser(formData));
  };
  return (
    <Container maxW="400px" mt="15" mb="20">
      <Box p="6" boxShadow="lg" rounded="md" bg="white">
        <form onSubmit={onSubmit}>
          <FormControl mb="4">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="userName" placeholder="Ivan" required />
          </FormControl>
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
              minLength={4}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
