import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  // let a = 'hello world'
  // let b = 12 ///Number Data Types Then--->Int We Can Say 
  // let c = true
  // let d = null
  // let e = undefined
  // let f = [1,2,3,4,5] //Primitive Data Types Of Arr
  // let g = ['name',5,()=>abc]
  // let h ={ name:"Abc", age:'25' }

  // let profiles = [

  //   {
  //     name: "ABC",
  //     age: 251
  //   },

  //   {
  //     name: "BCD",
  //     age: 780
  //   },

  //   {
  //     name: "XYZ",
  //     age: 250
  //   },
  // ]

  // {
  //   profiles.map((elem, index) => {
  //     return (
  //       <div key={index}>
  //         <h1>{elem.name}</h1>
  //         <p>{elem.age}</p>
  //       </div>
  //     )
  //   })
  // }
   const [a,setb]=useState(10) 

   function handler(){
   
    setb(14)
    
   }
  

   return (
   <>
         {
          <h1>{a}</h1> }

          <button onClick={()=>handler()}>
             Change 
          </button>
        
    </>
  )
}

export default App