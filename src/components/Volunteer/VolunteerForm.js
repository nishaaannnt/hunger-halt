import React, { useState,useContext } from 'react';
import { Appstate } from '../../App'
import { doc, setDoc,serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

// Form for user to apply for volunteering

const VolunteerForm = () => {

  const useAppstate=useContext(Appstate);
  const volForm=document.querySelector('.volForm');
  const [timeslot,setTimeslot]=useState();
  const [day,setDay]=useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get the current logged-in user
      if (useAppstate.login) {
        const docId = useAppstate.email;
        let userType;
        if(useAppstate.role=='NGO'){
          userType='NGO'
        }else{
          userType='volunteer'
        }

        await setDoc(doc(db,'users',docId),
          { volDay:day,
            timeSlot:timeslot,
            userType,
            status:'free',
            voltimestamp: serverTimestamp() // Include the user's email
          },
          { merge: true }
        ).then(()=>{volForm.reset() });
        const done=document.querySelector('.done')
        done.append('Your Volunteering details is submitted!')
        setTimeout(() => {
        done.innerHTML='';
        }, 3000);
      } else {
        // User is not logged in
        
        const issue=document.querySelector('.issue')
        issue.append('Please Login to continue !')
        setTimeout(() => {
        issue.innerHTML='';
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('An error occurred while submitting the request. Please try again.');
    }
  };

  return (
    <div className='md:w-1/2 md:ml-16 mx-8 '>
        <h2 class="md:text-5xl text-3xl py-3 mb-8 text-hung ">Volunteer Application Form</h2>
        <form onSubmit={handleSubmit} class="volForm flex-col flex mt-8">

            <label for="availability" class="block mb-2">Availability:</label>
            <input placeholder="e.g., 4:00pm to 8:00pm" onChange={(e) => setTimeslot(e.target.value)}
            pattern="\d{1,2}:\d{2}(am|pm)\sto\s\d{1,2}:\d{2}(am|pm)" id="availability" name="availability"  required class="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"></input><br/>

            <label for="volunteering" class="block mb-2">Day for volunteering</label>
            <select className=' border border-hung/40 rounded-2xl px-3 py-2 mb-4' onChange={(e) => setDay(e.target.value)}>
              <option value="">--Select Day--</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
            <div className='issue text-xl mt-2 justify-center items-center flex text-red-500 '></div>
      <     div className='done text-xl mt-2 justify-center items-center flex text-green-600 '></div>
            <input type="submit"  value="Submit Application" class="bg-hung hover:bg-hung/60 cursor-pointer text-white font-bold py-2 px-4 rounded-xl mt-4"/>
        </form>
        </div>
  )
}

export default VolunteerForm;