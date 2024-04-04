import React from 'react';

function Navbar() {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full z-10'>
        <div className='flex justify-between items-center mt-2 ml-2 text-white'>
          <div className='flex gap-10 text-white'>
            <div>Home</div>
            <div>Tournaments</div>
            <div>How to Play</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Search Bar</div>
          </div>
          <div className='flex items-center text-white'>
            <div className='flex-grow'></div>
            <div>Sign In</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
