import React from 'react';

function Navbar() {
  return (
    <div><video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-10" >
    <source src="/background/landing_bg.mov" type="video/mp4" />

      Your browser does not support the video tag.
    </video>
    <div className='relative'>
      <div className='flex justify-between items-center mt-2 ml-2 z-20'>
        <div className='flex gap-10 text-white-500'>
          <div>Home</div>
          <div>Tournaments</div>
          <div>How to Play</div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Search Bar</div>
        </div>
        <div className='flex items-center text-white-800'>
          <div className='flex-grow'></div>
          <div>Sign In</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
