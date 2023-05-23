import React from 'react'
import { edibleFood, money, rawFood, vector1 } from '../assets/images'
import { Card } from '../components/Card'
import { Homebanner } from '../components/Banners/Homebanner'

export const Home = () => {
  return (
    <>
    <section id="home">
        {/* // Introduction to website // */}
    <div className="home-content flex flex-col justify-center px-12 py-12 items-center h-full">
        <div className="home flex justify-between mt-8 mb-8 h-3/4 w-4/5">
            <div className="desc w-3/4 px-6">
                <h1 className="text-6xl py-3 mb-6 text-hung">
                    Welcome to Hunger Halt!
                </h1>
                <p className="mr-6 text-lg mb-8">
                    Around one-third of food produced for human consumption is wasted
                    annually, while an estimated 690 million people suffer from hunger
                    daily. These problems are interlinked and require a comprehensive
                    approach.
                </p>
                <a href="#" className="bg-hung text-white px-6 py-2 rounded-lg hover:bg-emerald-700 mt-4">Donate
                    Us</a>
            </div>
            <div className="carousel max-h-90 flex justify-center items-center">
                <img src={vector1} className="h-full" alt="img" />
            </div>
        </div>

        {/* // Cards for Donation // */}

        <div className="donate flex justify-between w-4/5 my-12 text-white text-xl">
            <Card title='Donate Money' img={money}/>
            <Card title='Donate Raw Food' img={rawFood}/>
            <Card title='Donate Edible Food' img={edibleFood}/>
        </div>
    </div>
    <Homebanner/>
</section>

</>
  )
}
