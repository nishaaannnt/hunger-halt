import React from 'react'
import { useContext } from 'react'
import { email, google, loginVector } from '../assets/images'
import { googleProvider,auth } from '../firebase/firebase'
import {signInWithPopup ,signOut, onAuthStateChanged} from 'firebase/auth'
import { Appstate } from '../App'
import { useNavigate } from 'react-router-dom'


export const Login = () => {  
  const navigate= useNavigate();
  const useAppstate=useContext(Appstate); 

  // Signin with google
  const googleLogin=async ()=>{
    try{
      await signInWithPopup(auth,googleProvider)
      .then((result)=>{
        console.log(result.user)
        useAppstate.setuserName(result.user.displayName);
        useAppstate.setLogin(true);
        useAppstate.setPhoto(result.user.photoURL);
        navigate("/");
      })
    }catch(err){
      console.log(err);
    }
  }

  // Logout Functionality
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

// Login UI 
  return (
    <div className='flex justify-center items-center gap-5 w-full h-full '>
      <div className='w-1/2'>
          <img src={loginVector} alt="" />
        </div>
        
        {/* Conditional rendering for login */}

      {useAppstate.login?
      <div onClick={logOut} className='w-auto flex items-center p-4 mb-24 rounded-2xl gap-8 bg-hung/30 hover:bg-white transition cursor-pointer drop-shadow-lg '>
      <p>Log Out</p>
      </div>
      :<div className='w-1/2 justify-center flex flex-col'>
        <div className='w-1/2 m-auto'>
        <h2 class="text-5xl py-3 mb-8 text-hung items-center justify-center">Login</h2>
            <label for="full_name" class="block mb-3">Full Name:</label>
            <input type="text" id="full_name" name="full_name" placeholder='Enter Your Name' required class="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>

            <label for="email" class="block mb-3">Email:</label>
            <input type="email" id="email" name="email" placeholder='Enter Your Email' required class="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>
        </div>
        <div onClick={googleLogin} className='w-1/2 m-auto flex justify-center items-center p-4 rounded-2xl gap-8 bg-hung/80 hover:bg-hung/60 transition cursor-pointer drop-shadow-lg my-2'>
            <p className='text-white'>Sign in with google</p>
        </div>
        <div className='flex items-center justify-center my-3'>
        <hr className="justify-center flex items-center w-1/4 drop  my-5 " />
        <p className='px-1 text-hung/70'>OR</p>
        <hr className="justify-center flex items-center w-1/4 drop  my-5 " /></div>

        {/* Google Login Option */}
        <div onClick={googleLogin} className='w-1/2 m-auto flex items-center p-4 rounded-2xl gap-8 bg-hung/40 hover:bg-white transition cursor-pointer drop-shadow-lg '>
            <img src={google} className='w-10' alt="" />
            <p>Sign in with google</p>
        </div></div> 
}
    </div>
  )
}
