import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export const ErrorMessage = ({ error }) => {
  return (
    <Box
      p="4"
      bg="red.200"
      color="red.800"
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
    >
      <Heading as="h4" fontSize="xl" mb="2">
        Oops...
      </Heading>
      <Text>{error}</Text>
    </Box>
  );
};
