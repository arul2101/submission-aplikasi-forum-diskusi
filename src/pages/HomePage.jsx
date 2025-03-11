import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <section>
      <div>
        <textarea placeholder='Apa yang kamu mau diskusikan hari ini?' className='resize-none h-[150px] w-full p-4 shadow-sm focus:outline-none' />

        <button className='w-full bg-yellow-400 text-white py-2 mt-4 rounded-md cursor-pointer hover:bg-yellow-500'>Kirim</button>
      </div>

      <div className='mt-8 space-y-4'>
        <NavLink to='/threads/asdasd' className='block border-b border-slate-400 cursor-pointer hover:bg-slate-200 p-4'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <img src='https://ui-avatars.com/api/?name=Fauzan%20Fathurrahman&background=random' className='size-10 rounded-full' />
              <div>
                <h2 className='font-bold text-[1.2rem]'>Dimas Saputra</h2>
              </div>
            </div>

            <p className='text-slate-400 font-bold'>649 hari lalu</p>
          </div>

          <div className='p-4'>
            <h2 className='text-[1.2rem] font-bold'>Bagaimana pengalamanmu belajar Redux?</h2>
            <p>Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?</p>
          </div>
        </NavLink>
      </div>
    </section>
  );
}
