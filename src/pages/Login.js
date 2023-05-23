import React from 'react'
import { email, google } from '../assets/images'

export const Login = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center w-full h-full py-20'>
        <div className='w-auto flex items-center p-4 rounded-2xl gap-8 bg-hung/30 hover:bg-white transition cursor-pointer drop-shadow-lg '>
            <img src={google} className='w-10' alt="" />
            <p>Sign in with google</p>
        </div>
        <div className='w-auto flex items-center p-4 rounded-2xl gap-8 bg-hung/30 hover:bg-white transition cursor-pointer drop-shadow-lg '>
            <img src={email} className='w-10' alt="" />
            <p>Sign in with Email</p>
        </div>
    </div>
  )
}
