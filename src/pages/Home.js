import React from 'react'
import { edibleFood, money, rawFood, vector1 } from '../assets/images'
import { Card } from '../components/Card'
import { Homebanner } from '../components/Banners/Homebanner'

export const Home = () => {
  return (
    <>
    <section id="home">
        {/* // Introduction to website // */}
    <div className="home-content flex flex-col justify-center md:px-12 py-12 items-center h-full">
        <div className="home  md:flex md:justify-between mt-8 mb-8 h-3/4 md:w-4/5">
            <div className="desc  w-auto  md:w-3/4 px-6 md:m-auto mb-8">
                <h1 className="md:text-6xl text-5xl text-center md:text-left py-3 mb-6 text-hung">
                    Welcome to Hunger Halt!
                </h1>
                <p className=" md:mr-6 md:text-lg md:mb-4 text-center md:text-left">
                Fight food waste and hunger with us. Connect with NGOs and retreat centers, ensuring reliable food sources for those in need. Join our mission to reduce waste, feed the hungry, and raise awareness for a brighter, more sustainable future.
                </p>
                <div className='py-9 md:text-left text-center'>
                <a href="#" className="bg-hung text-white px-6 py-2 rounded-lg hover:bg-emerald-700 md:mt-2 ">Donate
                    Us</a>
                    </div>
            </div>
            <div className="carousel max-h-90 md:flex justify-center items-center">
                <img src={vector1} className="md:h-full h-96" alt="img" />
            </div>
        </div>


        {/* // Cards for Donation // */}
        <div className="donate md:flex justify-between w-4/5 my-12 text-white md:text-xl" id='donate'>
            <Card title='Donate Edible Food' img={edibleFood} tow='/user/request'/>
            <Card title='Donate Raw Food' img={rawFood} tow='/user/request'/>
            <Card title='Sponsor Us' img={money} tow='/donate/money'/>
        </div>
    </div>
    <Homebanner/>
</section>
</>
  )
}
