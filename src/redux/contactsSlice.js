import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const isDuplicateName = state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isDuplicateName) {
          alert('This name is already in contacts!');
        return;
      }

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      state.contacts.push(newContact);
    },
    deleteContact: (state, action) => {
      const idToDelete = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== idToDelete
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;
