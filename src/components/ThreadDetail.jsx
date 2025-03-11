import PropTypes from 'prop-types';
import React from 'react';
import { postedAt } from '../../utils';

export default function ThreadDetail({ thread }) {
  const { owner: { name, avatar }, title, body, createdAt } = thread;
  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2 mb-4'>
          <img src={avatar} className='size-10 rounded-full' />
          <div>
            <h2 className='font-bold text-[1.2rem]'>{name}</h2>
          </div>
        </div>

        <p className='font-bold text-slate-400'>{postedAt(createdAt)}</p>
      </div>

      <h2 className='font-bold text-[1.2rem] mb-5'>{title}</h2>

      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </div>
  );
}

const threadDetailShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  thread: PropTypes.shape(threadDetailShape).isRequired,
};
