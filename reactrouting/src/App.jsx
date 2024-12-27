import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Nav from './Compoents/Nav'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
const App = () => {
  return (

        <> 
              <Nav/>
             <Routes>
             <Route path='/' element={<Home/>}  />
             <Route path='/about' element={<About/>}  />
             <Route path='/contact' element={<Contact/>}  />
             <Route path='/products' element={<Products/>}  />
            </Routes>
        </>
  )
}

export default App