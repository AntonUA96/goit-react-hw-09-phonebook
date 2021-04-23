import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import user from './user/reducer';


const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user,
  },

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
