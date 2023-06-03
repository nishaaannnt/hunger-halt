import React, { useContext } from 'react'
import { volunteer,money,rawFood,edibleFood, vector1} from '../assets/images/index'
import VolunteerForm from '../components/Volunteer/VolunteerForm';
import { Appstate } from '../App';
import { Card } from '../components/Card';

const Volunteer = () => {
    const useAppstate=useContext(Appstate);
  return (
    <section id="volunteer">
    <div className="volunteer md:flex  justify-center px-12 py-12 items-center h-full mb-16">
        <div className="md:flex justify-center items-center">
            <div className="desc md:w-1/2 md:mr-9 text-center md:text-left">
                <h1 className="md:text-6xl text-5xl py-3 mb-6 text-hung">Be a Volunteer</h1>
                <p className="md:text-lg mb-8">
                Make a difference in your community. Join our dedicated team of volunteers and help us in our mission to fight food waste and hunger. Together, we can make a positive impact by ensuring food reaches those who need it most. Sign up and volunteer today!
                </p>
            </div>
            <div className="image  md:ml-8 md:block">
                <img src={volunteer} className="h-auto " alt=""/>
            </div>
        </div>
    </div>


    {/* // Volunteer Form // */}
   
    <div className="volunteer md:flex md:justify-center md:px-12 md:py-12  md:items-center md:h-full md:mb-16  max-w-fit md:ml-36">
        <div className='md:block hidden'>
            <img src={vector1} alt="vol" className='md:mr-10  h-96' />
        </div>
        {
            useAppstate.login?
        <VolunteerForm/>:<h1 className="md:text-6xl text-3xl py-3 mb-6 md:mx-auto mx-7 text-hung">Login to be a Volunteer :)</h1>
        }
    </div>






    {/* // VOlunteer Terms and Conditions // */}


    <div className="volunteer md:flex  justify-center px-12 py-12 items-center h-full ">
        <div className="md:flex justify-center items-center">
            <div className="desc md:w-1/2 md:mr-9 ">
                <h1 className="md:text-5xl text-3xl py-3 mb-8 text-hung text-center md:text-left">Volunteer Terms and Conditions</h1>
                <div className="md:text-lg mb-8">
                <ol className='list-disc px-2 my-4'>
                    <li className='mb-2'>Volunteers must be at least 18 years old or meet any minimum age requirement specified for certain volunteering activities.</li>
                    <li className='mb-2'>Volunteers are expected to commit to their assigned tasks and fulfill the agreed-upon volunteering hours and schedule.</li>
                    <li className='mb-2'>Volunteers must adhere to a code of conduct, including treating all individuals with respect, maintaining confidentiality, and following the organization's policies and guidelines.</li>
                    <li className='mb-2'>Volunteers are responsible for their own health and safety during volunteering activities and must comply with relevant safety guidelines and instructions provided by the organization.</li>
                    <li className='mb-2'>The organization reserves the right to terminate a volunteer's engagement at any time due to misconduct, breach of policies, or any other valid reason.</li>
                 </ol>
                </div>
            </div>
            <div className="image  md:ml-8 mr-8">
                <img src={volunteer} className="h-auto" alt=""/>
            </div>
        </div>
        </div>


        {/* Other ways to donate */}
        <div className="volunteer md:flex flex-col justify-center px-12 md:py-12  items-center h-full text-center md:mr-11">
        <h1 className="md:text-5xl text-3xl py-3 mb-8 text-hung text-center ">Support in different way</h1>
        <div className="donate md:flex justify-between md:w-4/5  my-12 text-white md:text-xl" id='donate'>
            <div className='md:flex-none flex justify-center'>
            <Card title='Donate Edible Food' img={edibleFood} tow='/user/request'/></div>
            <div className='md:flex-none flex justify-center '>
            <Card title='Donate Raw Food' img={rawFood} tow='/user/request'/></div>
            <div className='md:flex-none flex  '>
            <Card title='Sponsor Us' img={money} tow='/donate/money'/></div>
        </div>
        </div>
    </section>

  )
}

export default Volunteer;