import PropTypes from 'prop-types';
import React from 'react';
import { postedAt } from '../../utils';

export default function ThreadCommentItem({ comment }) {
  const { owner: { name, avatar }, content, createdAt } = comment;

  return (
    <div className='border-b border-slate-400 p-4 mt-4'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <img src={avatar} className='size-10 rounded-full' />
          <div>
            <h2 className='font-bold text-[1.2rem]'>{name}</h2>
          </div>
        </div>

        <p className='text-slate-400 font-bold'>{postedAt(createdAt)}</p>
      </div>

      <div className='p-4'>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
};

ThreadCommentItem.propTypes = {
  comment: PropTypes.shape(commentShape).isRequired,
};
