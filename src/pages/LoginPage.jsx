import React from 'react';
import { NavLink } from 'react-router-dom';
// import IlustrationImage from './../../public/'
export default function LoginPage() {
  return (
    <section className='max-w-[1280px] mx-auto min-h-screen flex'>
      <div className='flex justify-center gap-40 items-center'>
        <div className='w-2/4'>
          <img src='./ilustration.jpg' className='w-full h-full' />
        </div>

        <div className='shadow-2xl rounded-md w-2/4 flex flex-col px-8 py-16 bg-white'>
          <h2 className='text-center mb-4 text-2xl'>Welcome to <span className='text-yellow-400'>ForkSi!</span></h2>

          <input type='text' placeholder='Enter your username...' className='h-[40px] w-full p-4 focus:outline-none shadow-sm rounded-md' />
          <input type='password' placeholder='Enter your password...' className='h-[40px] w-full p-4 focus:outline-none shadow-sm rounded-md mt-4' />

          <button type='submit' className='text-white bg-yellow-400 w-full h-[40px] mt-4 rounded-md cursor-pointer hover:bg-yellow-500'>Login</button>

          <p className='mt-4'>Dont have an account? <NavLink to="/register" className='text-yellow-400 underline'>Register</NavLink> here</p>
        </div>
      </div>
    </section>
  );
}
