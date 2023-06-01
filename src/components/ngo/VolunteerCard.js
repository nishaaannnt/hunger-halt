import React from 'react'


// This card is used to display food request
const VolunteerCard = (props) => {
  return (
    <div className="h-90 rounded-2xl md:w-1/2 md:mx-auto mb-16 bg-white/10 p-6 m-4 mx-4   justify-between flex flex-col  shadow-2xl">
        <div className='md:flex justify-between p-3 '>
               <div className='mx-6'>
                <h3 className="text-hung text-xl my-2"><span className='text-black/50'>Volunteer Name:</span> {props.name}</h3>
                <h3 className="text-hung text-xl my-2"><span className='text-black/50'>Contact No- </span>  {props.contactNo}</h3>
                <h3 className="text-hung text-xl my-2"><span className='text-black/50'>Email- </span>  {props.email}</h3>
                <h3 className="text-hung text-lg my-2"><span className='text-black/50'>On- </span>  {props.day}</h3>
                <h3 className="text-hung text-lg my-2"><span className='text-black/50'>At- </span>  {props.timeSlot}</h3>
                </div>
            </div>
            <div className='my-3 md:justify-between mx-auto'>
                <a className="bg-hung py-4 px-12  cursor-pointer rounded-2xl w-1/2  text-center hover:bg-emerald-900 transition text-white">Accept</a>
            </div>
    </div>
  )
}

export default VolunteerCard