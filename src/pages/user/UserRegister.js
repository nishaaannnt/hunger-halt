import React, { useState } from 'react';
import RegisterProvider from '../../components/UserProvider/RegisterProvider'
import RegisterVolunteer from '../../components/UserVolunteer/RegisterVolunteer'
import RegisterNGO from '../../components/UserNGO/RegisterNGO'

const UserRegister = () => {
  const [userType, setUserType] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
  };

  return (
    <div className="flex  flex-col justify-center px-12 py-12 items-center h-full mb-16">
      <div className='w-1/2'>
      <h2 className="text-5xl  py-3 mb-8 text-hung items-center justify-center">User Registration</h2>
          <label htmlFor="userType" className="block mb-2">User Type:</label>
          <select id="userType" value={userType} onChange={(e) => setUserType(e.target.value)} className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
          > <option value=""> --Select-- </option>
            <option value="provider">Provider</option>
            <option value="volunteer">Volunteer</option>
            <option value="ngo">NGO</option>
          </select>
      </div>
      <div className='w-1/2'>
        {
          userType==='provider'?
          <RegisterProvider/>: 
          <p></p>
        }{
          userType==='volunteer'?
          <RegisterVolunteer/>: 
          <p></p>
        }{
          userType==='ngo'?
          <RegisterNGO/>: 
          <p></p>
        }
      </div>
    </div>
  );
};

export default UserRegister;
