
// import React, { useContext, useEffect, useState } from 'react';
// import { Appstate } from '../App';
// import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebase/firebase';


// const Profile = () => {
//   const useAppstate = useContext(Appstate);
//   const [activities, setActivities] = useState([]);
//   const [renderedActivities, setRenderedActivities] = useState([]);


//   const fetchActivities = async () => {
//     try {
//       let q;
//       if (useAppstate.role === 'volunteer') {
//         q = query(collection(db, 'users'), where('email', '==', useAppstate.email));
//       } else {
//         q = query(collection(db, 'requests'), where('email', '==', useAppstate.email));
//       }


//       const querySnapshot = await getDocs(q);
//       const fetchedActivities = querySnapshot.docs.map((doc) => doc.data());
//       setActivities(fetchedActivities);
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   const fetchNGODetails = async (acceptedById) => {
//     try {
//       const userRef = doc(db, 'users', acceptedById);
//       const userDoc = await getDoc(userRef);
//       if (userDoc.exists()) {
//         return userDoc.data();
//       } else {
//         console.log('User not found');
//         return null;
//       }
//     } catch (error) {
//       console.log(error);
//       return null;
//     }
//   };


//   const renderActivities = async () => {
//     const activityPromises = activities.map(async (item, index) => {
//       const { email, timestamp, acceptedById,status,foodType,quantity} = item;
//       // const contact=item.provider.contactName;
//       const ngoDetails = await fetchNGODetails(acceptedById);
      
//       return (
//         <div key={index}>
//           <p>Email: {email}</p>
//           <p>Timestamp: {timestamp && timestamp.toDate().toLocaleString()}</p>
//           {/* <p>Provider: {contact}</p> */}
//           <p>Status: {status}</p>
//           <p>Food Type: {foodType}</p>
//           <p>Quantity: {quantity}</p>
//           <p>Accepted By: {acceptedById?acceptedById:'Not accepted yet'}</p>
//           {ngoDetails&&useAppstate.role=='user' ? (
//             <div>
//               <p>NGO Name: {ngoDetails.displayName}</p>
//               <p>NGO Email: {ngoDetails.email}</p>
//               <p>NGO Phone: {ngoDetails.phone}</p>
//               <p>NGO Address: {ngoDetails.address}</p>
//               {/* Display other NGO details here */}
//             </div>
//           ) : (
//             <p>NGO Details Not Found</p>
//           )}
//         </div>
//       );
//     });


//     const resolvedActivities = await Promise.all(activityPromises);
//     setRenderedActivities(resolvedActivities);
//   };


//   // Fetch activities when component mounts
//   useEffect(() => {
//     fetchActivities();
//   }, [useAppstate.email]);


//   // Render activities once they are fetched
//   useEffect(() => {
//     renderActivities();
//   }, [activities]);


//   return (
//     <div>
//       {useAppstate.login ? (
//         <div className="home-content my-8 md:mx-16 px-8 md:py-12 py-6 items-center h-full">
//           <h1 className='m-3 text-4xl font-bold text-hung text-center mb-4'>Your Profile</h1>
//           <hr />
//           <div className='flex md:m-6 gap-6 my-8'>
//             <div className='md:h-48 my-7'>
//               <img src={useAppstate.photo} className='rounded-full md:h-full md:w-auto w-full' alt="pfp" />
//             </div>
//             <div className='mx-6 my-6'>
//               <p className='md:text-4xl text-2xl font-semibold mb-2 text-hung'>{useAppstate.userName}</p>
//               <p className='md:text-xl text-xl mb-2 text-hung/70'>{useAppstate.role}</p>
//               <p className='text-black/50'>Contact- {useAppstate.contact}</p>
//               <p className='text-black/70 text-lg mb-1'>{useAppstate.address}</p>
//               {useAppstate.cperson ? (
//                 <p className='text-black/70 text-lg mb-1'>{useAppstate.cperson}</p>
//               ) : (
//                 <></>
//               )}
//               <p className='text-black md:text-xl mb-1'>4.7 Rating</p>
//             </div>
//           </div>
//           <hr />
//           <div className='my-4 flex md:justify-evenly justify-between mx-auto'>
//                 <p className='text-hung font-semibold text-2xl py-2 md:mx-16 drop-shadow-lg mx-auto'>Your Activities</p>
//             </div>
//           <hr />
//           {/* Activities */}
//           <div className="my-8">
//             {renderedActivities.length > 0 ? (
//               <div>{renderedActivities}</div>
//             ) : (
//               <p>No activities found.</p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };


// export default Profile;




import React, { useContext, useEffect, useState } from 'react';
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
       const { email, timestamp, acceptedById,status,foodType,quantity} = item;
       let contact,contactNo;
      if(useAppstate.role=='user'){
         contact=item.provider.contactName;
         contactNo=item.provider.contactNo;
      }
       const ngoDetails = await fetchNGODetails(acceptedById);
      return (
        <div key={index}>
        <p>Email: {email}</p>
        <p>Timestamp: {timestamp && timestamp.toDate().toLocaleString()}</p>
        {
        useAppstate.role=='user'?<>
        <p>Provider: {contact}</p>
        <p>Provider Phone: {contactNo}</p>
        <p>Status: {status}</p>
        <p>Food Type: {foodType}</p>
        <p>Quantity: {quantity}</p></>:<></>
        }
        <p>Accepted By: {acceptedById?acceptedById:'Not accepted yet'}</p>
        {ngoDetails&&(useAppstate.role=='user'||useAppstate.role=='volunteer') ? (
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
               {useAppstate.cperson&&useAppstate.role=='NGO' ? (
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
            {renderedActivities.length > 0 ? (
              <div>{renderedActivities}</div>
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


