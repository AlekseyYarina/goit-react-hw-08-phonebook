import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { apiAddContact, apiDeleteContact, apiGetContacts } from './operations';

// const initialState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   filter: '',
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(apiGetContacts.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.items = action.payload;
//       })
//       .addCase(apiDeleteContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         const contactId = action.payload;
//         state.contacts.items = state.contacts.items.filter(
//           contact => contact.id !== contactId
//         );
//       })
//       .addCase(apiAddContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         const newContact = action.payload;
//         state.contacts.items = [...state.contacts.items, newContact];
//       })
//       .addMatcher(
//         isAnyOf(
//           apiGetContacts.pending,
//           apiDeleteContact.pending,
//           apiAddContact.pending
//         ),
//         state => {
//           state.contacts.isLoading = true;
//           state.contacts.error = null;
//         }
//       )
//       .addMatcher(
//         isAnyOf(
//           apiGetContacts.rejected,
//           apiDeleteContact.rejected,
//           apiAddContact.rejected
//         ),
//         (state, action) => {
//           state.contacts.isLoading = false;
//           state.contacts.error = action.payload;
//         }
//       );
//   },
// });

// export const { addContact, removeContact, setFilter } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const contactId = action.payload;
        state.items = state.items.filter(contact => contact.id !== contactId);
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const newContact = action.payload;
        state.items = [...state.items, newContact];
      })
      .addMatcher(
        isAnyOf(
          apiGetContacts.pending,
          apiDeleteContact.pending,
          apiAddContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetContacts.rejected,
          apiDeleteContact.rejected,
          apiAddContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
