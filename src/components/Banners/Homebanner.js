import React from 'react'
import { goodHealth, zeroHunger,volunteer, donate, ngo, deliver, happy } from '../../assets/images'

export const Homebanner = () => {
  return (
    <>
    <section id="unGoals">
            <div class="unGoals flex flex-col  justify-center px-12 py-12 items-center h-full my-6">
                <div class="heading">
                    <h1 class="text-6xl py-3 mb-6 text-hung">United Nation Goals</h1>
                </div>
                <div class="goals flex justify-evenly mt-4">
                    <div class="flex flex-col items-center justify-center">
                        <img src={zeroHunger} class="h-72 mr-8 rounded-3xl" alt="no"/>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <img src={goodHealth} class="h-72 ml-8 rounded-3xl" alt="no"/>
                    </div>
                </div>
            </div>
        </section>
        <section id="volunteer">
            <div class="volunteer flex  justify-center px-12 py-12 items-center h-full">
                <div class="flex justify-center items-center">
                    <div class="image  mr-8">
                        <img src={volunteer} class="h-auto" alt=""/>
                    </div>
                    <div class="desc w-1/2 ml-9">
                        <h1 class="text-6xl py-3 mb-6 text-hung">Be a Volunteer</h1>
                        <p class="text-lg mb-8">
                            Around one-third of food produced for human consumption is wasted
                            annually, while an estimated 690 million people suffer from hunger
                            daily. These problems are interlinked and require a comprehensive
                            approach.
                        </p>
                        <a href="#"
                            class="bg-hung text-white px-6 py-2 rounded-lg hover:bg-emerald-700 mt-4 transition">Volunteer</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="working">
            <div class="working flex flex-col  justify-center px-12 py-12 items-center h-full my-6">
                <div class="heading">
                    <h1 class="text-6xl py-3 mb-6 text-hung">How it Works</h1>
                </div>
                <div class="flow flex justify-evenly mt-8">
                    <div class="items-center justify-center flex flex-col">
                        <img src={donate} class="h-48 px-6 py-6" alt=""/>
                        <p class="px-6">Choose what you want to donate</p>
                    </div>
                    <div class="items-center justify-center flex flex-col">
                        <img src={ngo} class="h-48 px-6 py-6" alt=""/>
                        <p class="px-6">Contact a NGO or submit your request</p>
                    </div>
                    <div class="items-center justify-center flex flex-col">
                        <img src={deliver} class="h-48 px-6 py-6" alt=""/>
                        <p class="px-6">Either you or we can deliver your food </p>
                    </div>
                    <div class="items-center justify-center flex flex-col">
                        <img src={happy} class="h-48 px-6 py-6" alt=""/>
                        <p class="px-6">Get a positive feeling and Karma!</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
