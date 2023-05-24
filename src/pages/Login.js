import React from 'react'
import { email, google } from '../assets/images'
import { googleProvider,auth} from '../firebase/firebase'
import {useContext} from 'react'
import {signInWithPopup ,signOut} from 'firebase/auth'
import { Appstate } from '../App'


export const Login = () => {

  const useAppstate=useContext(Appstate);

  const googleLogin=async ()=>{
    try{
      await signInWithPopup(auth,googleProvider)
      .then((result)=>{
        console.log(result.user)
        useAppstate.setuserName(result.user.displayName);
        useAppstate.setLogin(true);
        useAppstate.setPhoto(result.user.photoURL);
      })
    }catch(err){
      console.log(err);
    }
  }

  const logOut =async()=>{
    try{
    await signOut(auth)
    useAppstate.setuserName('');
    useAppstate.setLogin(false);
    useAppstate.setPhoto('');
    }catch(err){
        console.log(err);
    }
}

  return (
    <div className='flex flex-col gap-8 justify-center items-center w-full h-full py-20'>
      {useAppstate.login?
      <div onClick={logOut} className='w-auto flex items-center p-4 mb-24 rounded-2xl gap-8 bg-hung/30 hover:bg-white transition cursor-pointer drop-shadow-lg '>
      <p>Log Out</p>
      </div>
      :<><div onClick={googleLogin} className='w-auto flex items-center p-4 rounded-2xl gap-8 bg-hung/30 hover:bg-white transition cursor-pointer drop-shadow-lg '>
            <img src={google} className='w-10' alt="" />
            <p>Sign in with google</p>
        </div>
        <div className='w-auto flex items-center p-4 rounded-2xl gap-8 bg-hung/30 hover:bg-white transition cursor-pointer drop-shadow-lg '>
            <img src={email} className='w-10' alt="" />
            <p>Sign in with Email</p>
        </div></> 
}
        
    </div>
  )
}
