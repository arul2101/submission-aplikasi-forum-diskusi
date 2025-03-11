import React from 'react';
import { NavLink } from 'react-router-dom';
import useInput from './../hooks/useInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

export default function LoginForm() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <form className='shadow-2xl rounded-md w-2/4 flex flex-col px-8 py-16 bg-white'>
      <h2 className='text-center mb-4 text-2xl'>Welcome to <span className='text-yellow-400'>ForkSi!</span></h2>

      <input type='email' value={email} onChange={onEmailChange} placeholder='Enter your email...' className='h-[40px] w-full p-4 focus:outline-none shadow-sm rounded-md' />
      <input type='password' value={password} onChange={onPasswordChange} placeholder='Enter your password...' className='h-[40px] w-full p-4 focus:outline-none shadow-sm rounded-md mt-4' />

      <button type='button' onClick={handleLogin} className='text-white bg-yellow-400 w-full h-[40px] mt-4 rounded-md cursor-pointer hover:bg-yellow-500'>Login</button>

      <p className='mt-4'>Dont have an account? <NavLink to="/register" className='text-yellow-400 underline'>Register</NavLink> here</p>
    </form>
  );
}
