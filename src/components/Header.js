import {React,useContext, useState} from 'react'
import { FaUserAlt,FaHandHoldingHeart,FaBars} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {Link, useNavigate,ReactDOM} from 'react-router-dom'
import { Appstate } from '../App'
import {auth } from '../firebase/firebase'
import {signOut} from 'firebase/auth'
import Modal from './Modal';

const Header = () => {
    const useAppstate=useContext(Appstate);
    const navigate=useNavigate();

    // For Modal not
    const [signUpModal,setSignUpModal]=useState(false);
    const [nav,setNav]=useState(true);

    const Menu=()=>{
        const list=document.querySelector('ul');
        const navResIcon=document.querySelector('#navResIcon');
        if(nav){
            list.classList.add('top-[75px]')
            list.classList.add('opacity-100')
            setNav(false)
        }else{
            list.classList.remove('opacity-100');
            list.classList.remove('top-[75px]')
            setNav(true)
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
    <>
    <header className="sticky 2xl:visible  top-0 z-50 bg-white/90 drop-shadow-md">
            <nav className="flex  2xl:p-6 px-4 py-2 mx-auto  text-center justify-between text-hung font text-xl items-center">
                <h3 className='text-3xl 2xl:text-right 2xl:mb-0' onClick={()=>{navigate('/')}}>Hunger Halt</h3>
                <span className='my-4 font-bold text-2xl 2xl:hidden cursor-pointer text-hung' id='navResIcon' onClick={()=>Menu()}>{nav?<FaBars/>:<AiOutlineClose/>}</span>
                <ul className="2xl:flex 2xl:space-x-6 items-center z-[-1] 2xl:z-auto absolute 2xl:static bg-white w-full left-0 2xl:w-auto pl-3 h-auto 2xl:pl-0 2xl:opacity-100 opacity-0 top-[-400px] transition-all  duration-300">
                    <li className='my-2 mx-6 2xl:m-0'><Link to="/" className="hover:text-black">Home</Link></li>
                    <li className='my-2 mx-6 2xl:m-0'><Link to="/volunteer" className="hover:text-black">Volunteer</Link></li>
                    <li className='my-2 mx-6 2xl:m-0'><Link to="/donate" className="hover:text-black">Donate</Link></li>
                    

                    {/* // Conditional rendering if NGO or NOT// */}

                    {useAppstate.login &&
                    useAppstate.role==='NGO'&&<>
                    <li className='my-2 mx-6 2xl:m-0'><Link to="/ngo/volunteer" className="hover:text-black">New Volunteers</Link></li>
                    <li className='my-2 mx-6 2xl:m-0'><Link to="/ngo/food" className="hover:text-black">Food</Link></li></>
                    }
                    <li className='my-2 mx-6 2xl:m-0'><Link to="/about" className="hover:text-black">About</Link></li>

                    {useAppstate.login?
                    <>
                    
                        <li className='my-4 2xl:m-0'><Link to="/donate/money" className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700 w-24 mx-auto items-center flex justify-center gap-2"><FaHandHoldingHeart/> Fund</Link></li>
                        <div onClick={()=>navigate('/profile') } className='flex mx-auto justify
                        my-4 2xl:my-0 cursor-pointer gap-3 hover:bg-hung/80 bg-hung/70 text-white rounded-lg px-2 
                        w-52 2xl:w-auto items-center'>
                            <li><p className='py-2'>{useAppstate.userName}</p></li>
                            <li><img src={useAppstate.photo} alt="pfp" className='w-8 rounded-full' /></li>
                        </div>
                        <li className='my-2 mx-6  mb-6 2xl:m-0'><Link to="/login" onClick={logOut} className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700">Log Out</Link></li>
                    </>
                    :
                    <>
                    {/* Login is same for both NGO and User as only single Dataset of Users */}
                    
                    <li className='my-4 mx-4 2xl:m-0'><Link to={'/login'} className="bg-hung cursor-pointer text-white p-2 px-3 rounded-lg hover:bg-emerald-700">Sign In</Link></li>
                    <li className='my-6 mx-4 2xl:m-0'><Link to={'/signup'} className="bg-hung cursor-pointer text-white p-2 px-3 rounded-lg hover:bg-emerald-700">Sign Up</Link></li>
                    </>
                    }
                </ul>
            </nav>
        </header>
        {/* MODAL */}
        {
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