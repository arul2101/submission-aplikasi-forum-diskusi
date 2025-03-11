import React from 'react';
import useInput from './../hooks/useInput';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';

export default function ThreadInput() {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const dispatch = useDispatch();

  const handleAddThread = () => {
    if (body.trim() === '' || title.trim() === '') return;

    dispatch(asyncAddThread({ title, body }));
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Masukkan judul diskusi..'
        className='h-[50px] w-full p-4 shadow-sm focus:outline-none mb-4 border border-yellow-400 rounded-lg'
        value={title}
        onChange={onTitleChange}
      />
      <textarea
        placeholder='Apa yang kamu mau diskusikan hari ini?'
        className='resize-none h-[150px] w-full p-4 shadow-sm focus:outline-none border border-yellow-400 rounded-lg'
        value={body}
        onChange={onBodyChange}
      />

      <button
        type='button'
        className='w-full bg-yellow-400 text-white py-2 mt-4 rounded-md cursor-pointer hover:bg-yellow-500'
        onClick={handleAddThread}
      >Kirim</button>
    </form>
  );
}
