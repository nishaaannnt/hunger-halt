import React,{useContext} from 'react';
import {Appstate } from '../App'


const Profile = () => {
    const useAppstate=useContext(Appstate); 
  return (
    <div>

        {useAppstate.login?
        <div className="home-content my-8 md:mx-16 px-8 py-12 items-center h-full">
            {/* D1 */}
                <h1 className='m-3 text-4xl font-bold text-hung text-center mb-4'>Your Profile</h1>
                <hr />
            <div className='flex md:m-6 gap-6 my-8'>
                <div className='md:h-48 my-7'>
                    <img src={useAppstate.photo} className='rounded-full  md:h-full md:w-auto w-full '  alt="pfp" />
                </div>
                <div className='mx-6 my-6'>
                    <p className=' md:text-4xl text-2xl font-semibold mb-2 text-hung'>{useAppstate.userName}</p>
                    <p className='md:text-xl text-xl mb-2  text-hung/70'>{useAppstate.role}</p>
                    <p className='  text-black/50'>Contact- {useAppstate.contact}</p>
                    <p className='text-black/70 text-lg mb-1'>{useAppstate.address}</p>
                    {useAppstate.cperson?
                    <p className='text-black/70 text-lg mb-1'>{useAppstate.cperson}</p>:
                    <></>
                    }
                    <p className='text-black md:text-xl mb-1'>4.7 Rating</p>
                </div>
            </div>
                <hr />
            {/* D2 */}
            <div className='my-4 flex md:justify-evenly justify-between mx-auto'>
                <div className=' bg-hung rounded-xl text-white cursor-pointer'>
                <p className='mx-8 text-2xl py-2 md:mx-16 drop-shadow-lg'>About</p>
                </div>
                <div className=' bg-hung rounded-xl text-white cursor-pointer'>
                <p className='mx-8 text-2xl py-2 md:mx-16 drop-shadow-lg'>Activities</p>
                </div>
            </div>
            <hr />

         </div>:<></>}
    </div>
  )
}

export default Profile