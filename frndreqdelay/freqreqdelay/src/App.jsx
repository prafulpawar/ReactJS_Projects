import React, { useState } from 'react'

function App() {
  const [frnd,setFrnd]=useState(true)

   function handleClick(){
    console.log('clicked')
      setTimeout(()=>{
        setFrnd(!frnd)
      },2000)
   }

  return (
    <div className='flex justify-center items-center h-screen flex-col bg-zinc-300'>
         <div className='w-48 rounded-md border-2 '>
            <img src="https://images.unsplash.com/photo-1631879742133-a0dd6180abf9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hpdnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
         </div>

         <div className='mt-2'>
             <button onClick={()=>handleClick()} className='bg-red-900 text-white pl-8 pr-8 pt-1 pb-1' >
                 { frnd ? "Friend" :"AddFriend"  }
             </button>
         </div>
    </div>
  )
}

export default App