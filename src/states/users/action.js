import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { register } from './../../services/api';

export const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

export function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    }
  };
}

export function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}