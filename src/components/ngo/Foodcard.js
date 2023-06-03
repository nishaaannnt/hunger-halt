
import { FaUserAlt,FaPhoneAlt,FaClock,FaMapMarkerAlt,FaUtensils,FaUsers, FaCheck} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import React, { useContext, useState } from 'react';


import { Appstate } from '../../App';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

// Display Food Information Card

const Foodcard = (props) => {
  const useAppstate = useContext(Appstate);
  const [accepted, setAccepted] = useState(false);
  const googleMap=()=>{
    const address = props.address
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;


    window.location.href = googleMapsUrl;
}
  const handleAccept = async () => {
    try {
      const requestRef = doc(db, 'requests', props.email);
      const acceptedById = useAppstate.email || ''; // Set a default value if useAppstate.userId is undefined


      await updateDoc(requestRef, {
        acceptedBy: useAppstate.userName,
        acceptedById: acceptedById,
        status:'done'
      });
      setAccepted(true);
      // Perform any additional actions after accepting the request
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="h-90 rounded-2xl md:w-1/2 md:mx-auto mb-6 md:mb-16 bg-white/10 md:p-6 py-4 md:m-4 m-3 justify-between flex flex-col shadow-2xl">
      <div className='md:flex justify-between md:p-6 p-2'>
        <div className='mx-6 mb-6'>
          <p className=' my-3  text-3xl  text-hung flex items-center gap-3'><FaMapMarkerAlt/><h3 className="text-hung my-1">{props.address}</h3></p>
          {props.foodType && (
            <h3 className="text-hung my-2 text-xl flex items-center gap-3"><span><FaUtensils/> </span>{props.foodType}</h3>
          )}
          {props.quantity && (
            <h3 className="text-hung my-2 text-xl flex items-center gap-3"><span><FaUsers/></span>{props.quantity} quantity</h3>
          )}
        </div>
        <div className='mx-6'>
          {props.contactPerson && (
            <h3 className="text-hung flex items-center gap-3 text-xl my-2"><span className=''><FaUserAlt/> </span>{props.contactPerson}</h3>
          )}
          {props.contactNo && (
            <h3 className="text-hung flex items-center gap-3 text-xl my-2"><span className=''><FaPhoneAlt/> </span>{props.contactNo}</h3>
          )}
          {props.email && (
            <h3 className="text-hung flex items-center gap-3 text-xl my-2"><span className=''><AiFillMail/> </span>{props.email}</h3>
          )}
          {props.timestamp && (
            <h3 className="text-hung flex items-center gap-3 text-lg my-2"><span className=''><FaClock/></span>{props.timestamp}</h3>
          )}
        </div>
      </div>
      <div className='flex mx-4 mt-4 gap-2 md:justify-between'>
        <a
          className={`bg-hung py-4 px-12 cursor-pointer flex items-center justify-center gap-2 rounded-2xl w-1/2 text-center hover:bg-emerald-900 transition text-white ${accepted ? 'bg-green-800 cursor-default' : ''}`}
          onClick={handleAccept}
        >
          {accepted ?<><FaCheck/> Accepted </>: 'Accept'}
        </a>
        <a onClick={googleMap} className= "bg-hung flex items-center justify-center gap-2 px-6  py-4 cursor-pointer rounded-2xl w-1/2 text-center hover:bg-emerald-900 transition text-white ">
        <FaMapMarkerAlt/> Map
        </a>
      </div>
    </div>
  );
};


export default Foodcard;
