import React from 'react'
import AboutImage from '../pages/about.jpg';
import {  donate, ngo, deliver, happy } from '../assets/images'


const About = () => {
  return (
    <div >
    {/*image of abous us*/}  
    <body class="md:p-10">
    <div class="relative ">
        <img src={AboutImage} className='w-full '/>
        <h1 class="absolute md:text-5xl font-pop text-white top-16 left-1/2 -translate-x-1/2 -translate-y-1/3 ">
            HUNGER HALT</h1>
       <p className='absolute  md:text-2xl text-white left-1/2 -translate-x-1/2 bottom-14 px-3  font-brad '>
"From Hunger to Smiles: Empowering Lives with Food"








</p>
    </div>
</body>
   
{/*---card--*/}
    <div className="home-content md:flex flex-col justify-center px-12 py-12 items-center h-full">
    <div className="home md:flex justify-between mt-8 mb-8 h-3/4 md:w-4/5">
    <div className='md:flex flex-col'>
        <div className="desc md:flex flex-col text-center">
            <h1 className="md:text-6xl text-5xl py-3 md:mr-80 md:px-20 mb-6 text-hung">
               "Hunger Halt: Uniting Against Hunger"
            </h1>  
        </div>
        <div class="aspect-w-16 aspect-h-9 w-screen px-11  py-4 pt-16 ">
                 <iframe width="1080" height="560" src="https://www.youtube.com/embed/00dPKd1gu0Q" className="rounded-3xl shadow-2xl md:w-full" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
       </div>
    </div>
    </div>
{/*-card-*/}
<div class="volunteer md:flex  justify-center px-12 py-12 items-center h-full mb-16">
        <div class="md:flex justify-center items-center text-left">
            <div class="desc md:w-1/2 mr-9 text-center">
                <h1 class="md:text-6xl text-5xl py-3 mb-6 text-hung">Who Are WE</h1>
                <p class="md:text-lg mb-8">
                "We are a passionate team dedicated to addressing food waste and hunger. Through our platform, we connect users with NGOs and retreat centers, providing reliable food sources and contributing to a world with zero hunger."
                </p>
            </div>
            <div class="image  md:ml-8 pr-8">
                <img src="https://media.istockphoto.com/id/1347280753/vector/feeding-homeless-people-concept.jpg?s=612x612&w=0&k=20&c=VurxbK_wC-Mjvzu1WroQd6GdA9cE8KmJcUZ34zwmrac=" class="h-560" alt=""/>
            </div>
        </div>
    </div>




    <div className="volunteer md:flex  justify-center px-12  items-center h-full">
                <div className="md:flex justify-center items-center mr-6 text-left">
                    <div className="image  mr-8">
                        <img src="https://media.istockphoto.com/id/508669820/vector/propaganda-woodcut-fist-hand-holding-fork.jpg?s=612x612&w=0&k=20&c=MUJO1_p5PupH7BrxmK-RaT99U5oAAEmR56B3RYhp4vM=" className="h-auto" alt=""/>
                    </div>
                    <div className="desc md:w-1/2 md:ml-9 text-center mt-5 mr-2">
                        <h1 className="md:text-6xl text-5xl py-3 mb-6 text-hung">What do we stand for</h1>
                        <p className="md:text-lg mb-8">
                       "We stand for achieving Sustainable Development Goal 2: Zero Hunger. Our mission is to ensure access to nutritious food for all, promote sustainable agriculture, and reduce food waste. Together, we strive to create a future where hunger is eradicated and communities thrive."
                        </p>
                       
                    </div>
                </div>
            </div>




         


{/*-how we work-*/}
<div>
   
<section id="working">
            <div className="working flex flex-col  justify-center px-12 py-12 items-center h-full my-6 mr-10 text-center">
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

       


           


    {/*another section*/}
<div className='pt-40'>
    <div className='bg-white py-6 md:flex flex-row shadow-2xl  '>
        <div className=' md:flex flex-col text-left md:w-3/4'><p className='text-4xl font-semibold text-hung px-36 py-3'>Together we end hunger</p><p className='px-36 py-3 text-lg'> "In a world where hunger persists, let's sow seeds of change through compassion, kindness, and unwavering determination. Together, we can cultivate a future where every plate is filled, every stomach nourished, and every heart empowered to thrive."</p></div>
        <div className='md:w-1/2 w-auto bg-hung/20 justify-evenly rounded-2xl md:px-7 py-3 md:mr-6'>
            <p className="text-5xl font-semibold">Join our community</p>
            <p className="py-5 md:w-96">Get the latest conversation updates, be inspired to takw action , see more ways to get involved</p>
            <button class="border-2 border-black text-black bg-transparent py-2 px-4 rounded-lg font-semibold shadow-lg">Signup for email  〉</button>


        </div>
    </div>
</div>
</div>






    </div>
  )
}


export default About
