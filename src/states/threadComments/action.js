import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { createThreadComment } from '../../services/api';

export const ActionType = {
  RECEIVE_THREAD_COMMENTS: 'RECEIVE_THREAD_COMMENTS',
  ADD_THREAD_COMMENT: 'ADD_THREAD_COMMENT',
};

export function receiveThreadCommentsActionCreator(comments) {
  return {
    type: ActionType.RECEIVE_THREAD_COMMENTS,
    payload: {
      comments,
    }
  };
}

export function addThreadCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_THREAD_COMMENT,
    payload: {
      comment,
    }
  };
}

export function asyncAddThreadComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await createThreadComment({ threadId, content });

      dispatch(addThreadCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}