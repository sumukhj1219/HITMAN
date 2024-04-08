import React from 'react';
import LongMenu from './MenuBar.js';
import MenuPopupState from './AboutMe.js';

const Header = () => {
  return (
    <div className='flex justify-between mt-3 md:ml-10 md:mr-10'>
      <LongMenu/>
	  <MenuPopupState/>
    </div>
  );
};

export default Header;
