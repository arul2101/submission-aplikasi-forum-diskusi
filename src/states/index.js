import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import usersReducer from './users/reducer';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    loadingBar: loadingBarReducer
  }
});