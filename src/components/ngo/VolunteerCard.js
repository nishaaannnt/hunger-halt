import React, { useContext, useState } from 'react';
import { FaUserAlt,FaPhoneAlt,FaClock,FaCalendarAlt, FaCheck } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { Appstate } from '../../App';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

// Display free volunteer details

const VolunteerCard = (props) => {
  const useAppstate = useContext(Appstate);
  const [accepted, setAccepted] = useState(false);


  const handleAccept = async () => {
    try {
      const requestRef = doc(db, 'users', props.email);
      const acceptedById = useAppstate.email || '';


      await updateDoc(requestRef, {
        acceptedBy: useAppstate.userName,
        acceptedById: acceptedById,
        status:'done'
      });


      setAccepted(true);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="h-90 rounded-2xl my-10 md:w-1/2 md:mx-auto md:mb-16 bg-white/10 p-6 m-4 mx-4 justify-between flex flex-col shadow-2xl">
      <div className="md:flex justify-between md:p-6">
        <div className="mx-6 mb-6">
        <h3 className="text-hung text-2xl my-2 flex items-center gap-3"><span className='text-2xl my-2'><FaUserAlt/></span> {props.name}</h3>
          {props.contactNo && (
            <h3 className="text-hung md:text-xl text-lg my-2 flex items-center gap-3"><span className=''><FaPhoneAlt/> </span>  {props.contactNo}</h3>
          )}
          {props.email && (
            <h3 className="text-hung md:text-xl text-lg my-2 flex items-center gap-3"><span className=''><AiFillMail/> </span>  {props.email}</h3>
          )}
          {props.day && (
            <h3 className="text-hung text-lg my-2 flex items-center gap-3"><span className=''><FaCalendarAlt/> </span>  {props.day}</h3>
          )}
          {props.timeSlot && (
            <h3 className="text-hung text-lg my-2 flex items-center gap-3"><span className=''><FaClock/> </span>  {props.timeSlot}</h3>
          )}
        </div>
      </div>
      <div className="flex mx-4 gap-2 md:justify-between">
        <a
          className={`bg-hung py-4 px-12 cursor-pointer rounded-2xl w-full text-center hover:bg-emerald-900 transition text-white ${
            accepted ? 'bg-green-700 cursor-default' : ''
          }`}
          onClick={handleAccept}
        >
          {accepted ?<div className='flex items-center justify-center gap-4'><FaCheck/> Accepted </div>: 'Accept'}
        </a>
      </div>
    </div>
  );
};


export default VolunteerCard;