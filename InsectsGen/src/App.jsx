import React, { useState } from 'react';

const App = () => {
 
  const [position, setPosition] = useState({ top: 0, left: 0 });

  
  const handleClick = () => {
    const randomTop = Math.floor(Math.random() * window.innerHeight); 
    const randomLeft = Math.floor(Math.random() * window.innerWidth); 
    setPosition({ top: randomTop, left: randomLeft }); 
  };

  return (
    <div className='relative h-screen w-screen bg-gray-200'>
      
      <div className='absolute w-14' style={{ top: position.top, left: position.left }} >
        <img src="https://images.unsplash.com/photo-1516434593931-42aaf04e6ef2?q=80&w=871&auto=format&fit=crop" alt="Insect" />
      </div>

     
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-xl bg-red-400 border-2 p-2'>
        <button onClick={handleClick}>
          Click
        </button>
      </div>
    </div>
  );
};

export default App;
