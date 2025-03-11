import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { IoMdExit } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from './../states/authUser/action';
import PropTypes from 'prop-types';

export default function Navbar({ authUser }) {
  const { name, avatar } = authUser;
  const dispatch = useDispatch();


  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <header className='max-w-[780px] mx-auto p-4'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <NavLink to="/" className='flex justify-center items-center rounded-full text-white size-10 bg-yellow-400 hover:bg-yellow-500'>
            <FiHome size={24} />
          </NavLink>
          <div className='flex items-center gap-2'>
            <img src={avatar} className='size-10 rounded-full' />
            <p className='font-bold'>{name}</p>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <h2 className='text-yellow-400 text-[1.5rem] font-bold'>ForkSi!</h2>

          <button className='flex justify-center items-center gap-2 cursor-pointer p-2 rounded-md'>
            <span
              className='flex size-10 justify-center items-center bg-red-600 hover:bg-red-700 text-white rounded-full'
              onClick={onSignOut}
            >
              <IoMdExit size={24} />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
};
