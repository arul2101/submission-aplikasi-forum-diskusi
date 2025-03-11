import React, { useEffect } from 'react';
import Loading from './components/Loading';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';

export default function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) return null;

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path='/*' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />

      <div className=''>
        <Navbar authUser={authUser} />

        <main className='max-w-[780px] mx-auto px-4'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/threads/:id' element={<ThreadDetailPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
