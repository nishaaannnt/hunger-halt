
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import VolunteerCard from '../../components/ngo/VolunteerCard';


const NgoVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const q = query(collection(db, 'users'), where('userType', '==', 'volunteer'), where('status', '==', 'free'));
        const querySnapshot = await getDocs(q);
        const fetchedVolunteers = querySnapshot.docs.map((doc) => doc.data());
        setVolunteers(fetchedVolunteers);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };


    fetchVolunteers();
  }, []);


  return (
    <div>
      <div className="flex flex-col justify-center md:px-12 py-12 items-center">
        <h1 className="text-hung text-4xl font-semibold">Available Volunteers</h1>
        {loading ? (
          <div className="text-3xl text-hung/60 my-24">Loading...</div>
        ) : (volunteers&&(volunteers.length>0)?
          <div className="w-full my-8">
            {volunteers.map((data) => (
              <VolunteerCard
                key={data?.email}
                // timestamp={data.timestamp.toDate().toLocaleString()}
                email={data.email}
                name={data.fullName}
                contactNo={data.phone}
                day={data.volDay}
                timeSlot={data.timeSlot}
              />
              ))}
              </div>
              :<div  className='md:p-48 w-full'><h1 className='text-center md:text-4xl text-2xl text-hung/80 '>No Vounteers available.</h1></div>
        )}
      </div>
    </div>
  );
};


export default NgoVolunteer;