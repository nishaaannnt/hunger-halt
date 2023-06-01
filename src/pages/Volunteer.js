import React, { useContext } from 'react'
import { volunteer,money,rawFood,edibleFood} from '../assets/images/index'
import VolunteerForm from '../components/Volunteer/VolunteerForm';
import { Appstate } from '../App';
import { Card } from '../components/Card';

const Volunteer = () => {
    const useAppstate=useContext(Appstate);
  return (
    <section id="volunteer">
    <div class="volunteer md:flex  justify-center px-12 py-12 items-center h-full mb-16">
        <div class="md:flex justify-center items-center">
            <div class="desc md:w-1/2 md:mr-9 text-center md:text-left">
                <h1 class="md:text-6xl text-5xl py-3 mb-6 text-hung">Be a Volunteer</h1>
                <p class="md:text-lg mb-8">
                Make a difference in your community. Join our dedicated team of volunteers and help us in our mission to fight food waste and hunger. Together, we can make a positive impact by ensuring food reaches those who need it most. Sign up and volunteer today!
                </p>
            </div>
            <div class="image  md:ml-8 md:block hidden">
                <img src={volunteer} class="h-auto " alt=""/>
            </div>
        </div>
    </div>

    {/* // Volunteer Form // */}
    
    <div class="volunteer md:flex md:justify-center md:px-12 md:py-12  md:items-center md:h-full md:mb-16 text-center max-w-fit md:ml-36">
        <div>
            <img src={volunteer} alt="vol" className='md:mr-10  h-80' />
        </div>
        {
            useAppstate.login?
        <VolunteerForm/>:<h1 class="md:text-6xl text-4xl py-3 mb-6  text-hung">Login to be a Volunteer :)</h1>
        }
    </div>



    {/* // VOlunteer Terms and Conditions // */}

    <div class="volunteer md:flex  justify-center px-12 py-12 items-center h-full ">
        <div class="md:flex justify-center items-center">
            <div class="desc md:w-1/2 md:mr-9 ">
                <h1 class="text-5xl py-3 mb-8 text-hung text-center md:text-left">Volunteer Terms and Conditions</h1>
                <p class="md:text-lg mb-8">
                <ol className='list-disc'>
                    <li className='mb-2'>Volunteers must be at least 18 years old or meet any minimum age requirement specified for certain volunteering activities.</li>
                    <li className='mb-2'>Volunteers are expected to commit to their assigned tasks and fulfill the agreed-upon volunteering hours and schedule.</li>
                    <li className='mb-2'>Volunteers must adhere to a code of conduct, including treating all individuals with respect, maintaining confidentiality, and following the organization's policies and guidelines.</li>
                    <li className='mb-2'>Volunteers are responsible for their own health and safety during volunteering activities and must comply with relevant safety guidelines and instructions provided by the organization.</li>
                    <li className='mb-2'>The organization reserves the right to terminate a volunteer's engagement at any time due to misconduct, breach of policies, or any other valid reason.</li>
                 </ol>
                </p>
            </div>
            <div class="image  md:ml-8 mr-8">
                <img src={volunteer} class="h-auto" alt=""/>
            </div>
        </div>
        </div>

        {/* Other ways to donate */}
        <div class="volunteer md:flex flex-col justify-center px-12 py-12 items-center h-full text-center md:mr-11">
        <h1 class="text-5xl py-3 mb-8 text-hung text-center ">Support in different way</h1>
        <div className="donate md:flex justify-between md:w-4/5 my-12 text-white md:text-xl m-auto ">
            <Card title='Donate Money' img={money}/>
            <Card title='Donate Raw Food' img={rawFood}/>
            <Card title='Donate Edible Food' img={edibleFood}/>
        </div>
        </div>
    </section>
  )
}

export default Volunteer;