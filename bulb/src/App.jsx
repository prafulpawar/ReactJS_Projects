
// //Ye Jo Example Hai vo Conditial Rendering Aur Normal Function Ke Sath Me Hai 

// import React, { useState } from 'react'

// function App() {
//   const [value,setvalue]= useState(false)

//   function handleLight (){
      
//           setvalue(!value)
      
      
//   }

//   return (
   
//         <>
//             <div className='bg-zinc-300 h-screen flex justify-center items-center flex-col'>
//                     <div className='border-2 rounded-full w-24 h-24 '>
//                         <div className={` ${value ? 'w-full h-full bg-red-400 rounded-full' : 'w-full h-full bg-white rounded-full'}`}  >

//                         </div>
//                     </div> 

//                     <div className='rounded-md border-2 mt-2 pr-6 pl-6 pt-1 pb-1' onClick={handleLight}>
//                          <button>Button</button>
//                     </div>
//             </div>
//         </>      
//   )
// }

// export default App

//Ye Jo Example Hai vo Conditial Rendering Aur Arrow Function Ke Sath Me Hai 
// Jo Ki Time Par Direct useState Ki Value ko Chnage Karenga 


import React, { useState } from 'react'

function App() {
  const [value,setvalue]= useState(false)


  return (
   
        <>
            <div className='bg-zinc-300 h-screen flex justify-center items-center flex-col'>
                    <div className='border-2 rounded-full w-24 h-24 '>
                        <div className={` ${value ? 'w-full h-full bg-red-400 rounded-full' : 'w-full h-full bg-white rounded-full'}`}  >

                        </div>
                    </div> 

                    <div className='rounded-md border-2 mt-2 pr-6 pl-6 pt-1 pb-1' onClick={()=>setvalue(!value)}>
                         <button>Button</button>
                    </div>
            </div>
        </>      
  )
}

export default App