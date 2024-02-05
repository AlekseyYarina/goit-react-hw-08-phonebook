import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

export const ContactUs = () => {
  return (
    <Box p="4" bg="gray.200" margin="auto" textAlign="center">
      <Heading as="h4" fontSize="md" mb="3">
        Contact Us for Feedback
      </Heading>
      <Text>
        Email:
        <Link href="mailto:example@example.com" color="blue.500">
          example@example.com
        </Link>
      </Text>
      <Text>
        Phone:
        <Link href="tel:+123456789" color="blue.500">
          +123456789
        </Link>
      </Text>
    </Box>
  );
};
