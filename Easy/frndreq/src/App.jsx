import React, { useState } from 'react'

function App() {
   const [friend,setFriend] = useState(true);
   
  return (
     
    <div className='h-screen bg-zinc-400 flex justify-center items-center '>
             <div className='flex justify-center items-center flex-col'>
                 <div className='w-48 '>
                     <img className='w-48' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                 </div>
                 <div className='mt-2'>
                    <button className={`${friend ? 'border-2 rounded-md pr-4 pl-4 pt-2 pb-2 text-white border-red-400': 'border-2 rounded-md pr-8 pl-8 pt-2 pb-2 text-black bg-red-600 border-red-400'  }`  } onClick={()=>setFriend(!friend)} >
                          <h1>
                                {friend ? 'Addfriend' : 'Friend'}
                          </h1>
                    </button>
                 </div>
             </div>
    </div>
  )
}

export default App
