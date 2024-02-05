import React from 'react';
import { Heading, Text, Container } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Container maxW="800px" mt="20" mb="20">
      <Heading as="h1" size="xl" mb="4">
        Welcome to our website!
      </Heading>
      <Text fontSize="lg" color="gray.600" mb="4">
        We are glad to see you here. Our application offers convenient saving of
        contacts that will make your use enjoyable. Explore our sections, learn
        more about us and enjoy using our features.
      </Text>
      <Text fontSize="lg" color="gray.600">
        If you have any questions or feedback, feel free to reach out to us. We
        appreciate your presence and hope you enjoy using our website!
      </Text>
    </Container>
  );
};

export default HomePage;
