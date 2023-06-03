
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import VolunteerCard from '../../components/ngo/VolunteerCard';
import { vector1 } from '../../assets/images';

// Page for NGO to view available Volunteers

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
      <div className="home-content md:flex justify-center px-10 md:px-36 md:py-6 mt-8 items-center h-full">
        <div className="home md:flex md:justify-center md:items-center mt-8 mb-8 h-1/2 md:w-auto ">
            <div className="desc md:w-3/4 md:px-10 md:flex justify-center flex-col ">
                <h2 className="md:text-5xl text-3xl mt-8 mb-10 text-hung font-semibold">Find Available Volunteers in Your Area</h2>
                <p className="md:text-lg mb-8 m-auto">
                Welcome to the Volunteer Page! Here, you can explore a dedicated group of volunteers who are committed to delivering surplus food to various locations in need. Our platform connects these volunteers with organizations and individuals looking to distribute surplus food to minimize waste and support communities. On this page, you will find information about available volunteers who are ready to contribute their time and transportation resources to deliver surplus food to designated locations.
                </p>
               
            </div>
            <div className="carousel md:max-h-90 md:flex justify-center items-center  md:ml-8">
                <img src={vector1} className="md:h-80" alt="img" />
            </div>
        </div>
        </div>

      <div className="flex flex-col justify-center md:px-12 py-12 items-center">
        <h1 className="text-hung text-5xl text-center font-semibold">Available Volunteers</h1>
        {loading ? (
          <div className="text-3xl text-hung/60 my-24">Loading...</div>
        ) : (volunteers&&(volunteers.length>0)?
          <div className="w-full md:my-8">
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
              :<div  className='md:p-48 py-24 w-full'><h1 className='text-center md:text-4xl text-2xl text-hung/80 '>No Vounteers available.</h1></div>
        )}
      </div>
    </div>
  );
};


export default NgoVolunteer;