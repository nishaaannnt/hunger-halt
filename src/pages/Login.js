import React from 'react'
import { useContext,useState } from 'react'
import { google, loginVector } from '../assets/images'
import { googleProvider,auth } from '../firebase/firebase'
import {signInWithPopup,signInWithEmailAndPassword ,signOut} from 'firebase/auth'
import { Appstate } from '../App'
import { useNavigate } from 'react-router-dom'


export const Login = () => {  

  const navigate= useNavigate();
  const useAppstate=useContext(Appstate); 

  const [email,setemail]=useState()
  const [pwd,setpwd]=useState()

  // Signin with google
  const googleLogin=async ()=>{
    try{
      await signInWithPopup(auth,googleProvider)
      .then((result)=>{
        console.log(result.user)
        useAppstate.setuserName(result.user.displayName);
        useAppstate.setEmail(result.user.email);
        useAppstate.setLogin(true);
        useAppstate.setsignupType('google');
        useAppstate.setPhoto(result.user.photoURL);
        navigate('/')
      })
    }catch(err){
      console.log(err);
    }
  }

  // Normal Email Password login

  const signup=document.querySelector('#signup')
 
  const mailLogin=()=>{
    if(pwd){

      // Password Matched
      const mail=signup.email.value;
      console.log(mail);
    try{
      signInWithEmailAndPassword(auth, email, pwd)
      .then((result)=>{
        console.log(result.user)
        
        useAppstate.setuserName(result.user.displayName);
        useAppstate.setLogin(true);
        useAppstate.setPhoto(result.user.photoURL);
        navigate("/");
      }).catch((err)=>{
        console.log(err);
        const noMatch=document.querySelector('.pwdNoMatch')
       noMatch.append('Not valid Credentials')
       setTimeout(() => {
         noMatch.innerHTML='';
       }, 3000);
         })
       }catch(err){
         console.log(err);
       }
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
      <div className='w-1/2 md:block hidden'>
          <img src={loginVector} alt="" />
        </div>
        
        {/* Conditional rendering for login */}

      {useAppstate.login?
      <div onClick={logOut} className='w-auto flex items-center p-4 mb-24 rounded-2xl gap-8 bg-hung/30 hover:bg-white transition cursor-pointer drop-shadow-lg '>
      <p>Log Out</p>
      </div>
      :<div className='md:w-1/2 my-4 justify-center flex flex-col'>

        {/* Login Form for user */}
        <form action="" id='signup'>
            <div className=' md:w-1/2 m-auto'>
            <h2 className="text-5xl py-3 mb-8 text-hung items-center justify-center">Login</h2>
                <label htmlFor="email" className="block mb-3">Email:</label>
                <input type="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter Your Name' required 
                 className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>

                <label htmlFor="password" className="block mb-3">Password:</label>
                <input type="password" id="password" name="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={(e)=>{setpwd(e.target.value)}} placeholder='Enter Your Password' required  className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>

            </div>
            <div className='pwdNoMatch justify-center items-center flex text-red-700 '></div>
            <div onClick={mailLogin} className='md:w-1/2 m-auto flex justify-center items-center p-4 rounded-2xl gap-8 bg-hung/80 hover:bg-hung/60 transition cursor-pointer drop-shadow-lg my-2'>
                <p className='text-white'>Sign in</p>
            </div>
            <div className='justify-center items-center flex text-hung/60 '><p> Don't have an account? <a className='text-hung cursor-pointer' onClick={()=>navigate('/signup')}> Create one</a></p></div>
        </form>

        {/* Horizontal Line */}

        <div className='flex items-center justify-center my-3'>
        <hr className="justify-center flex items-center w-1/4 drop  my-5 " />
        <p className='px-1 text-hung/70'>OR</p>
        <hr className="justify-center flex items-center w-1/4 drop  my-5 " /></div>

        {/* Google Login Option */}
        <div onClick={googleLogin} className='md:w-1/2 m-auto flex items-center p-4 rounded-2xl gap-8 bg-hung/40 hover:bg-white transition cursor-pointer drop-shadow-lg '>
            <img src={google} className='w-10' alt="" />
            <p>Sign in with google</p>
        </div></div> 
}
    </div>
  )
}
