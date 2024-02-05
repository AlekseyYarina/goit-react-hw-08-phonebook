import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestLoginUser,
  requestRegisterUser,
  requestapiLogoutUser,
  requestapiRefreshUser,
} from 'servises/api';

export const apiRegisterUser = createAsyncThunk(
  'auth/apiRegisterUser',
  async (formData, thunkApi) => {
    try {
      await requestRegisterUser(formData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  'auth/apiLoginUser',
  async (formData, thunkApi) => {
    try {
      return await requestLoginUser(formData);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
  'auth/apiLogoutUser',
  async (_, thunkApi) => {
    try {
      await requestapiLogoutUser();
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  'auth/apiRefreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue('No have token');
    try {
      await requestapiRefreshUser(token);
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
