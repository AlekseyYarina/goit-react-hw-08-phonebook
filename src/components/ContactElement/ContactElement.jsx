import { useDispatch } from 'react-redux';
import { Button, List, ListItem, Text } from '@chakra-ui/react';

import css from './ContactElement.module.css';
import { apiDeleteContact } from 'redux-state/contacts/operations';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = async () => {
    try {
      await dispatch(apiDeleteContact(id)).unwrap();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <List>
      <ListItem
        className={css.contactElement}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="3"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        marginBottom="3"
        bg="cyan.100"
        color="black"
      >
        <Text fontWeight="bold" fontSize="md" marginRight="2">
          {name}:
        </Text>
        <Text flex="1" fontSize="md">
          {number}
        </Text>
        <Button colorScheme="teal" size="sm" onClick={handleDeleteContact}>
          Delete
        </Button>
      </ListItem>
    </List>
  );
};
