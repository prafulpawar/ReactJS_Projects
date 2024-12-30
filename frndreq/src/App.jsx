import React from 'react'

function App() {
  let a = 'hello world'
  let b = 12 ///Number Data Types Then--->Int We Can Say 
  let c = true
  let d = null
  let e = undefined
  let f = [1,2,3,4,5] //Primitive Data Types Of Arr
  let g = ['name',{},5]
  let h ={ name:"Abc", age:25 }
  return (
    <div>
          {
            a
          }
          {
            b
          }{
            c
          }
          {
            d
          }{
            e
          }
          {
            f
          }
          {
            h
          }
          {
            g
          }
    </div>
  )
}

export default App