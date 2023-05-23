import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    
    <header className="sticky top-0 z-50 bg-white/90">
            <nav className="flex p-6 mx-auto justify-between text-hung font text-xl">
                <h3>Hunger Halt</h3>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:text-black">Home</Link></li>
                    <li><Link to="/volunteer" className="hover:text-black">Volunteer</Link></li>
                    <li><Link to="/provide" className="hover:text-black">Provide</Link></li>
                    <li><Link to="#" className="hover:text-black">About</Link></li>
                    <li><Link to="#" className="bg-hung text-white p-2 px-3 rounded-lg hover:bg-emerald-700">Login</Link></li>
                    <li>
                        <Link to="#" className="bg-hung text-white p-2 rounded-lg hover:bg-emerald-700">Donate Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
  )
}

export default Header;