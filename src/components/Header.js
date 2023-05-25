import {React,useContext} from 'react'
import {Link} from 'react-router-dom'
import { Appstate } from '../App'

const Header = () => {
    const useAppstate=useContext(Appstate);
  return (
    <header className="sticky top-0 z-50 bg-white/90 drop-shadow-md">
            <nav className="flex p-6 mx-auto justify-between text-hung font text-xl items-center">
                <h3>Hunger Halt</h3>
                <ul className="flex space-x-6 items-center">
                    <li><Link to="/" className="hover:text-black">Home</Link></li>
                    <li><Link to="/volunteer" className="hover:text-black">Volunteer</Link></li>
                    <li><Link to="/provide" className="hover:text-black">Provide</Link></li>
                    <li><Link to="#" className="hover:text-black">About</Link></li>

                    {/* // Conditional rendering if logged in or not // */}

                    {useAppstate.login ?
                    <>
                        <li><Link to="#" className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700">Donate Us</Link></li>
                        <div className='flex gap-3 bg-black/40 text-white rounded-lg px-2 items-center'>
                            <li><p className='py-2'>{useAppstate.userName}</p></li>
                            <li><img src={useAppstate.photo} alt="pfp" className='w-8 rounded-full' /></li>
                        </div>
                        <li><Link to="/login" className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700">Log Out</Link></li>
                    </>
                    :
                    <li><Link to="/login" className="bg-hung text-white p-2 px-3 rounded-lg hover:bg-emerald-700">Login</Link></li>
                    }
                </ul>
            </nav>
        </header>
  )
}

export default Header;