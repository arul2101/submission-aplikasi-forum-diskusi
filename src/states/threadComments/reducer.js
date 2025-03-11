import { ActionType } from './action';

export default function threadCommentsReducer(comments = [], action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_THREAD_COMMENTS:
    return action.payload.comments;
  case ActionType.ADD_THREAD_COMMENT:
    return [action.payload.comment, ...comments];
  default:
    return comments;
  }
}