import React, {useState,useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import { Appstate } from '../../App';
import { loginVector } from '../../assets/images';
import { setDoc,doc,serverTimestamp } from 'firebase/firestore';
import { db} from '../../firebase/firebase';

//Register NGO here 

const NgoRegister = () => {

  const navigate= useNavigate();
  const useAppstate=useContext(Appstate); 
  const [fullName, setFullName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState(useAppstate.email);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');// Default user type

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const ngoReg=document.querySelector('.ngoReg');

    const user={
      orgname:ngoReg.orgName.value,
      cname:ngoReg.contactName.value,
      email:ngoReg.email.value,
      address:ngoReg.address.value,
      phone:ngoReg.phone.value
    }
    try{
    setDoc(doc(db,'users',user.email),{
      displayName:user.orgname,
      contactPerson:user.cname,
      email:user.email,
      address:user.address,
      phone:user.phone,
      timestamp: serverTimestamp(),
      userType:'NGO'
     }).then(()=>{
       useAppstate.setuserName(user.orgname);
       useAppstate.setEmail(user.email);
       useAppstate.setcperson(user.cname);
       useAppstate.setAddress(user.address);
       useAppstate.setContactNo(user.phone);
       useAppstate.setLogin(true);
      //  useAppstate.setAccountCreated(true);
       ngoReg.reset();
       navigate('/')
  })
}catch(err){
  console.log(err);
}
}

    //UI of NGO registration   

  return (
    <div className='w-full flex gap-5 m-auto justify-center my-8'>
      <div className='md:block hidden w-1/2'>
          <img src={loginVector} alt="" />
        </div>
      <div className='md:w-1/3'>
    <h2 className="text-3xl  py-3 mb-8 text-hung items-center justify-center">NGO Registration</h2>
    <form onSubmit={handleFormSubmit} className='ngoReg mx-auto  mt-8 justify-center items-center'>
      <label htmlFor="orgName" className="block mb-2">Organization Name:</label>
      <input
        type="text"
        id="orgName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder='Eg. Khush Bharat Pratibha'
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

    <label htmlFor="contactName" className="block mb-2">Contact Person Name:</label>
      <input
        type="text"
        id="contactName"
        
        onChange={(e) => setContactPerson(e.target.value)}
        placeholder='Eg. Sundar Pichai'
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <label htmlFor="email" className="block mb-2">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Your organization email'
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
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

export default NgoRegister;