import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from "react-bootstrap"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { FormGroup, Alert, } from '@mui/material';
import { useAuth} from '../Context'
import Cookies from 'js-cookie'

function Login(){
  const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { login} = useAuth()
    const [err, setErr] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setErr("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          console.log(emailRef.current)
          // Cookies.set("email",  emailRef.current.value)
          // Cookies.set("password",  passwordRef.current.value)
          navigate("/")
        } catch {
          setErr("Failed to login")
        }
    
        setLoading(false)
      }

 return (
            
  <>
  <Card>
  <CardContent>
   <h2 className="text-center mb-4" style={{color: "purple"}}>Login</h2>
 
   {err && <Alert variant="outlined" severity="error">{err}</Alert>}
 
   <Form onSubmit={handleSubmit}>
     <Form.Group id="email">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" ref={emailRef} required />
       
     </Form.Group>
     <Form.Group id="password">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" ref={passwordRef} required />
     </Form.Group>
     <Button disabled={loading} className="w-50 mt-4" variant="outlined" color="primary" type="submit">
       Login
     </Button>
   </Form>
   </CardContent>
   </Card>
  <div className="w-100 text-center mt-3">
 Don't have an account?  <Button variant="contained"  ><Link to="/signup">Sign Up</Link></Button>
</div>
 
 </>
     
 )     
       
      
}

export default Login;