// import React, { useState } from 'react';

// const KeyboardEventExample = () => {
//   const [key, setKey] = useState('');
//   const [code, setCode] = useState('');
//   const [aski,setAski] = useState('');
//   const handleKeyDown = (e) => {
   
//     setKey(e.key); // Captures the key name (e.g., 'a', 'Enter')
//     setCode(e.code); // Captures the physical key code (e.g., 'KeyA', 'Enter')
//     setAski(e.key.charCodeAt()); //
//     console.log(`Key: ${e.key}, Code: ${e.code}`); // Logs key details
//   };

//   return (
//     <div
//        tabIndex="0" // Makes the div focusable to capture keyboard events
//       onKeyDown={handleKeyDown} // Keyboard event listener
//       className="h-screen flex justify-center items-center"
//     >
//       <div className="p-5 border border-gray-400">
//         <p>Press any key!</p>
//         <p>Key: {key}</p>
//         <p>Code: {code}</p>
//         <p>AsciiCode: {aski}</p>
//       </div>
//     </div>
//   );
// };

// export default KeyboardEventExample;

// If you want to track keyboard events globally, i.e., 
// across the entire window, you can use window.addEventListener 
// inside a useEffect hook to add and remove event listeners.

import React, { useEffect, useState } from 'react';

const GlobalKeyboardEvent = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKey(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <h1>Key Pressed: {key}</h1>
    </div>
  );
};

export default GlobalKeyboardEvent;
