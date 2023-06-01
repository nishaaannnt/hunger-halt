import {React,useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Appstate } from '../App'
import Modal from './Modal';

const Header = () => {
    const useAppstate=useContext(Appstate);
    const navigate=useNavigate();

    // For Modal not
    const [signUpModal,setSignUpModal]=useState(false);
    const [nav,setNav]=useState(false);

    // Add this to make modal fixed 
    // FOR MODAL NOT USED 
    const Menu=()=>{
        const list=document.querySelector('ul');
        if(nav){
            list.classList.add('top-[90px]')
            list.classList.add('opacity-100')
            setNav(false)
        }else{
            list.classList.remove('opacity-100');
            list.classList.remove('top-[90px]')
            setNav(true)
        }
    }

  return (
    <>
    <header className="sticky md:visible  top-0 z-50 bg-white/90 drop-shadow-md">
            <nav className="flex  p-6 mx-auto  text-center justify-between text-hung font text-xl items-center">
                <h3 className='text-3xl md:text-right mb-4 md:mb-0'>Hunger Halt</h3>
                <span className='my-4 font-bold md:hidden ' onClick={()=>Menu()}>X</span>
                <ul className="md:flex md:space-x-6 items-center z-[-1] md:z-auto absolute md:static bg-white w-full left-0 md:w-auto pl-3 md:pl-0 md:opacity-100 opacity-0 top-[-400px] transition-all  duration-300">
                    <li className='my-2 mx-6 md:m-0'><Link to="/" className="hover:text-black">Home</Link></li>
                    <li className='my-2 mx-6 md:m-0'><Link to="/volunteer" className="hover:text-black">Volunteer</Link></li>
                    <li className='my-2 mx-6 md:m-0'><Link to="/donate" className="hover:text-black">Donate</Link></li>
                    

                    {/* // Conditional rendering if NGO or NOT// */}

                    {useAppstate.login &&
                    useAppstate.role==='NGO'&&<>
                    <li className='my-2 mx-6 md:m-0'><Link to="/ngo/volunteer" className="hover:text-black">Available Volunteer</Link></li>
                    <li className='my-2 mx-6 md:m-0'><Link to="/ngo/food" className="hover:text-black">Food</Link></li></>}
                    <li className='my-2 mx-6 md:m-0'><Link to="/about" className="hover:text-black">About</Link></li>

                    {useAppstate.login?
                    <>
                    
                        <li className='my-4 md:m-0'><Link to="/donate/money" className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700">Sponsor Us</Link></li>
                        <div onClick={()=>navigate('/profile') } className='flex mx-auto justify-between
                        my-4 md:my-0 cursor-pointer gap-3 hover:bg-black/30 bg-black/40 text-white rounded-lg px-2 
                        w-56 md:w-auto items-center'>
                            <li><p className='py-2'>{useAppstate.userName}</p></li>
                            {/* <li><p className='py-2'>{useAppstate.email}</p></li> */}
                            <li><img src={useAppstate.photo} alt="pfp" className='w-8 rounded-full' /></li>
                        </div>
                        <li><Link to="/login" className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700">Log Out</Link></li>
                    </>
                    :
                    <>
                    {/* Login is same for both NGO and User as only single Dataset of Users */}
                    
                    <li className='my-4 mx-4 md:m-0'><Link to={'/login'} className="bg-hung cursor-pointer text-white p-2 px-3 rounded-lg hover:bg-emerald-700">Login</Link></li>
                    <li className='my-6 mx-4 md:m-0'><Link to={'/signup'} className="bg-hung cursor-pointer text-white p-2 px-3 rounded-lg hover:bg-emerald-700">SignUp</Link></li>
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
                    <Link to="/login" onClick={()=>{setSignInModal(false)}} className="text-center bg-hung text-white text-xl p-3 rounded-lg hover:bg-emerald-700 my-2 mx-6 w-60" >Continue as User</Link> 
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