
import React, { useContext, useEffect, useState } from 'react';
import { FaUserAlt,FaBuilding,FaPhoneAlt,FaClock,FaMapMarkerAlt,FaUtensils,FaUsers, FaCheck} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { Appstate } from '../App';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';


const Profile = () => {
  const useAppstate = useContext(Appstate);
  const [activities, setActivities] = useState([]);
  const [renderedActivities, setRenderedActivities] = useState([]);


  const fetchActivities = async () => {
    try {
      let q;

      if (useAppstate.role === 'volunteer') {
        q = query(collection(db, 'users'), where('email', '==', useAppstate.email));
      } else {
        q = query(collection(db, 'requests'), where('email', '==', useAppstate.email));
      }


      const querySnapshot = await getDocs(q);
      const fetchedActivities = querySnapshot.docs.map((doc) => doc.data());
      setActivities(fetchedActivities);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchNGODetails = async (acceptedById) => {
    try {
      const userRef = doc(db, 'users', acceptedById);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        console.log('User not found');
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };


  const renderActivities = async () => {
    const activityPromises = activities.map(async (item, index) => {
       const { email, timestamp, acceptedById,foodType,quantity} = item;
       let contact,contactNo;
      if(useAppstate.role=='user'){
         contact=item.provider.contactName;
         contactNo=item.provider.contactNo;
      }
       const ngoDetails = await fetchNGODetails(acceptedById);
      return (
        <div key={index} className='md:text-2xl text-lg text-hung'>
        <p className='flex items-center gap-2 my-1'><AiFillMail/> {email}</p>
        <p className='flex items-center gap-2 my-1'><FaClock/> {timestamp && timestamp.toDate().toLocaleString()}</p>
        {
        useAppstate.role=='user'?<>
        <p className='flex items-center gap-2 my-1'><FaUserAlt/> <span className='text-black/40'> Provider :</span> {contact}</p>
        <p className='flex items-center gap-2 my-1'><FaPhoneAlt/> {contactNo}</p>
        <p className='flex items-center gap-2 my-1'><FaUtensils/> {foodType}</p>
        <p className='flex items-center gap-2 my-1 mb-8'><FaUsers/> {quantity}</p></>:<></>
        }
        <p className='flex items-center  gap-2 my-1'><FaCheck/> <span className='text-black/40'> Accepted by :</span> {acceptedById?ngoDetails.displayName:'Not accepted yet'}</p>  
        {ngoDetails&&(useAppstate.role=='user'||useAppstate.role=='volunteer') ? (
          <div>
            <p className='flex items-center gap-2 my-1 mt-6 text-black/50 mb-2'>More NGO Details :</p>
            <p className='flex items-center gap-2 my-1'><FaBuilding/> {ngoDetails.displayName}</p>
            <p className='flex items-center gap-2 my-1'><AiFillMail/> {ngoDetails.email}</p>
            <p className='flex items-center gap-2 my-1'><FaPhoneAlt/> {ngoDetails.phone}</p>
            <p className='flex items-center gap-2 my-1'><FaMapMarkerAlt/> {ngoDetails.address}</p>
            {/* Display other NGO details here */}
          </div>
        ) : (
          <p></p>
        )}
      </div>
      );
    });


    const resolvedActivities = await Promise.all(activityPromises);
    setRenderedActivities(resolvedActivities);
  };


  // Fetch activities when component mounts
  useEffect(() => {
    fetchActivities();
  }, [useAppstate.email]);


  // Render activities once they are fetched
  useEffect(() => {
    renderActivities();
  }, [activities]);


  return (
    <div>
      {useAppstate.login ? (
        <div className="home-content my-8 md:mx-16 px-8 md:py-12 items-center h-full">
          <h1 className='m-3 text-4xl font-bold text-hung text-center mb-4'>Your Profile</h1>
          <hr />
          <div className='flex md:m-6 gap-6 my-8'>
             <div className='md:h-48 my-7'>
               <img src={useAppstate.photo} className='rounded-full md:h-full w-28 md:w-auto' alt="pfp" />
             </div>
             <div className='md:mx-6 my-6'>
               <p className='md:text-4xl text-2xl font-semibold mb-2 text-hung'>{useAppstate.userName}</p>
               <p className='md:text-xl text-xl mb-2 text-hung/70 flex items-center gap-2 mt-4'><FaUserAlt/>{useAppstate.role}</p>
               <p className='text-black/50 flex items-center gap-2 my-1'><FaPhoneAlt/> {useAppstate.contact}</p>
               <p className='text-black/70 flex items-center gap-2 text-lg mb-1'><FaMapMarkerAlt/>{useAppstate.address}</p>
               {useAppstate.cperson&&useAppstate.role=='NGO' ? (
                 <p className='text-black/70 text-lg mb-1'><FaUsers/>{useAppstate.cperson}</p>
               ) : (
                 <></>
               )}
             </div>
           </div>
          <hr />
          <div className='my-4 flex md:justify-evenly justify-between mx-auto'>
               <p className='text-hung font-semibold text-2xl py-2 md:mx-16 drop-shadow-lg mx-auto'>Your Activities</p>
          </div>
          <hr />
          {/* Activities */}
          <div className="my-8">
            {renderedActivities.length > 0 ? (
              <div>{renderedActivities}</div>
            ) : (
              <p className='text-2xl text-center text-hung/80'>No activities found.</p>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};


export default Profile;


