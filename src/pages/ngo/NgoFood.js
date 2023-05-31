import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../../firebase/firebase'
import Foodcard from '../../components/ngo/Foodcard';

const NgoFood = () => {

    // food object
    const [food,setFood]=useState();
    const [loading,setloading]=useState(true);

    // once page is loaded try fetching
    useEffect(() => {
        async function foo(){
            const q = query(collection(db,'requests'), where("status", "==","new"));
            const querySc=await getDocs(q);
            const fetched=querySc.docs.map(doc => doc.data());
            setFood(fetched);
            setloading(false)
            console.log(food)
        }
        foo()
    }, [])
    
  return (
    <div>
        <div className=" flex flex-col justify-center md:px-12 py-12 items-center ">
            <h1 className='text-hung text-4xl  font-semibold'>Available Food Suppliers</h1>
            {/* Map through food and display all the req objects*/}
            {loading?<div className='text-3xl text-hung/60 my-24'>Loading...</div>
            :
            <div className='w-full my-8'>
                {food.map(data=>(
                    <div key={data?.id}>
                    <Foodcard timestamp={data.timestamp.toDate().toLocaleString()} email={data?.email} address={data?.provider.address} foodType={data?.foodType} contactPerson={data?.provider.contactName} contactNo={data?.provider.contactNo} quantity={data?.quantity}/>
                    </div>
                ))}
            </div>
}
        </div>
    </div>
  )
}

export default NgoFood