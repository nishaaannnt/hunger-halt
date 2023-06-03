import React from 'react'
import { useContext,useState } from 'react'
import { google, loginVector } from '../assets/images'
import { googleProvider,auth } from '../firebase/firebase'
import {signInWithPopup ,signOut,createUserWithEmailAndPassword} from 'firebase/auth'
import { Appstate } from '../App'
import { useNavigate,Link} from 'react-router-dom'
import Modal from '../components/Modal';

//Signup to get Email and password and then ask their Role

const SignUp = () => {

    const navigate= useNavigate();
    const useAppstate=useContext(Appstate); 
  
    const [email,setemail]=useState()
    const [pwd,setpwd]=useState()
    const [cpwd,setcpwd]=useState()
    const [signUp,setSignup]=useState(false);
  

    // Signin with google
  const googleLogin=async ()=>{
      try{
        await signInWithPopup(auth,googleProvider)
        .then((result)=>{
          console.log(result.user)
          useAppstate.setuserName(result.user.displayName);
          useAppstate.setPhoto(result.user.photoURL);
          useAppstate.setEmail(result.user.email);
          useAppstate.setsignupType('google');
          setSignup(true);
        })
      }catch(err){
        console.log(err);
      }
    }
  
    // Normal Email Password login
  
  const signup=document.querySelector('#signup')
   

  const mailLogin=async ()=>{
    // Password Matched
      if(pwd===cpwd){
        const mail=signup.email.value;
        console.log(mail);
      try{
        await createUserWithEmailAndPassword(auth,email,pwd) 
        .then((result)=>{
          console.log(result.user)
          setpwd(pwd);
          useAppstate.setEmail(result.user.email);
          useAppstate.setsignupType('email');
          setSignup(true);
        })
      }catch(err){
        const noMatch=document.querySelector('.pwdNoMatch')
        noMatch.append('Email Already in use!')
       setTimeout(() => {
        noMatch.innerHTML='';
      }, 3000);
      } 
    }else{
      // Password do not match
      const noMatch=document.querySelector('.pwdNoMatch')
      noMatch.append('Password not Matched!')
      setTimeout(() => {
        noMatch.innerHTML='';
      }, 3000);
      
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
  

  // UI
    return (
        <>
        <div className='flex justify-center  items-center gap-5 w-full h-full '>
          <div className='md:w-1/2 md:block hidden'>
              <img src={loginVector} alt="" />
            </div>
            
            {/* Conditional rendering for login */}
    
            {/* Login Form for user */}
            <div className='md:w-1/2 justify-center flex flex-col'>    
            <form action="" id='signup'>
                <div className=' md:w-1/2 md:m-auto my-6'>
                <h2 class="text-5xl py-3 mb-8 text-hung items-center justify-center">Signup</h2>
                    <label for="email" className="block mb-3">Email:</label>
                    <input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" name="email" onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter Your Email' required 
                     className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>
    
                    <label for="password" className="block mb-3">Password:</label>
                    <input type="password" id="password" name="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={(e)=>{setpwd(e.target.value)}} placeholder='Enter Your Password' required  className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>
                    <label for="cpassword" className="block mb-3">Confirm Password:</label>
                    <input type="password" id="cpassword" name="cpassword" onChange={(e)=>{setcpwd(e.target.value)}} placeholder='Confirm Your password' required className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>
                </div>
                <div className='pwdNoMatch justify-center items-center flex text-red-700 '></div>
                <div onClick={mailLogin} className='md:w-1/2 m-auto flex justify-center items-center p-4 rounded-2xl gap-8 bg-hung/80 hover:bg-hung/60 transition cursor-pointer drop-shadow-lg my-2'>
                    <p className='text-white'>Sign Up</p>
                </div>
                <div className='justify-center items-center flex text-hung/60 mt-4'><p> Already have an account? <a className='text-hung cursor-pointer' onClick={()=>navigate('/login')}>SignIn here</a></p></div>
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
            </div>
            </div>
        </div>
        {
            signUp?(
                <Modal onClose={setSignup}>
                    <div className='flex flex-col items-center'>
                    <h2 className='mb-2 text-2xl text-hung font-bold'>Create your Profile</h2>
                    <hr className='drop-shadow-3xl  w-full my-1' />
                    <Link to="/user/register" onClick={()=>{setSignup(false);navigate('/user/register')}} className="text-center bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-2 w-60" >Continue as User</Link> 
                    <Link to="/ngo/register" onClick={()=>{setSignup(false);navigate('ngo/register')}} className="text-center bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-2 w-60" >Continue as NGO</Link> 
                    </div>
                </Modal>
            ):<></>
        }
        </>
      )
}

export default SignUp;