import React from 'react'
import{ BrowserRouter,Route,Routes} from 'react-router-dom'
import  Login from '../components/login'
import SignIn from '../components/SignIn'

 const route = ()=>{
        return (
          <BrowserRouter>
          <Routes>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<SignIn/>}></Route>
               
          </Routes>
          </BrowserRouter>
      
        )
      }
      
      export default route

