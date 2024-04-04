import React from 'react';
import { Link } from 'react-router-dom';

function Content() {
  const text = 'WHERE THE CARDS COME ALIVE';
  const [typedText, setTypedText] = React.useState('');
  const typingSpeed = 120; // Milliseconds between each letter

  React.useEffect(() => {
    if (typedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(text.substring(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }
  }, [typedText, text]);

  return (
    <div className="relative text-4xl font-extrabold h-screen">
      
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
      >
        <source src="/background/landing_bg.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-10 inset-0 flex flex-col items-center justify-center ">
        <span className="border-r-4 border-r-white pr-5 text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text whitespace-nowrap font-eagle-lake">
            {typedText}
        </span>
      <Link to="/game" className="hover:bg-blue-700 bg-gradient-to-r from-pink-500 to-purple-500 py-2 px-4 rounded-full mt-20 font-eagle-lake">
        Lets Play
      </Link>

    </div>
    
    </div>
  );
}

export default Content;
