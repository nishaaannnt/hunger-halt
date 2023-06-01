import React from 'react'
import { goodHealth, zeroHunger,volunteer, donate, ngo, deliver, happy } from '../../assets/images'
import { useNavigate } from 'react-router-dom'

// Mostly the static part of home page is here

export const Homebanner = () => {

    const navigate=useNavigate();
    // Navigate is used to redirect to navigate page
    const handleVolunteer=()=>{
        navigate('/volunteer')
    }
  return (
    <>
    <section id="unGoals">
            <div className="unGoals flex flex-col  justify-center px-12 py-12 items-center h-full my-6">
                <div className="heading">
                    <h1 className="md:text-6xl md:py-3 md:mb-6 text-5xl text-center text-hung">United Nation Goals</h1>
                </div>
                <div className="goals md:flex md:justify-evenly mt-10">
                    <div className="flex flex-col items-center justify-center">
                        <img src={zeroHunger} className="md:h-72 md:mr-8 rounded-3xl h-40 mb-3" alt="no"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src={goodHealth} className="md:h-72 md:ml-8 h-40 rounded-3xl" alt="no"/>
                    </div>
                </div>
            </div>
        </section>
        <section id="volunteer">
            <div className="volunteer flex  justify-center px-12 py-12 items-center h-full">
                <div className="md:flex justify-center items-center">
                    <div className="image  mr-8">
                        <img src={volunteer} className="h-auto" alt=""/>
                    </div>
                    <div className="desc md:w-1/2 md:ml-9 text-center md:text-left">
                        <h1 className="md:text-6xl text-5xl md:py-5 py-6 mb-6 text-hung">Be a Volunteer</h1>
                        <p className="md:text-lg  mb-8">
                            Around one-third of food produced for human consumption is wasted
                            annually, while an estimated 690 million people suffer from hunger
                            daily. These problems are interlinked and require a comprehensive
                            approach.
                        </p>
                        <a href="#" onClick={handleVolunteer}
                            className="bg-hung text-white px-6 py-2 rounded-lg hover:bg-emerald-700 mt-4 transition">Volunteer</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="working">
            <div className="working flex flex-col  justify-center px-12 py-12 items-center h-full my-6">
                <div className="heading text-center">
                    <h1 className="md:text-6xl md:py-3 md:mb-6 md:px-12 text-5xl py-2 text-hung">How it Works</h1>
                </div>
                <div className="flow md:flex justify-evenly mt-8 text-center">
                    <div className="items-center justify-center flex flex-col">
                        <img src={donate} className="md:h-48 px-6 py-6" alt=""/>
                        <p className="px-6 font-medium md:font-normal">Choose what you want to donate</p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        <img src={ngo} className="md:h-48 px-6 py-6" alt=""/>
                        <p className="px-6 font-medium md:font-normal">Contact a NGO or submit your request</p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        <img src={deliver} className="md:h-48 px-6 py-6" alt=""/>
                        <p className="px-6 font-medium md:font-normal">Either you or we can deliver your food </p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        <img src={happy} className="md:h-48 px-6 py-6" alt=""/>
                        <p className="px-6 font-medium md:font-normal">Get a positive feeling and Karma!</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
