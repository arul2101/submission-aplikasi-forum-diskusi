import React from 'react';
import useInput from './../hooks/useInput';
import { useDispatch } from 'react-redux';
import { asyncAddThreadComment } from '../states/threadComments/action';
import PropTypes from 'prop-types';

export default function ThreadCommentInput({ threadId }) {
  const [content, onContentChange] = useInput('');
  const dispatch = useDispatch();

  const handleComment = () => {
    if (content.trim() === '') return;
    dispatch(asyncAddThreadComment({ threadId, content }));
  };

  return (
    <div className='mt-4'>
      <textarea
        placeholder='Apa yang mau kamu komentari?'
        className='shadow-sm w-full h-[150px] p-4 resize-none focus:outline-none border border-yellow-400 rounded-lg'
        value={content}
        onChange={onContentChange}
      />

      <button
        type='button'
        onClick={handleComment}
        className='w-full bg-yellow-400 text-white py-2 rounded-md mt-2 hover:bg-yellow-500 cursor-pointer'>Kirim</button>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  threadId: PropTypes.string.isRequired,
};
