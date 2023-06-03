
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import Foodcard from '../../components/ngo/Foodcard';
import { foodDonate } from '../../assets/images';

// Page for NGO to view available food

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
      <div className="home-content md:flex justify-center px-10 md:px-36 md:py-6 mt-8 items-center h-full">
        <div className="home md:flex md:justify-center md:items-center mt-8 mb-8 h-1/2 md:w-auto ">
            <div className="desc md:w-3/4 md:px-6 md:flex justify-center flex-col ">
                <h2 className="md:text-5xl text-3xl mt-8 mb-10 text-hung font-semibold">Explore Available Food in Your Area</h2>
                <p className="md:text-lg mb-8 m-auto">
                Welcome to the Available Food in Your Area page! We are pleased to provide you with information about the food currently available in your locality. Our platform connects individuals and organizations offering surplus food with those who can benefit from it. Please note that the availability of food is subject to change, so we recommend checking back frequently for updates. See Below.
                </p>
               
            </div>
            <div className="carousel md:max-h-90 md:flex justify-center items-center  md:ml-8">
                <img src={foodDonate} className="md:h-80" alt="img" />
            </div>
        </div>
    </div>
      <div className="flex flex-col justify-center md:px-12 md:py-12 py-8 items-center">
        <h1 className="text-hung text-5xl text-center font-semibold">Available Food Suppliers</h1>
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
              <div  className='md:p-48 md:mt-0 mt-12 w-full'><h1 className='text-center md:text-4xl text-2xl text-hung/80 '>No available food suppliers found.</h1></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


export default NgoFood;