
import React, { useContext, useEffect, useState } from 'react';
import { Appstate } from '../App';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const Profile = () => {
  const useAppstate = useContext(Appstate);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const q = query(collection(db, 'requests'), where('email', '==', useAppstate.email));
        const querySnapshot = await getDocs(q);
        const fetchedActivities = querySnapshot.docs.map((doc) => doc.data());
        setActivities(fetchedActivities);
      } catch (error) {
        console.log(error);
      }
    };

    fetchActivities();
  }, [useAppstate.email]);

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

  useEffect(() => {
    const fetchDetails = async () => {
      const updatedActivities = [];

      for (const activity of activities) {
        const { acceptedById } = activity;
        const ngoDetails = await fetchNGODetails(acceptedById);
        updatedActivities.push({ ...activity, ngoDetails });
      }

      setActivities(updatedActivities);
    };

    if (activities.length > 0) {
      fetchDetails();
    }
  }, [activities]);

  const renderActivities = () => {
    return activities.map((item, index) => {
      const { email, timestamp, acceptedById, ngoDetails } = item;

      return (
        <div key={index}>
          <p>Email: {email}</p>
          <p>Timestamp: {timestamp && timestamp.toDate().toString()}</p>
          <p>Accepted By: {acceptedById}</p>
          {ngoDetails ? (
            <div>
              <p>NGO Name: {ngoDetails.displayName}</p>
              <p>NGO Email: {ngoDetails.email}</p>
              <p>NGO Phone: {ngoDetails.phone}</p>
              <p>NGO Address: {ngoDetails.address}</p>
              {/* Display other NGO details here */}
            </div>
          ) : (
            <p>NGO Details Not Found</p>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      {useAppstate.login ? (
        <div className="home-content my-8 md:mx-16 px-8 py-12 items-center h-full">
          <h1 className='m-3 text-4xl font-bold text-hung text-center mb-4'>Your Profile</h1>
          <hr />
          <div className='flex md:m-6 gap-6 my-8'>
            <div className='md:h-48 my-7'>
              <img src={useAppstate.photo} className='rounded-full md:h-full md:w-auto w-full' alt="pfp" />
            </div>
            <div className='mx-6 my-6'>
              <p className='md:text-4xl text-2xl font-semibold mb-2 text-hung'>{useAppstate.userName}</p>
              <p className='md:text-xl text-xl mb-2 text-hung/70'>{useAppstate.role}</p>
              <p className='text-black/50'>Contact- {useAppstate.contact}</p>
              <p className='text-black/70 text-lg mb-1'>{useAppstate.address}</p>
              {useAppstate.cperson ? (
                <p className='text-black/70 text-lg mb-1'>{useAppstate.cperson}</p>
              ) : (
                <></>
              )}
              <p className='text-black md:text-xl mb-1'>4.7 Rating</p>
            </div>
          </div>
          <hr />
          <div className='my-4 flex md:justify-evenly justify-between mx-auto'>
            <div className=' bg-hung rounded-xl text-white cursor-pointer'>
              <p className='mx-8 text-2xl py-2 md:mx-16 drop-shadow-lg'>About</p>
            </div>
            <div className=' bg-hung rounded-xl text-white cursor-pointer'>
              <p className='mx-8 text-2xl py-2 md:mx-16 drop-shadow-lg'>Activities</p>
            </div>
          </div>
          <hr />
          {/* Activities */}
          <div className="my-8">
            <h2 className="text-3xl font-semibold text-hung mb-4">Activities</h2>
            {activities.length > 0 ? (
              renderActivities()
            ) : (
              <p>No activities found.</p>
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


