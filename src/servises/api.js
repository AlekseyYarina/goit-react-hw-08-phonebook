import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const requestRegisterUser = async formData => {
  try {
    const { data } = await instance.post('/users/signup', formData);
    setAuthToken(data.token);
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const requestLoginUser = async formData => {
  try {
    const { data } = await instance.post('/users/login', formData);
    setAuthToken(data.token);
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const requestapiLogoutUser = async () => {
  try {
    await instance.post('/users/logout');
    clearAuthToken();
    return;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const requestapiRefreshUser = async token => {
  try {
    setAuthToken(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const requestContacts = async token => {
  try {
    setAuthToken(token);
    const { data } = await instance.get('/contacts');
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const requestDeleteContact = async (token, contactId) => {
  setAuthToken(token);
  try {
    await instance.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    console.error('Error delete contact:', error);
    throw error;
  }
};

export const requestAddContact = async (token, formData) => {
  setAuthToken(token);
  try {
    const { data } = await instance.post('/contacts', formData);
    return data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};
