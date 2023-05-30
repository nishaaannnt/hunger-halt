import React from 'react'
import { vector1 } from '../assets/images'
// import AboutImage from '../pages/about.jpg';
import {  donate, ngo, deliver, happy } from '../assets/images'


const About = () => {
  return (
    <div>
    {/*image of abous us
    <div>
     <img src='' alt="hungerhalt" className='w-full shadow-lg' />
    </div>
{/*---card--*/}
    <div className="home-content flex flex-col justify-center px-12 py-12 items-center h-full">
    <div className="home flex justify-between mt-8 mb-8 h-3/4 w-4/5">
        <div className="desc flex flex-col px-6 text-center">
            <h1 className="text-6xl py-3  mb-6 text-hung">
                Welcome to Hunger Halt!
            </h1>
            <p className="mr-6 text-lg mb-8 text-center">At HungerHalt, we are passionately committed to addressing the urgent challenges of food waste and hunger. Through our innovative platform, we bridge the gap between donors, businesses, and organizations with NGOs and retreat centers dedicated to fighting hunger and reducing food waste. Together, we strive to build a world where reliable and sustainable food sources are accessible to all.

By joining HungerHalt, you become an integral part of our collective effort to transform surplus food into nourishment and hope. Your involvement is crucial as we work towards eradicating hunger and creating a future where no one goes to bed on an empty stomach. With your support, we can make a significant impact, not just in waste reduction, but also in reshaping the landscape of food security.

Join HungerHalt today and contribute to the global effort to end food waste and hunger. Together, let's rewrite the narrative surrounding food security and create a brighter future for individuals and families facing hunger. With collective action, we can make a lasting difference and inspire positive change in our communities. Be part of the driving force that will eradicate food waste and hunger.</p>
           
        </div>
        <div class="max-w-2xl mx-auto">
 
</div>
    </div>
    </div>
{/*-card-*/}
<div class="volunteer flex  justify-center px-12 py-12 items-center h-full mb-16">
        <div class="flex justify-center items-center">
            <div class="desc w-1/2 mr-9">
                <h1 class="text-6xl py-3 mb-6 text-hung">Who Are WE</h1>
                <p class="text-lg mb-8">
                We are a diverse and dedicated team driven by our shared purpose of addressing food waste and hunger. With expertise in various fields, we collaborate to create innovative solutions and amplify our impact. Our mission is to ensure that no one goes without a meal and that edible food is not wasted. Through partnerships and networks, we strive for food security and empower communities. We embrace responsibility and adapt to the changing landscape. Join us in building a future where everyone has access to nutritious food and where compassion drives lasting change.
                </p>
            </div>
            <div class="image  ml-8">
                <img src={vector1} class="h-560" alt=""/>
            </div>
        </div>
    </div>




    <div className="volunteer flex  justify-center px-12  items-center h-full">
                <div className="flex justify-center items-center">
                    <div className="image  mr-8">
                        <img src={vector1} className="h-auto" alt=""/>
                    </div>
                    <div className="desc w-1/2 ml-9">
                        <h1 className="text-6xl py-3 mb-6 text-hung">What do we stand for</h1>
                        <p className="text-lg mb-8">
                        At HungerHalt, our unwavering commitment is to achieve zero hunger and ensure that no one goes to bed hungry. Guided by compassion, sustainability, collaboration, innovation, equity, advocacy, and impact, we work tirelessly to make a meaningful difference. Through partnerships and innovation, we address the root causes of food waste and hunger. Our mission is to create a sustainable and equitable society where everyone has access to nutritious food. With empathy as our driving force, we advocate for change and raise awareness about the urgency of our cause. Together, we can nourish a hunger-free world. Join us in our quest to build a future where no one goes to bed hungry.
                        </p>
                       
                    </div>
                </div>
            </div>




            <div class="volunteer flex  justify-center px-12 py-12 items-center h-full mb-16">
        <div class="flex justify-center items-center">
            <div class="desc w-1/2 ">
                <h1 class="text-6xl py-3 mb-6 text-hung">FUTURE Goals</h1>
                <p class="text-lg mb-8">
                <ol className='list-disc '>
                    <li className='mb-2'>Universal Access: Our goal is to work towards achieving universal access to nutritious and sufficient food, ensuring that no one goes hungry and everyone has the opportunity to thrive.</li>
                    <li className='mb-2'>Sustainable Food Systems: We aim to promote sustainable food systems that prioritize environmental stewardship, reduce food waste, and support local agriculture to enhance food security and resilience.</li>
                    <li className='mb-2'>Community Empowerment: We will focus on empowering communities by providing them with the knowledge, skills, and resources necessary to sustainably produce and access nutritious food, breaking the cycle of hunger.</li>
                    <li className='mb-2'>Policy Advocacy: We will actively advocate for policies and initiatives that prioritize hunger eradication, poverty alleviation, and equitable food distribution at local, national, and international levels.</li>
                    <li className='mb-2'>Partnerships and Collaboration: We will strengthen partnerships with NGOs, governments, businesses, and communities to leverage collective expertise and resources, working together towards a shared vision of a world without hunger.</li>
                 </ol>
                </p>
            </div>
            <div class=" ml-8">
            <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col">
    <dl class=" text-center lg:grid-cols-3">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4 py-8">
        <dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
      </div>
   
      <div class="mx-auto flex max-w-xs flex-col gap-y-4 py-8">
        <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
      </div>
     
      <div class="mx-auto flex max-w-xs flex-col gap-y-4 py-8">
        <dt class="text-base leading-7 text-gray-600">New users annually</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
      </div>
    </dl>
  </div>
</div>
            </div>
        </div>
    </div>


{/*-how we work-*/}
<div>
   
<section id="working">
            <div className="working flex flex-col  justify-center px-12 py-7 items-center h-full my-6">
                <div className="heading">
                    <h1 className="text-6xl py-3 mb-6 text-hung">How it Works</h1>
                </div>
                <div className="flow flex justify-evenly mt-8">
                    <div className="items-center justify-center flex flex-col">
                        <img src={donate} className="h-48 px-6 py-6" alt=""/>
                        <p className="px-6">Choose what you want to donate</p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        <img src={ngo} className="h-48 px-6 py-6" alt=""/>
                        <p className="px-6">Contact a NGO or submit your request</p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        <img src={deliver} className="h-48 px-6 py-6" alt=""/>
                        <p className="px-6">Either you or we can deliver your food </p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        <img src={happy} className="h-48 px-6 py-6" alt=""/>
                        <p className="px-6">Get a positive feeling and Karma!</p>
                    </div>
                </div>
            </div>
        </section>


       
 
{/* trrin video*/}
            <div class="aspect-w-16 aspect-h-9 shadow-sm  px-64 py-7 pt-32">
                 <iframe width="1080" height="560" src="https://www.youtube.com/embed/00dPKd1gu0Q" className="rounded-3xl" itle="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>


    {/*another section*/}
<div className='pt-40'>
    <div className='bg-white py-6 flex flex-row shadow-2xl  '>
        <div className=' flex flex-col text-left w-3/4'><p className='text-4xl font-semibold text-hung px-36 py-3'>Together we end hunger</p><p className='px-36 py-3 text-lg'> "In a world where hunger persists, let's sow seeds of change through compassion, kindness, and unwavering determination. Together, we can cultivate a future where every plate is filled, every stomach nourished, and every heart empowered to thrive."</p></div>
        <div className='w-1/2 bg-hung/20 justify-evenly rounded-2xl px-7 py-3 mr-6'>
            <p className="text-5xl font-semibold">Join our community</p>
            <p className="py-5 w-96">Get the latest conversation updates, be inspired to takw action , see more ways to get involved</p>
            <button class="border-2 border-black text-black bg-transparent py-2 px-4 rounded-lg font-semibold shadow-lg">Signup for email  〉</button>


        </div>
    </div>
</div>
</div>










{/*our team*/}
<div class="bg-white py-24 sm:py-32">
  <div class="flex flex-col px-32">
    <div class="text-center px-24">
      <h2 class="text-3xl font-bold tracking-tight text-hung sm:text-4xl">Meet our Team</h2>
      <p class="pt-8 text-gray-600">Meet our exceptional team, whose commitment and passion for our cause make all the difference in our mission to combat hunger and create a brighter future for all.</p>
    </div>




    <div className='flex flex-col pt-28'>
    <div pt-10>
    <ul role="list" class="flex flex-row justify-evenly">
      <li>
        <div class="flex items-center  flex-col gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm font-semibold leading-6 text-hung/80">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center flex-col gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm font-semibold leading-6 text-hung/80">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center flex-col gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm font-semibold leading-6 text-hung/80">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center flex-col gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm font-semibold leading-6 text-hung/80">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center  flex-col gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm font-semibold leading-6 text-hung/80">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
    </ul>
    </div>


    <div className='pt-10'>
    <ul role="list" class="flex flex-row justify-evenly">
      <li>
        <div class="flex items-center  flex-col gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm font-semibold leading-6 text-hung/80">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center  flex-col gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm font-semibold leading-6 text-hung/80">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center flex-col gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm font-semibold leading-6 text-hung/80">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center flex-col gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm font-semibold leading-6 text-hung/80">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center  flex-col gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p class="text-sm font-semibold leading-6 text-hung/80">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
    </ul>
    </div>
    </div>
  </div>
</div>






{/*additional*/}
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
    <div class="mx-auto  mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img class="col-span-2  max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48"/>
      <img class="col-span-2  max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48"/>
      <img class="col-span-2  max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48"/>
      <img class="col-span-2  max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48"/>
      <img class="col-span-2  col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"/>
    </div>
  </div>
</div>


    </div>
  )
}


export default About

