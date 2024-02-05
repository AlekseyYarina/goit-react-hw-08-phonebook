import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux-state/contacts/selectors';
import { Box, Button, Input, FormLabel, FormControl } from '@chakra-ui/react';
import css from './ContactForm.module.css';
import { apiAddContact } from 'redux-state/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.phone.value;
    const formData = {
      name,
      number,
    };
    const hasDuplicates = contacts.some(
      contact => contact.name === formData.name
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contact.`);
      return;
    }
    try {
      dispatch(apiAddContact(formData));
    } catch (error) {
      console.error('Error adding contact:', error);
    }
    if (e.currentTarget) {
      e.currentTarget.reset();
    }
  };

  return (
    <Box
      as="form"
      className={css.form}
      onSubmit={handleFormSubmit}
      maxWidth="400px"
      width="100%"
      margin="auto"
      mt={10}
    >
      <FormControl>
        <FormLabel mb={0}>
          <span>Name</span>
        </FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Ivan Ivanov"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          isRequired
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel mb={0}>
          <span>Phone number</span>
        </FormLabel>
        <Input
          type="tel"
          name="phone"
          placeholder="+38(011)111-11-11"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          isRequired
        />
      </FormControl>
      <Button mt={2} mb={50} type="submit" colorScheme="teal">
        Add contact
      </Button>
    </Box>
  );
};
