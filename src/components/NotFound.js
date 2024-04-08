import React, { useEffect } from 'react';

const NotFound = () => {
   

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-extrabold text-yellow-600 outline-2 text-2xl m-2'>No Hitman</h1>
      <img className='rounded-lg mt-4' src='https://i.pinimg.com/originals/a2/7e/e1/a27ee1b03034aeea027ed0dcb48c8959.jpg' width={300} height={300} alt='Not found' />
    </div>
  );
}

export default NotFound;
