import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { IoMdExit } from 'react-icons/io';

export default function Navbar() {
  return (
    <header className='max-w-[780px] mx-auto p-4'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <NavLink to="/" className='flex justify-center items-center rounded-full text-white size-10 bg-yellow-400 hover:bg-yellow-500'>
            <FiHome size={24} />
          </NavLink>
          <div className='flex items-center gap-2'>
            <img src='https://ui-avatars.com/api/?name=Fauzan%20Fathurrahman&background=random' className='size-12 rounded-full' />
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <button className='flex justify-center items-center gap-2 cursor-pointer p-2 rounded-md'>
            <span className='flex size-10 justify-center items-center bg-red-600 hover:bg-red-700 text-white rounded-full'>
              <IoMdExit size={24} />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
