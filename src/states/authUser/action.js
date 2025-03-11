import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getOwnProfile, login, putAccessToken } from './../../services/api';


export const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

export function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

export function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

export function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await login({ email, password });
      putAccessToken(token);

      const authUser = await getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(showLoading());

    dispatch(unsetAuthUserActionCreator());
    putAccessToken('');

    dispatch(hideLoading());
  };
}