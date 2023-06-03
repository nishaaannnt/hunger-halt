import React from 'react'
import { qrCode } from '../assets/images'


export const DonateMoney = () => {
  return (
    <>
    
    <div className="home-content flex flex-col justify-center md:px-12 py-4 md:py-12 items-center h-full">
        <div className="home  md:flex md:justify-between mt-8 mb-8 h-3/4 md:w-4/5">
            <div className="desc  w-auto  md:w-3/4 px-6 md:m-auto mb-8 ">
                <h1 className="text-6xl py-3 mb-6 text-hung">
                Donate. Save Lives. Bring Hope.
                </h1>
                <p className="mr-6 text-lg mb-8">
                Countless lives are lost daily on unforgiving streets, their hunger and despair echoing. Your donation rescues them, offering food, shelter, and hope. Join the cause, make a difference,Donate ! Be kind.
                </p>
            </div>
            <div className="carousel max-h-96 md:w-1/3 flex justify-center items-center">
                <img src={qrCode} className="md:h-full h-96 " alt="img" />
            </div>
        </div>
        </div>

        

</>
  )
}
