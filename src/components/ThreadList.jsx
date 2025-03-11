import React from 'react';
import ThreadItem from './ThreadItem';
import PropTypes from 'prop-types';

export default function ThreadList({ threadList }) {
  return (
    <div className='mt-8 space-y-4 py-8'>
      {threadList.map((thread) => (
        <ThreadItem key={thread.id} thread={thread} />
      ))}
    </div>
  );
}



ThreadList.propTypes = {
  threadList: PropTypes.array.isRequired,
};


