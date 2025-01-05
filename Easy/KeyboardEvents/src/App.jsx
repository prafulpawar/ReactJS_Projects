import React, { useState, useEffect } from 'react';

function App() {
  const [key, setKey] = useState('');

 
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  
  useEffect(() => {
    const handleKeyDown = (e) => {
      setKey(e.key); 

    
      setPosition((prev) => {
        switch (e.key) {
          case 'ArrowRight':
            return { ...prev, left: prev.left + 10 };
          case 'ArrowLeft':
            return { ...prev, left: prev.left - 10 };
          case 'ArrowDown':
            return { ...prev, top: prev.top + 10 };
          case 'ArrowUp':
            return { ...prev, top: prev.top - 10 };
          default:
            return prev;
        }
      });
    };

    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen relative flex flex-col justify-center items-center bg-red-300">
      <div className="border-2 p-2 flex justify-center items-center">
       
        <img
          className="w-48 absolute"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
          src="https://images.pexels.com/photos/1386599/pexels-photo-1386599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Movable"
        />
      </div>

     
      <div className="border-2 mt-2 rounded-xl pr-3 pl-3 p-1 bg-green-300">
        {key}
      </div>
    </div>
  );
}

export default App;
