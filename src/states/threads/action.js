import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { createThread } from '../../services/api';

export const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
};

export function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    }
  };
}

export function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    }
  };
}

export function asyncAddThread({ title, body }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await createThread({ title, body });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

