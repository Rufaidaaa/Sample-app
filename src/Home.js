import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from "react-bootstrap"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { FormGroup, Alert, } from '@mui/material';
import { useAuth} from './Context'
import Cookies from 'js-cookie'

function Home() {
 
    const { logOut, user } = useAuth()
    const [err, setErr] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()



    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setErr("")
          setLoading(true)
          await logOut()
          navigate("/login")
        } catch {
          setErr("Failed to logout")
        }
    
        setLoading(false)
      }

        return (
            <>
  <Card>
  <CardContent>
   {user && user.email}
   {err && <Alert variant="outlined" severity="error">{err}</Alert>}
 
   <Form onSubmit={handleSubmit}>
   
     <Button disabled={loading}  className="w-100" variant="outlined" color="primary" type="submit">
       LogOut
     </Button>
     </Form>
     </CardContent>
     </Card>
     </>
        );
    }


export default Home;