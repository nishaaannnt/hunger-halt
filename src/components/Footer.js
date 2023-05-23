import React from 'react'

export const Footer = () => {
  return (
    <footer className="mt-24">
            <div className="foot bg-hung h-80 flex text-white  px-24 py-12">

                <div className="by w-1/3">
                    <h3 className="text-xl mb-2">Made for-</h3>
                    <hr className="w-80"/>
                    <p className="my-3 mt-6">Solution Challenge 2023</p>
                    <p className="py-2">Team Hunger Halt</p>
                    <p className="mt-8"><a href="" className="text-white/60">Click here</a> for Github Code</p>
                </div>
                <div className="links w-1/3">
                    <h3 className="text-xl mb-2">Go To Links</h3>
                    <hr className="w-80"/>
                    <ul className="mt-4">
                        <li className="py-2"><a href="#">Home</a></li>
                        <li className="py-2"><a href="#">Volunteer</a></li>
                        <li className="py-2"><a href="#">Donate</a></li>
                        <li className="py-2"><a href="#">About</a></li>
                        
                    </ul>
                </div>
                <div className="contact w-1/3">
                    <h3 className="text-xl mb-2">Contact Us-</h3>
                    <hr className="w-80"/>
                    <ul className="mt-4">
                        <li className="py-2"><a href="#">Instagram</a></li>
                        <li className="py-2"><a href="#">LinkedIn</a></li>
                        <li className="py-2"><a href="#">Email</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}
