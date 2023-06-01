import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../../firebase/firebase'
import VolunteerCard from '../../components/ngo/VolunteerCard';

const NgoVolunteer = () => {

    // food object
    const [vol,setVol]=useState();
    const [loading,setloading]=useState(true);

    // once page is loaded try fetching
    useEffect(() => {
        async function foo(){
            const q = query(collection(db,'users'),where("userType","==","volunteer"), where("status", "==","free"));
            const querySc=await getDocs(q);
            const fetched=querySc.docs.map(doc => doc.data());
            setVol(fetched);
            setloading(false)
            console.log(vol)
        }
        foo()
    }, [])
    
  return (
    <div>
        <div className=" flex flex-col justify-center md:px-12 py-12 items-center ">
            <h1 className='text-hung text-4xl  font-semibold'>Available Volunteers</h1>
            {/* Map through food and display all the req objects*/}
            {loading?<div className='text-3xl text-hung/60 my-24'>Loading...</div>
            :
            <div className='w-full my-8'>
                {vol.map(data=>(
                    <div key={data?.id}>
                    <VolunteerCard timestamp={data.timestamp.toDate().toLocaleString()} email={data.email} name={data.fullName} contactNo={data.phone} day={data.volDay} timeSlot={data.timeSlot}/>
                    </div>
                ))}
            </div>
}
        </div>
    </div>
  )
}

export default NgoVolunteer