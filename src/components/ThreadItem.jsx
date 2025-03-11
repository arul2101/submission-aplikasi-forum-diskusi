import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { postedAt } from '../../utils';
import { FaRegComment } from 'react-icons/fa6';

export default function ThreadItem({ thread }) {
  const { id, user: { name, avatar }, title, body, createdAt, totalComments } = thread;
  return (
    <NavLink
      to={`/threads/${id}`}
      className='block border-b border-slate-400 cursor-pointer hover:bg-slate-200 p-4'
      key={id}
    >
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
        <h2 className='text-[1.2rem] font-bold'>{title}</h2>
        <div>{body.slice(0, 90).replace('<div>', '').replace('</div>', '')}...</div>

        <div className='mt-4 flex gap-2 items-center'>
          <FaRegComment />
          <span>({totalComments}) komentar</span>
        </div>
      </div>
    </NavLink>
  );
}

const threadShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  thread: PropTypes.shape(threadShape).isRequired,
};




