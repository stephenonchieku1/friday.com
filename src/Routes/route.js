import React from 'react'
import{ BrowserRouter,Route,Routes} from 'react-router-dom'
import  Login from '../components/login'
import SignIn from '../components/SignIn'
import Contact from '../components/Contacts'

 const route = ()=>{
        return (
          <BrowserRouter>
          <Routes>
            <Route  path='/' element={<Contact/>} ></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<SignIn/>}></Route>
               
          </Routes>
          </BrowserRouter>
      
        )
      }
      
      export default route

