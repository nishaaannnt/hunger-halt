import React from 'react'
import { edibleFood, foodDonate, money, rawFood} from '../assets/images'
import { Card } from '../components/Card'

const Donate = () => {
  return (

    <div>
    <div className="home-content md:flex justify-center px-12 md:py-12 mt-8 items-center h-full">
        <div className="home md:flex justify-center items-center mt-8 mb-8 h-3/4 md:w-4/5 ">
            <div className="desc md:w-3/4 md:px-6 md:flex jusrofy-center flex-col text-center  md:text-left ">
                <h1 className="md:text-7xl text-4xl text-center py-3 text-hung md:text-left">
                Be the change:
                </h1>
                <h2 className="md:text-4xl text-2xl mb-8 text-hung/70"> Help Us Fight Hunger with Your Generosity!</h2>
                <p className="md:text-lg mb-8 m-auto">
                Your donation makes a significant impact. It provides vital resources to those in need, ensuring access to nutritious food and combating hunger. Together, we can create positive change and make a difference in the lives of many.
                </p>
               
            </div>
            <div className="carousel md:max-h-90 md:flex justify-center items-center  md:ml-8">
                <img src={foodDonate} className="md:h-80" alt="img" />
            </div>
        </div>
    </div>


    {/* Donation Options */}


    <div className="home-content md:flex justify-center px-12 py-12 items-center h-full text-center ">
        <div className="home md:flex justify-center items-center md:mt-8 mb-4 md:mb-6 h-3/4 md:w-4/5 ">
        <div className='flex justify-center items-center'><Card title='Donate Edible Food' img={edibleFood} tow={'/user/request'}/></div>
            <div className="desc md:w-3/4 md:px-6 flex justify-center flex-col md:text-left md:ml-16 ">
                <h1 className="md:text-6xl text-5xl py-3 mb-4 md:mb-6 text-hung ">
                Donate Edible Food
                </h1>
                <p className="md:text-lg mb-4 md:mb-6 m-auto mt-5">
                Don't let edible food go to waste! Your donation of surplus food helps combat hunger by redirecting perfectly good meals to those who need them most. Together, we can make a substantial impact, reduce food waste, and provide vital nourishment to vulnerable communities.
                </p>
               
            </div>
           
        </div>
    </div>


        <div className="home-content md:flex justify-center px-12 py-12 items-center md:h-full ">
        <div className="home md:flex  justify-center items-center mt-8 mb-4 md:mb-6 h-3/4 md:w-4/5  text-center">
            <div className='flex justify-center items-center'><Card title='Donate Raw Food' img={rawFood} tow='/user/request'/></div>
            <div className="desc md:w-3/4  md:-6 md:flex justify-center flex-col md:text-left md:ml-16">
                <h1 className="md:text-6xl text-5xl py-3 mb-4 md:mb-6 text-hung ">
                Donate Raw Food
                </h1>
                <p className="md:text-lg mb-4 md:mb-6 ">
                By donating raw food, you directly impact food insecurity. Your contribution of fresh ingredients ensures access to nutritious meals for those in need. Help us make a significant difference by donating raw food today and nourishing communities in need.
                </p>
               
            </div>
        </div>
    </div>
       


    <div className="home-content md:flex justify-center px-12 py-12 items-center h-full">
        <div className="home md:flex justify-center items-center mt-8 mb-4 md:mb-6 h-3/4 md:w-4/5 ">
        <div className='flex justify-center items-center'><Card title='Donate Money' img={money} tow='/donate/money'/></div>
            <div className="desc md:w-3/4 md:px-6 flex jusrofy-center flex-col  text-center md:text-left md:ml-10">
                <h1 className="md:text-6xl text-5xl  py-3 mb-4 md:mb-6 text-hung ">
                Sponsor Us
                </h1>
                <p className="md:text-lg mb-4 md:mb-6 m-auto">
                Support our mission with a financial contribution. Your generous donation empowers us to expand our reach, improve food distribution networks, and invest in sustainable solutions to fight hunger effectively. Join us in making a tangible difference through your impactful monetary support.
                </p>
               
            </div>
           
        </div>
    </div>


    <div className="donate flex justify-between w-4/5 my-12 text-white text-xl m-auto" id='donate'>
           
           
           
        </div>
    </div>

    // <div>
    //     <div className="home-content flex justify-center px-12 py-12 mt-8 items-center h-full">
    //     <div className="home flex justify-center items-center mt-8 mb-4 md:mb-6 h-3/4 w-4/5">
    //         <div className="desc w-3/4 px-6 flex jusrofy-center flex-col">
    //             <h1 className="text-7xl  py-3 text-hung ">
    //             Be the Change:
    //             </h1>
    //             <h2 className="text-4xl mb-8 text-hung/70"> Help Us Fight Hunger with Your Generosity!</h2>
    //             <p className="text-lg mb-8 m-auto">
    //             Your donation makes a significant impact. It provides vital resources to those in need, ensuring access to nutritious food and combating hunger. Together, we can create positive change and make a difference in the lives of many.
    //             </p>
                
    //         </div>
    //         <div className="carousel max-h-90 flex justify-center items-center ml-8">
    //             <img src={foodDonate} className="h-80" alt="img" />
    //         </div>
    //     </div>
    // </div>

    // {/* Donation Options */}

    // <div className="home-content flex justify-center px-12 py-12 items-center h-full">
    //     <div className="home flex justify-center items-center mt-8 mb-8 h-3/4 w-4/5">
    //     <div className='flex justify-center items-center'><Card title='Donate Edible Food' img={edibleFood} tow={'/user/request'}/>
    //         <div className="desc w-3/4 px-6 flex jusrofy-center flex-col ml-6">
    //             <h1 className="text-6xl  py-3 mb-8 text-hung ">
    //             Donate Edible Food
    //             </h1>
    //             <p className="text-lg mb-8 m-auto">
    //             Don't let edible food go to waste! Your donation of surplus food helps combat hunger by redirecting perfectly good meals to those who need them most. Together, we can make a substantial impact, reduce food waste, and provide vital nourishment to vulnerable communities.
    //             </p>
                
    //         </div>
            
    //     </div>
    // </div>

    //     <div className="home-content flex justify-center px-12 py-12 items-center h-full">
    //     <div className="home flex justify-center items-center mt-8 mb-8 h-3/4 w-4/5">
    //         <div className="desc w-3/4 px-6 flex jusrofy-center flex-col">
    //             <h1 className="text-6xl  py-3 mb-8 text-hung ">
    //             Donate Raw Food
    //             </h1>
    //             <p className="text-lg mb-8 ">
    //             By donating raw food, you directly impact food insecurity. Your contribution of fresh ingredients ensures access to nutritious meals for those in need. Help us make a significant difference by donating raw food today and nourishing communities in need.
    //             </p>
                
    //         </div>
    //         <Card title='Donate Raw Food' img={rawFood} tow='/user/request'/>
    //     </div>
    // </div>
        

    // <div className="home-content flex justify-center px-12 py-12 items-center h-full">
    //     <div className="home flex justify-center items-center mt-8 mb-8 h-3/4 w-4/5">
    //     <Card title='Donate Money' img={money} tow='/donate/money'/>
    //         <div className="desc w-3/4 px-6 flex jusrofy-center flex-col ml-6">
    //             <h1 className="text-6xl  py-3 mb-8 text-hung ">
    //             Sponsor Us
    //             </h1>
    //             <p className="text-lg mb-8 m-auto">
    //             Support our mission with a financial contribution. Your generous donation empowers us to expand our reach, improve food distribution networks, and invest in sustainable solutions to fight hunger effectively. Join us in making a tangible difference through your impactful monetary support.
    //             </p>
                
    //         </div>
            
    //     </div>
    // </div>

    // <div className="donate flex justify-between w-4/5 my-12 text-white text-xl m-auto" id='donate'> 
            
           
            
    //     </div>
    // </div>
  )
}

export default Donate