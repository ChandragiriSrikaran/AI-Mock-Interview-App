'use client'
import React from 'react'
import Header from '../Dashboard/_components/Header';
import LandingPage from '../Dashboard/_components/LandingPage';

function Page() {

  return (
    <>
      <Header />
      <div className='p-10'>
        <LandingPage />
      </div>
    </>
  );
}

export default Page