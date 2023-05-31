import {React,useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Appstate } from '../App'
import Modal from './Modal';

const Header = () => {
    const useAppstate=useContext(Appstate);
    const navigate=useNavigate();

    // For Modal not
    const [signUpModal,setSignUpModal]=useState(false);



    // Add this to make modal fixed 
    // FOR MODAL NOT USED 
    const modalOpen=()=>{
        document.body.style.overflow='hidden'
    } 
    const modalClose=()=>{
        document.body.style.overflow=''
    }   

  return (
    <>
    <header className="sticky md:visible  top-0 z-50 bg-white/90 drop-shadow-md">
            <nav className="md:flex  p-6 mx-auto justify-between text-hung font text-xl items-center">
                <h3>Hunger Halt</h3>
                <ul className="md:flex md:space-x-6 items-center">
                    <li><Link to="/" className="hover:text-black">Home</Link></li>
                    <li><Link to="/volunteer" className="hover:text-black">Volunteer</Link></li>
                    <li><Link to="/donate" className="hover:text-black">Donate</Link></li>
                    <li><Link to="/about" className="hover:text-black">About</Link></li>

                    {/* // Conditional rendering if logged in or not // */}

                    {useAppstate.login &&
                    useAppstate.role==='NGO'&&<>
                    <li><Link to="/donate" className="hover:text-black">Available Volunteer</Link></li>
                    <li><Link to="/donate" className="hover:text-black">Food</Link></li></>}

                    {useAppstate.login?
                    <>
                    
                        <li><Link to="/donate" className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700">Sponsor Us</Link></li>
                        <div onClick={()=>navigate('/profile')} className='flex cursor-pointer gap-3 hover:bg-black/30 bg-black/40 text-white rounded-lg px-2 items-center'>
                            <li><p className='py-2'>{useAppstate.userName}</p></li>
                            {/* <li><p className='py-2'>{useAppstate.email}</p></li> */}
                            <li><img src={useAppstate.photo} alt="pfp" className='w-8 rounded-full' /></li>
                        </div>
                        <li><Link to="/login" className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700">Log Out</Link></li>
                    </>
                    :
                    <>
                    {/* Login is same for both NGO and User as only single Dataset of Users */}
                    
                    <li><Link to={'/login'} className="bg-hung cursor-pointer text-white p-2 px-3 rounded-lg hover:bg-emerald-700">Login</Link></li>
                    <li><Link to={'/signup'} className="bg-hung cursor-pointer text-white p-2 px-3 rounded-lg hover:bg-emerald-700">SignUp</Link></li>
                    </>
                    }
                </ul>
            </nav>
        </header>

        {/* // MODAL SECTION NOT USED ANYMORE// */}
        {/*
            signInModal?(
                <Modal onClose={setSignInModal}>
                    <div className='flex flex-col items-center'>
                    <h2 className='mb-2 text-2xl text-hung font-bold'>Sign In</h2>
                    <hr className='drop-shadow-2xl  w-full my-1' />
                    <Link to="/login" onClick={()=>{setSignInModal(false)}} className="text-center bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-2 w-60" >Continue as User</Link> 
                    <Link to="/login" onClick={()=>{setSignInModal(false)}} className="text-center bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-2 w-60" >Continue as NGO</Link> 
                    </div>
                    {}
                </Modal>
            ):<></>*/
        }{
            signUpModal?(
                <Modal onClose={setSignUpModal}>
                    <div className='flex flex-col items-center'>
                    <h2 className='mb-2 text-2xl text-hung font-bold'>Sign Up</h2>
                    <hr className='drop-shadow-3xl  w-full my-1' />
                    <Link to="/user/register" onClick={()=>{setSignUpModal(false)}} className="text-center bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-2 w-60" >Continue as User</Link> 
                    <Link to="/ngo/register" onClick={()=>{setSignUpModal(false)}} className="text-center bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-2 w-60" >Continue as NGO</Link> 
                    </div>
                </Modal>
            ):<></>
        }

    </>
  );
};
export default Header;