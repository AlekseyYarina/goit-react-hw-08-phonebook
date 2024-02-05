import { useDispatch, useSelector } from 'react-redux';
import { Box, Input, Text } from '@chakra-ui/react';
import { setFilter } from 'redux-state/contacts/contactsSlice';
import { selectFilter } from 'redux-state/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = e => {
    const value = e.target.value;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <Box p="4" bg="gray.100" borderRadius="md" boxShadow="md" mb="4">
      <Text fontSize="md" mb="2">
        Find contact by name:
      </Text>
      <Input
        value={filter}
        onChange={handleChangeFilter}
        type="text"
        name="keyword"
        placeholder="Ivan..."
        bg="white"
        borderColor="gray.300"
        borderRadius="md"
      />
    </Box>
  );
};
