import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ThreadCommentItem from './ThreadCommentItem';
import { useDispatch, useSelector } from 'react-redux';
import { receiveThreadCommentsActionCreator } from './../states/threadComments/action';

export default function ThreadCommentList({ comments }) {
  const {
    threadComments = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveThreadCommentsActionCreator(comments));
  }, [dispatch, comments]);

  return (
    <div className='mt-4'>
      <h2 className='font-bold'>Komentar ({threadComments.length})</h2>

      <div>
        {threadComments.map((comment) => <ThreadCommentItem key={comment.id} comment={comment} />)}
      </div>
    </div>
  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};
