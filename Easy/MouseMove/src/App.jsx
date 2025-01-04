import React, { useState } from 'react';


function App() {
  const [top, setTop] = useState('0px');
  const [left, setLeft] = useState('0px');

   
   function handleMouse(e){
    setLeft(e.clientX + 'px');
    setTop(e.clientY + 'px');
    
       console.log(e.clientX,e.clientY)  
   }



  return (
    <div
      onMouseMove={handleMouse}
      className="bg-black h-screen flex justify-center items-center relative"
    >
      <div
        className="p-10 translate-x-[-50%] translate-y-[-50%] transition-transform duration-150 ease-in-out bg-red-400 flex justify-center items-center rounded-full w-14 h-14"
        style={{
          top: top,
          left: left,
          position: 'absolute', 
        }}
      ></div>
    </div>
  );


}

export default App;
