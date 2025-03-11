import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getAllThreads, getAllUsers } from '../../services/api';
import { receiveUsersActionCreator } from './../users/action';
import { receiveThreadsActionCreator } from './../threads/action';


export function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await getAllUsers();
      const threads = await getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}