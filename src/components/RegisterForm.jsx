import React from 'react';
import useInput from '../hooks/useInput';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

export default function RegisterForm() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <form className='shadow-2xl rounded-md w-2/4 flex flex-col px-8 py-16 bg-white'>
      <h2 className='text-center mb-4 text-2xl'>Create your <span className='text-yellow-400'>Account!</span></h2>

      <input value={name} type='text' placeholder='Enter your name...' className='h-[40px] w-full p-4 focus:outline-none shadow-sm rounded-md' name='name' onChange={onNameChange} />
      <input value={email} type='email' placeholder='Enter your email...' className='h-[40px] w-full p-4 focus:outline-none shadow-sm rounded-md mt-4' name='email' onChange={onEmailChange} />
      <input value={password} type='password' placeholder='Enter your password...' className='h-[40px] w-full p-4 focus:outline-none shadow-sm rounded-md mt-4' name='password' onChange={onPasswordChange} />

      <button type='button' onClick={() => onRegister({ name, email, password })} className='text-white bg-yellow-400 w-full h-[40px] mt-4 rounded-md cursor-pointer hover:bg-yellow-500'>Register</button>

      <p className='mt-4'>Already have an account? <NavLink to="/" className='text-yellow-400 underline'>Login</NavLink> here</p>
    </form>
  );
}
