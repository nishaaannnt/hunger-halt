import React, { useContext } from 'react'
import { volunteer,money,rawFood,edibleFood} from '../assets/images/index'
import VolunteerForm from '../components/Volunteer/VolunteerForm';
import { Appstate } from '../App';
import { Card } from '../components/Card';

const Volunteer = () => {
    const useAppstate=useContext(Appstate);
  return (
    <section id="volunteer">
    <div class="volunteer flex  justify-center px-12 py-12 items-center h-full mb-16">
        <div class="flex justify-center items-center">
            <div class="desc w-1/2 mr-9">
                <h1 class="text-6xl py-3 mb-6 text-hung">Be a Volunteer</h1>
                <p class="text-lg mb-8">
                Make a difference in your community. Join our dedicated team of volunteers and help us in our mission to fight food waste and hunger. Together, we can make a positive impact by ensuring food reaches those who need it most. Sign up and volunteer today!
                </p>
            </div>
            <div class="image  ml-8">
                <img src={volunteer} class="h-auto" alt=""/>
            </div>
        </div>
    </div>

    {/* // Volunteer Form // */}
    
    <div class="volunteer flex justify-center px-12 py-12 items-center h-full mb-16">
        <div>
            <img src={volunteer} alt="vol" className='mr-10' />
        </div>
        {
            useAppstate.login?
        <VolunteerForm/>:<h1 class="text-6xl py-3 mb-6 text-hung">Login to be a Volunteer :)</h1>
        }
    </div>



    {/* // VOlunteer Terms and Conditions // */}

    <div class="volunteer flex  justify-center px-12 py-12 items-center h-full">
        <div class="flex justify-center items-center">
            <div class="desc w-1/2 mr-9">
                <h1 class="text-5xl py-3 mb-8 text-hung">Volunteer Terms and Conditions</h1>
                <p class="text-lg mb-8">
                <ol className='list-disc '>
                    <li className='mb-2'>Volunteers must be at least 18 years old or meet any minimum age requirement specified for certain volunteering activities.</li>
                    <li className='mb-2'>Volunteers are expected to commit to their assigned tasks and fulfill the agreed-upon volunteering hours and schedule.</li>
                    <li className='mb-2'>Volunteers must adhere to a code of conduct, including treating all individuals with respect, maintaining confidentiality, and following the organization's policies and guidelines.</li>
                    <li className='mb-2'>Volunteers are responsible for their own health and safety during volunteering activities and must comply with relevant safety guidelines and instructions provided by the organization.</li>
                    <li className='mb-2'>The organization reserves the right to terminate a volunteer's engagement at any time due to misconduct, breach of policies, or any other valid reason.</li>
                 </ol>
                </p>
            </div>
            <div class="image  ml-8">
                <img src={volunteer} class="h-auto" alt=""/>
            </div>
        </div>
        </div>

        {/* Other ways to donate */}
        <div class="volunteer flex flex-col justify-center px-12 py-12 items-center h-full">
        <h1 class="text-5xl py-3 mb-8 text-hung">Support in different way</h1>
        <div className="donate flex justify-between w-4/5 my-12 text-white text-xl m-auto">
            <Card title='Donate Money' img={money}/>
            <Card title='Donate Raw Food' img={rawFood}/>
            <Card title='Donate Edible Food' img={edibleFood}/>
        </div>
        </div>
    </section>
  )
}

export default Volunteer;