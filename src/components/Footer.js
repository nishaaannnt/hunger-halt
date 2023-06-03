import React from 'react'
import { AiFillMail,AiFillGithub } from "react-icons/ai";
import { FaInstagram,FaLinkedinIn,FaCommentAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-24">
            <div className="foot bg-hung min-h-80 md:flex md:text-left text-center text-white  md:px-24 px-14 py-12">

                
                <div className="links md:w-1/3 mb-6 hidden md:block">
                    <h3 className="text-xl mb-2">Go To Links</h3>
                    <hr className="md:w-80"/>
                    <ul className="mt-4">
                        <li className="py-1"><a href="#">Home</a></li>
                        <li className="py-1"><a href="#">Volunteer</a></li>
                        <li className="py-1"><a href="#">Donate</a></li>
                        <li className="py-1"><a href="#">About</a></li>
                        
                    </ul>
                </div>
                <div className="contact md:w-1/3 mb-6">
                    <h3 className="text-xl mb-2">Contact Us</h3>
                    <hr className="md:w-80"/>
                    <ul className="mt-4">
                        <li className="py-1"><a className='flex items-center gap-2' href="#"><FaInstagram/> Instagram</a></li>
                        <li className="py-1"><a className='flex items-center gap-2' href="#"><FaLinkedinIn/>LinkedIn</a></li>
                        <li className="py-1"><a className='flex items-center gap-2' href="#"><FaCommentAlt/>Email</a></li>
                    </ul>
                </div>
                <div className="by   md:w-1/3 mb-6">
                    <h3 className="text-xl mb-2">Made for</h3>
                    <div className='text-left'>
                    <hr className="md:w-80"/>
                    <p className="md:my-3 mt-6">Solution Challenge 2023</p>
                    <p className="py-1">Team Hunger Halt</p>
                    <p className="md:mt-4 md:flex items-center gap-2"><AiFillGithub className='hidden md:block'/><a href="https://github.com/nishaaannnt/hunger-halt" className="text-white/60"> Click here</a> for Github Code</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}
