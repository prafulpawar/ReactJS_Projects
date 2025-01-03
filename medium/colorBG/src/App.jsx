import React, { useState } from 'react'
import { useRef } from 'react'
function App() {
   
  const elementRef = useRef(null);
  const [color,setColor] = useState('red')

  function handleClick(){
    if (elementRef.current) {
      console.log( elementRef.current.value)
        elementRef.current.click()
    }
  }

  return (
    <div className=' h-screen  '
      style={{ backgroundColor: `${color}` }}
    >
      <input ref={elementRef} id="myElementId" type="color" name="" 
        defaultValue={"#ff0000"}
        onChange={(e)=>{
          setColor(e.target.value) 
          console.log(color)}}
      hidden />

      <div className='flex flex-col justify-center items-center pt-40'>

        <h1 className='text-8xl m-2' style={{ backgroundColor:  `${color}` }}>Color Picker</h1>

        <div onClick={()=>handleClick()} className='red w-48 h-48 bg-white rounded-full flex justify-center items-center relative '>
          
        </div>

      </div>

    </div>
  )
}

export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [count, setcount] = useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>{
//         console.log(count)   // 0
//         setcount((prev)=> prev + 1)  
//         setcount((prev)=> prev + 1)   
//         setcount((prev)=> prev + 1)   
//         console.log(count)  // 0
//         alert(count) 
//       }}>click</button>
//     </div>
//   )
// }

// export default App