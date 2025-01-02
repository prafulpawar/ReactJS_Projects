import React, { useState } from 'react'

function App() {
  const [color,setColor] = useState([]);

  function handleClick(){
       let r = Math.floor(Math.random()*256) 
       let g = Math.floor(Math.random()*256) 
       let b =Math.floor(Math.random()*256) 
       let string = `rgb(${r} ${g} ${b})`
       setColor([string])
  }
  console.log(color)
  
  return (
    <div className='  bg-zinc-400 h-screen flex flex-col justify-center items-center'>
        <div className={` p-10 rounded-full`}
        style={{backgroundColor : `${color[0]}` }}
        >
                
         </div>
         <div>
            <button onClick={()=>handleClick()} 
               className='font-bold mt-2 pr-4 pl-4 pt-1 pb-1 rounded-md bg-red-400'
              >GenerateRandomColor
              
              
              </button>
         </div>
    </div>
  )
}

export default App