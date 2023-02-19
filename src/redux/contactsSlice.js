import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const staticName = 'contacts';

const contactsInitialState = { value: [] };

const contactsSlice = createSlice({
  name: staticName,
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.value.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: { ...contact, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.value.findIndex(
        contact => contact.id === action.payload
      );
      state.value.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(
  { key: staticName, storage },
  contactsReducer
);
