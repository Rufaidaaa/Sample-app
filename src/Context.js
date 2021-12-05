import React, {useContext, useEffect, useState} from 'react'
import auth from './Config/firebase'



const AuthContext = React.createContext()

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}


export  function AuthProvider({children}) {
 const [user, setUser] = useState()

 function login(email, password){
     return auth.signInWithEmailAndPassword(email, password)
 }
 function signUp(email, password){
   return auth.createUserWithEmailAndPassword(email, password)
 }

 function logOut(){
     return auth.signOut()
 }
 useEffect(() =>{
    const unsubscribe =auth.onAuthStateChanged (user =>{
        setUser(user)
       })
       return unsubscribe
 }, [])



 const value ={  
     user ,
    signUp,
    login,
    logOut
      
 }
    return (
      
       <AuthContext.Provider value={value}>
            {children}
       </AuthContext.Provider>
    )
}