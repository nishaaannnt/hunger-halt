import React, { useState,useContext } from 'react';
import { Appstate } from '../../App'
import { doc, setDoc,serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { loginVector, vector1 } from '../../assets/images';

// User to avail food request form

const UserRequest = () => {
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [contactName, setContactName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [reqSend, setreqSend] = useState(false);
  const useAppstate=useContext(Appstate);

  const reqForm=document.querySelector('.reqForm')


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get the current logged-in user
      if (useAppstate.login) {
        // Set the document ID as the user's UID
        const docId = useAppstate.email;
        // Use the set() method with merge: true to update the document
        await setDoc(doc(db,'requests',docId),
          {
            provider: {
              address,
              contactNo,
              contactName,
            },
            foodType,
            quantity,
            email:docId,
            status:'new',
            acceptedBy:'',
            acceptedById:'',
            timestamp: serverTimestamp() // Include the user's email
          },
          { merge: true }
        ).then(()=>{reqForm.reset()
        setreqSend(true);
        });
        setAddress('');
        setContactNo('');
        setContactName('');
        setFoodType('');
        setQuantity('');


        const done=document.querySelector('.done')
        done.append('Request is Submitted!')
        setTimeout(() => {
        done.innerHTML='';
        }, 3000);
      } else {
        // User is not logged in
        
        const issue=document.querySelector('.issue')
        issue.append('Please Login to submit Request!')
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

    <div className='flex md:px-16'>
        <div className="md:block hidden w-1/2 justify-center items-center">
                <img src={loginVector} className="md:" alt="img" />
        </div>
    <div className=' mx-8 md:mx-auto md:w-1/3 my-6'>
      <h2 className="text-5xl py-3 text-hung ">Food Request Form</h2>
      <form onSubmit={handleFormSubmit} className="reqForm mx-auto mt-8 justify-center items-center">
        <label htmlFor="address" className="block mb-2">
          Address:
        </label>
        <input
          type="text"
          placeholder='Enter Address'
          required
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
         
          className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
        />


        <label htmlFor="contactNo" className="block mb-2">
          Contact Number:
        </label>
        <input
          type="text"
          pattern="[0-9]{10}"
          placeholder='Enter your contact number'
          required
          id="contactNo"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
         
          className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
        />


        <label htmlFor="contactName" className="block mb-2">
          Contact Name:
        </label>
        <input
          type="text"
          placeholder='Enter the contact person name'
          required
          id="contactName"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
         
          className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
        />


        <label htmlFor="foodType" className="block mb-2">
          Food Type:
        </label>
        <input
          type="text"
          placeholder='eg.Raw Food,Cooked Food,Party Food'
          required
          id="foodType"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
         
          className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
        />


        <label htmlFor="quantity" className="block mb-2">
          Quantity:
        </label>
        <input
          type="text"
          placeholder='eg. 15kg, For 10 people..'
          required
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
         
          className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
        />


        <div className='issue text-xl mt-2 justify-center items-center flex text-red-500 '></div>
      <div className='done text-xl mt-2 justify-center items-center flex text-green-600 '></div>
        <button
          type="submit"
          className="bg-hung hover:bg-hung/60 cursor-pointer text-white font-bold py-2 px-4 rounded-xl mt-4 w-full"
        >
          Submit Request
        </button>
      </form>
      </div>
    </div>
  );
};


export default UserRequest;


