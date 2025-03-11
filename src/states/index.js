import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadCommentsReducer from './threadComments/reducer';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    isPreload: isPreloadReducer,
    authUser: authUserReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    threadComments: threadCommentsReducer,
    loadingBar: loadingBarReducer,
  }
});