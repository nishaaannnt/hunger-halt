import React, {useState} from 'react'
import { loginVector } from '../../assets/images';

const NgoRegister = () => {

  const [fullName, setFullName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [userType, setUserType] = useState('provider'); // Default user type

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
  };

    //UI of NGO registration   

  return (
    <div className='w-full flex gap-5 m-auto justify-center my-8'>
      <div className='w-1/2'>
          <img src={loginVector} alt="" />
        </div>
      <div className='w-1/3'>
    <h2 className="text-3xl  py-3 mb-8 text-hung items-center justify-center">NGO Registration</h2>
    <form onSubmit={handleFormSubmit} className='mx-auto  mt-8 justify-center items-center'>
      <label htmlFor="fullName" className="block mb-2">Organization Name:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder='Eg. Khush Bharat Pratibha'
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

    <label htmlFor="fullName" className="block mb-2">Contact Person Name:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
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
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <label htmlFor="password" className="block mb-2">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter Your Password'
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

    <label htmlFor="cpassword" className="block mb-2">Confirm Password:</label>
      <input
        type="cpassword"
        id="cpassword"
        value={cpassword}
        onChange={(e) => setcPassword(e.target.value)}
        placeholder='Confirm Your Password'
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <label htmlFor="phone" className="block mb-2">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
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

export default NgoRegister