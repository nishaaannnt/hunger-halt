import React from 'react'


// This card is used to display food request
const Foodcard = (props) => {
  return (
    <div className="h-90 rounded-2xl md:w-1/2 md:mx-auto mb-16 bg-white/10 p-6 m-4 mx-4   justify-between flex flex-col  shadow-2xl">
        <div className='md:flex justify-between p-6 '>
                <div className='mx-6 mb-6'>
               <p className='text-black/50 mb-3'>Location - <h3 className="text-hung  text-3xl my-1">{props.address}</h3></p> 
                <h3 className="text-hung my-1 text-xl"><span className='text-black/50  '>Foodtype- </span>  {props.foodType}</h3>
                <h3 className="text-hung my-1 text-xl"><span className='text-black/50  '>Quantity- </span>  {props.quantity}</h3></div>
               <div className='mx-6'>
                <h3 className="text-hung text-xl my-2"><span className='text-black/50'>Contact Person- </span> {props.contactPerson}</h3>
                <h3 className="text-hung text-xl my-2"><span className='text-black/50'>Contact No- </span>  {props.contactNo}</h3>
                <h3 className="text-hung text-xl my-2"><span className='text-black/50'>Email- </span>  {props.email}</h3>
                <h3 className="text-hung text-lg my-2"><span className='text-black/50'>At- </span>  {props.timestamp}</h3>
                </div>
            </div>
            <div className='flex mx-4 gap-2 md:justify-between'>
                <a className="bg-hung py-4 px-12  cursor-pointer rounded-2xl w-1/2   text-center hover:bg-emerald-900 transition text-white">Accept</a>
                <a className="bg-hung py-4 px-12  cursor-pointer rounded-2xl md:w-1/5 w-1/2   text-center hover:bg-emerald-900 transition text-white ">Map</a>
            </div>
    </div>
  )
}

export default Foodcard