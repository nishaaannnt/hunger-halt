import React,{useContext,useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Auth } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { Appstate } from '../App'

// Authenticate if user is signed in

const AuthDetails = () => {
const useAppstate=useContext(Appstate);


  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      if(user){
      useAppstate.setuserName(auth.currentUser.displayName);
      useAppstate.setLogin(true);
      useAppstate.setPhoto(auth.currentUser.photoURL)
      }else{
        useAppstate.setuserName('');
      useAppstate.setLogin(false);
      useAppstate.setPhoto('');
      }
    })
  }, [])
}

export default AuthDetails;