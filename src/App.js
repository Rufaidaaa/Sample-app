
import './App.css';
import React, { useState, useEffect } from 'react'
import Home from './Home'
import Login from './Auth/SignIn'
import SignUp  from './Auth/SignUp'
import Firebase from './Config/firebase';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider} from './Context'
import Cookies from 'js-cookie';
function App() {
 
  const [auth, setAuth] = useState(false);

//   function readCookie(){
//     const email =Cookies.get("email")
//     const pass = Cookies.get("password")
//     if(email && pass){
//       setAuth(true);
//     }
// }
// useEffect(() =>{
//   readCookie()
// }, [])
    return (
      
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ maxHeight: "100vh" }}
    >
       <div className="w-100" style={{ maxWidth: "400px"}}>
         <BrowserRouter>
         <AuthProvider>
           <Routes>
             <Route path ="/" element= {<Home/>}/>
          <Route path = "/signup" element ={<SignUp/>} />
          <Route path = "/login" element ={<Login/>}/>
           </Routes>
           </AuthProvider>
           </BrowserRouter>
        
       </div>
      </Container>
     
    );
   
};

export default App;

