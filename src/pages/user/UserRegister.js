import React, {useState,useContext} from 'react'
import { Appstate } from '../../App'
import { loginVector } from '../../assets/images';
import { useNavigate} from 'react-router-dom'
import { setDoc,doc,serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

// Register User

const UserRegister = () => {
  const navigate= useNavigate();
  const useAppstate=useContext(Appstate); 
    const [fullName, setFullName] = useState(useAppstate.userName);
    const [email, setEmail] = useState(useAppstate.email);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

  const userReg=document.querySelector('.userRegister')
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    const user={
      name:userReg.fullName.value,
      email:userReg.email.value,
      address:userReg.address.value,
      phone:userReg.phone.value
    }
    // Insert Code
    try{
    setDoc(doc(db,'users',user.email),{
      fullName:user.name,
      email:user.email,
      address:user.address,
      phone:user.phone,
      timestamp: serverTimestamp(),
      userType:'user'
     }).then(()=>{
       useAppstate.setuserName(user.name);
       useAppstate.setEmail(user.email);
       useAppstate.setAddress(user.address);
       useAppstate.setContactNo(user.phone);
       useAppstate.setLogin(true);
       userReg.reset();
       navigate('/')
  })
}catch(err){
  console.log(err);
}
  };

  return (
    <div className='w-full flex gap-5 m-auto justify-center my-16'>
      <div className='hidden md:block w-1/2'>
          <img src={loginVector} alt="" />
        </div>
      <div className='md:w-1/3'>
    <h2 className="text-3xl  py-3 mb-8 text-hung items-center justify-center">User Registration</h2>
    <form onSubmit={handleFormSubmit} className='userRegister mx-auto  mt-8 justify-center items-center'>
      <label htmlFor="fullName" className="block mb-2">Full Name:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder='Eg. Sundar Pichai'
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <label htmlFor="email" className="block mb-2">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Your '
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <label htmlFor="phone" className="block mb-2">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        pattern="[0-9]{10}"
        onChange={(e) => setPhone(e.target.value)}
        placeholder='Enter Your '
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <label htmlFor="address" className="block mb-2">Address:</label>
      <textarea
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder='Enter Your '
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      ></textarea>

      <button
        type="submit"
        className="bg-hung hover:bg-hung/60 cursor-pointer text-white font-bold py-2 px-4 rounded-xl mt-4 w-full"
      >
        Register
      </button>
    </form>
    </div>
    </div>
  )
}

export default UserRegister