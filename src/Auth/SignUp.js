import React, {useRef, useState} from 'react'
// import FormControl from '@mui/material/FormControl';
// import FormControl from '@mui/material/FormControl';

import { Form } from "react-bootstrap"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link, useNavigate} from 'react-router-dom'
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { FormGroup, Alert, } from '@mui/material';
import { useAuth} from '../Context'
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Button from '@mui/material/Button';


export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp, user} = useAuth()
    const [err, setErr] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setErr("Passwords do not match")
        }
    
        try {
          setErr("")
          setLoading(true)
          await signUp(emailRef.current.value, passwordRef.current.value)
          navigate("/login")
        } catch {
          setErr("Failed to create an account")
        }
    
        setLoading(false)
      }
    
    return (
        
        <>
         <Card>
         <CardContent>
          <h2 className="text-center mb-4" style={{color: "purple"}}>Sign Up</h2>
        
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-50 mt-4" variant="outlined" color="primary" type="submit">
              Sign Up
            </Button>
          </Form>
          </CardContent>
          </Card>
         <div className="w-100 text-center mt-3">
        Already have an account? <Button variant="contained" size="small" color="success" ><Link to="/login">Log In </Link></Button>
      </div>
        
        </>
    )
}
