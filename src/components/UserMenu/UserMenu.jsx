import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAuthIsLoading,
  selectAuthUserData,
} from 'redux-state/auth/authSelectors';
import { apiLogoutUser } from 'redux-state/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const userName = userData?.name ?? "Couldn't get user name";
  const handleLogoutUser = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <Box className="user-menu" display="flex" alignItems="center">
      <Text marginRight="4">{userName}</Text>
      <Button onClick={handleLogoutUser} isLoading={isLoading} type="button">
        Logout
      </Button>
    </Box>
  );
};
