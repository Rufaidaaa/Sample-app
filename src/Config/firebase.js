import firebase from "firebase/app"
import "firebase/auth"


export const Firebase = firebase.initializeApp({
    apiKey: "AIzaSyA7iGicNI0kWh3wtxRtct-yWxd7jAth8TI",
    authDomain: "entertainment-app-83a59.firebaseapp.com",
    projectId: "entertainment-app-83a59",
    storageBucket: "entertainment-app-83a59.appspot.com",
    messagingSenderId: "155719596996",
    appId: "1:155719596996:web:20baa5ed6e30e1a2d14291",
    measurementId: "G-S3ZH0EQLEJ"
  });


const auth = Firebase.auth()
export default auth
