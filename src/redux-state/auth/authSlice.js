// import axios from 'axios';
// import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  apiLoginUser,
  apiLogoutUser,
  apiRefreshUser,
  apiRegisterUser,
} from './authOperations';

// export const authInstance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

// const setToken = token => {
//   authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearToken = () => {
//   authInstance.defaults.headers.common.Authorization = '';
// };

// export const apiRegisterUser = createAsyncThunk(
//   'auth/apiRegisterUser',
//   async (formData, thunkApi) => {
//     try {
//       const { data } = await authInstance.post('/users/signup', formData);
//       setToken(data.token);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const apiLoginUser = createAsyncThunk(
//   'auth/apiLoginUser',
//   async (formData, thunkApi) => {
//     try {
//       const { data } = await authInstance.post('/users/login', formData);
//       setToken(data.token);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const apiLogoutUser = createAsyncThunk(
//   'auth/apiLogoutUser',
//   async (_, thunkApi) => {
//     try {
//       await authInstance.post('/users/logout');
//       clearToken();
//       return;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const apiRefreshUser = createAsyncThunk(
//   'auth/apiRefreshUser',
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const token = state.auth.token;
//     if (!token) return thunkApi.rejectWithValue('No have token');
//     try {
//       setToken(token);
//       const { data } = await authInstance.get('/users/current');
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

const initialState = {
  token: null,
  userData: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLogoutUser.fulfilled, () => {
        return initialState;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })

      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiRefreshUser.pending,
          apiLoginUser.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiRegisterUser.rejected,
          apiLoginUser.rejected,
          apiRefreshUser.rejected,
          apiLoginUser.pending
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
