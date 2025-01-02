import React from 'react'
import { useState } from 'react'
function App() {
   const [img1,setImg1] = useState('https://images.unsplash.com/photo-1511145822182-677fa5800671?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
   const [img2,setImg2] = useState('https://images.unsplash.com/photo-1480866179948-2caa74d9082a?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
   
   function handleChnage(){
       let temp = img1
       setImg1(img2)
       setImg2(temp)
   }
  
   return (
    <div className=' h-screen bg-zinc-400 flex  flex-col justify-center items-center  '>
       <div className='flex gap-5 flex-col border-2 p-5 rounded-xl'>
            <div className='w-48 '>
               <img className='object-cover' src={img1} alt="" />
            </div>
             <div className='w-48'> 
                  <img className='object-cover' src={img2} alt="" />
            </div>
       </div>

       <div className='mt-5' onClick={()=>handleChnage()}>
        <button className='pt-1 pb-1 pr-5 pl-5 rounded-md text-white rounded-xl bg-red-700'>
              <h1>Swap</h1>
        </button>
       </div>

    </div>
  )
}

export default App