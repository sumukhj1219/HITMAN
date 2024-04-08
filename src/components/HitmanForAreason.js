import React from 'react';
import ReactPlayer from 'react-player';

const HitmanForAreason = () => {
  return (
    <div className='flex flex-col items-center'>
	  <h1 className='font-extrabold text-yellow-600 outline-2 text-2xl m-2'>HITMAN For A Reason</h1>
      <ReactPlayer
        url='https://youtube.com/shorts/zujSYCnNeaQ?si=eqz4iWRleDBhogca'
        playing={true}
        controls={true}
        width={250}
        height={350}
      />
    </div>
  );
}

export default HitmanForAreason;
