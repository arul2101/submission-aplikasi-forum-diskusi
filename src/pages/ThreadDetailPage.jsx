import React from 'react';

export default function ThreadDetailPage() {
  return (
    <section>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2 mb-4'>
          <img src='https://ui-avatars.com/api/?name=Fauzan%20Fathurrahman&background=random' className='size-10 rounded-full' />
          <div>
            <h2 className='font-bold text-[1.2rem]'>Dimas Saputra</h2>
          </div>
        </div>

        <p className='font-bold text-slate-400'>649 Hari lalu</p>
      </div>

      <h2 className='font-bold'>Halo! Selamat datang dan silakan perkenalkan diri kamu</h2>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at culpa magnam, sequi impedit quae facilis officiis perferendis distinctio est.</p>

      <div className='mt-4'>
        <textarea placeholder='Apa yang mau kamu komentari?' className='shadow-sm w-full h-[150px] p-4 resize-none focus:outline-none' />

        <button className='w-full bg-yellow-400 text-white py-2 rounded-md mt-2'>Kirim</button>
      </div>

      <div className='mt-4'>
        <h2 className='font-bold'>Komentar (1)</h2>

        <div>
          <div className='border-b border-slate-400 p-4 mt-4'>
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
          </div>
        </div>
      </div>
    </section>
  );
}
