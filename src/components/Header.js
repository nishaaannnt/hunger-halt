import {React,useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import { Appstate } from '../App'
import Modal from './Modal';

const Header = () => {
    const useAppstate=useContext(Appstate);
    const [signInModal,setSignInModal]=useState(false);
    const [signUpModal,setSignUpModal]=useState(false);


    // Add this to make modal fixed 
    const modalOpen=()=>{
        document.body.style.overflow='hidden'
    } 
    const modalClose=()=>{
        document.body.style.overflow=''
    }   

  return (
    <>
    <header className="sticky top-0 z-50 bg-white/90 drop-shadow-md">
            <nav className="flex p-6 mx-auto justify-between text-hung font text-xl items-center">
                <h3>Hunger Halt</h3>
                <ul className="flex space-x-6 items-center">
                    <li><Link to="/" className="hover:text-black">Home</Link></li>
                    <li><Link to="/volunteer" className="hover:text-black">Volunteer</Link></li>
                    <li><Link to="/donate" className="hover:text-black">Donate</Link></li>
                    <li><Link to="#" className="hover:text-black">About</Link></li>

                    {/* // Conditional rendering if logged in or not // */}

                    {useAppstate.login ?
                    <>
                        <li><Link to="#" className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700">Sponsor Us</Link></li>
                        <div className='flex gap-3 bg-black/40 text-white rounded-lg px-2 items-center'>
                            <li><p className='py-2'>{useAppstate.userName}</p></li>
                            <li><img src={useAppstate.photo} alt="pfp" className='w-8 rounded-full' /></li>
                        </div>
                        <li><Link to="/login" className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700">Log Out</Link></li>
                    </>
                    :
                    <>
                    <li><a onClick={()=>{setSignInModal(true);}} className="bg-hung cursor-pointer text-white p-2 px-3 rounded-lg hover:bg-emerald-700">Login</a></li>
                    <li><a onClick={()=>{setSignUpModal(true)}} className="bg-hung cursor-pointer text-white p-2 px-3 rounded-lg hover:bg-emerald-700">SignUp</a></li>
                    </>
                    }
                </ul>
            </nav>
        </header>
        {
            signInModal?(
                <Modal onClose={setSignInModal}>
                    <div className='flex flex-col  space-x-6 items-center'>
                    <h2 className='mb-3 text-2xl text-hung font-bold'>Sign In</h2>
                    <hr className='drop-shadow-3xl  w-full my-2' />
                    <button className="bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-3 w-60" >Continue as Provider</button>
                    <button className="bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-3 w-60" >Continue as Volunteer</button>
                    <button className="bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-3 w-60" >Continue as NGO</button>
                    </div>
                    {}
                </Modal>
            ):<></>
        }{
            signUpModal?(
                <Modal onClose={setSignUpModal}>
                    <div className='flex flex-col  space-x-6 items-center'>
                    <h2 className='mb-3 text-2xl text-hung font-bold'>Sign Up</h2>
                    <hr className='drop-shadow-3xl  w-full my-2' />
                    <button className="bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-3 w-60" >Continue as Provider</button>
                    <button className="bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-3 w-60" >Continue as Volunteer</button>
                    <button className="bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-3 w-60" >Continue as NGO</button>
                    </div>
                    {}
                </Modal>
            ):<></>
        }

    </>
  );
};
export default Header;