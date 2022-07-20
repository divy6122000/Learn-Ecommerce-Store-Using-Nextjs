import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
const Myaccount = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    }
  }, [])
  return (
    <div className='container mx-auto'>
      <h1 className='font-semibold text-2xl text-center p-5'> My Account </h1>
    </div>
  )
}

export default Myaccount