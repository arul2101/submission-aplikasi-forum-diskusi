import React from 'react';
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
  return (
    <section className='max-w-[1280px] mx-auto min-h-screen flex'>
      <div className='flex justify-center gap-40 items-center'>
        <div className='w-2/4'>
          <img src='./ilustration.jpg' className='w-full h-full' />
        </div>

        <RegisterForm />
      </div>
    </section>
  );
}
