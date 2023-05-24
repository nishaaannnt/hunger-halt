import React from 'react'

const VolunteerForm = () => {
  return (
    <div className='w-1/2 ml-8'>
        <h2 class="text-5xl py-3 mb-8 text-hung items-center justify-center">Volunteer Application Form</h2>
        <form action="/submit_volunteer_application" method="POST" class=" mx-auto mt-8 justify-center items-center">
            <label for="full_name" class="block mb-2">Full Name:</label>
            <input type="text" id="full_name" name="full_name" placeholder='Enter Your Name' required class="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>

            <label for="email" class="block mb-2">Email:</label>
            <input type="email" id="email" name="email" placeholder='Enter Your Email' required class="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>

            <label for="phone" class="block mb-2">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder='Enter Your Phone Number' required class="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>

            <label for="age" class="block mb-2">Age:</label>
            <input type="number" id="age" name="age" placeholder='Enter Your Age' required class="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"/><br/>

            <label for="availability" class="block mb-2">Availability:</label>
            <textarea id="availability" name="availability" placeholder='Enter Your Availability' required class="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"></textarea><br/>

            <label for="experience" class="block mb-2">Relevant Experience:</label>
            <textarea id="experience" name="experience" placeholder='Enter Your Experience' required class="w-full border border-hung/40 rounded-2xl px-3 py-2 mb-4"></textarea><br/>

            <input type="submit" value="Submit Application" class="bg-hung hover:bg-hung/60 cursor-pointer text-white font-bold py-2 px-4 rounded-xl mt-4"/>
        </form>
        </div>
  )
}

export default VolunteerForm;