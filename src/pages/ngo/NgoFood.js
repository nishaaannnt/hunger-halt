

import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import Foodcard from '../../components/ngo/Foodcard';


const NgoFood = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchFood = async () => {
      try {
        const q = query(collection(db, 'requests'), where("status", "==", "new"));
        const querySnapshot = await getDocs(q);
        const fetchedFood = querySnapshot.docs.map(doc => doc.data());
        setFood(fetchedFood);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };


    fetchFood();
  }, []);


  return (
    <div>
      <div className="flex flex-col justify-center md:px-12 py-12 items-center">
        <h1 className="text-hung text-4xl font-semibold">Available Food Suppliers</h1>
        {loading ? (
          <div className="text-3xl text-hung/60 my-24">Loading...</div>
        ) : (
          <div className="w-full my-8">
            {food && food.length > 0 ? (
              food.map(data => (
                <div key={data?.email}>
                  <Foodcard
                    timestamp={data.timestamp.toDate().toLocaleString()}
                    email={data?.email}
                    address={data?.provider?.address}
                    foodType={data?.foodType}
                    contactPerson={data?.provider?.contactName}
                    contactNo={data?.provider?.contactNo}
                    quantity={data?.quantity}
                  />
                </div>
              ))
            ) : (
              <div  className='md:p-48 w-full'><h1 className='text-center md:text-4xl text-2xl text-hung/80 '>No available food suppliers found.</h1></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


export default NgoFood;