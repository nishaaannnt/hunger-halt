import React, {useState} from 'react'

const RegisterProvider = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [userType, setUserType] = useState('provider'); // Default user type

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
  };

  return (
    <div className=''>
    <h2 className="text-3xl  py-3 mb-8 text-hung items-center justify-center">Provider Registration</h2>
    <form onSubmit={handleFormSubmit} className='mx-auto mt-8 justify-center items-center'>
      <label htmlFor="fullName" className="block mb-2">Full Name:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <label htmlFor="email" className="block mb-2">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <label htmlFor="password" className="block mb-2">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <label htmlFor="phone" className="block mb-2">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <label htmlFor="address" className="block mb-2">Address:</label>
      <textarea
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      ></textarea>

      <label htmlFor="age" className="block mb-2">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        className="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"
      />

      <button
        type="submit"
        className="bg-hung hover:bg-hung/60 cursor-pointer text-white font-bold py-2 px-4 rounded-xl mt-4 w-full"
      >
        Register
      </button>
    </form>
    </div>
  )
}

export default RegisterProvider