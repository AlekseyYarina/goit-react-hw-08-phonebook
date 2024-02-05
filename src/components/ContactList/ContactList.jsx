import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactElement, ErrorMessage, Loader } from 'components';
import { Box, UnorderedList, ListItem } from '@chakra-ui/react';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux-state/contacts/selectors';
import { apiGetContacts } from 'redux-state/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const filterValue = filter || '';
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.trim().toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Box p="4" mb="50">
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {!error && (
        <UnorderedList listStyleType="none">
          {filteredContacts.map(contact => (
            <ListItem key={contact.id} mb="3">
              <ContactElement
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};
