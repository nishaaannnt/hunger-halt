import React from "react";
import { vector1 } from "../assets/images";
// import AboutImage from '../pages/about.jpg';
import { donate, ngo, deliver, happy } from "../assets/images";

const About = () => {
  return (
    <div>
      {/*image of abous us*/}
      

      {/*---card--*/}
      <div className="home-content flex flex-col justify-center px-12 py-12 items-center h-full">
        <div className="home flex justify-between mt-8 mb-8 h-3/4 w-4/5">
          <div className="flex flex-col">
            <div className="desc flex flex-col">
              <h1 className="text-6xl py-3 mr-80 px-20 mb-6 text-hung">
                "Hunger Halt: Uniting Against Hunger"
              </h1>
            </div>
            <div class="aspect-w-16 aspect-h-9 w-screen  px-11  py-4 pt-16">
              <iframe
                width="1080"
                height="560"
                src="https://www.youtube.com/embed/00dPKd1gu0Q"
                className="rounded-3xl shadow-2xl"
                itle="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/*-card-*/}
      <div class="volunteer flex  justify-center px-12 mx-24 py-12 items-center h-full mb-16">
        <div class="flex justify-center items-center">
          <div class="desc w-1/2 mr-9">
            <h1 class="text-6xl py-3 mb-6 text-hung">Who Are WE</h1>
            <p class="text-lg mb-8">
              "We are a passionate team dedicated to addressing food waste and
              hunger. Through our platform, we connect users with NGOs and
              retreat centers, providing reliable food sources and contributing
              to a world with zero hunger."
            </p>
          </div>
          <div class="image  ml-8">
            <img
              src="https://media.istockphoto.com/id/1347280753/vector/feeding-homeless-people-concept.jpg?s=612x612&w=0&k=20&c=VurxbK_wC-Mjvzu1WroQd6GdA9cE8KmJcUZ34zwmrac="
              class="h-560"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="volunteer flex  justify-center px-12  items-center h-full">
        <div className="flex justify-center items-center">
          <div className="image  mr-8">
            <img
              src="https://media.istockphoto.com/id/508669820/vector/propaganda-woodcut-fist-hand-holding-fork.jpg?s=612x612&w=0&k=20&c=MUJO1_p5PupH7BrxmK-RaT99U5oAAEmR56B3RYhp4vM="
              className="h-96"
              alt=""
            />
          </div>
          <div className="desc w-1/2 ml-9">
            <h1 className="text-6xl py-3 mb-6 text-hung">
              What do we stand for
            </h1>
            <p className="text-lg mb-8">
              "We stand for achieving Sustainable Development Goal 2: Zero
              Hunger. Our mission is to ensure access to nutritious food for
              all, promote sustainable agriculture, and reduce food waste.
              Together, we strive to create a future where hunger is eradicated
              and communities thrive."
            </p>
          </div>
        </div>
      </div>

      {/*-how we work-*/}
      <div>
        <section id="working">
          <div className="working flex flex-col  justify-center px-12 pt-20 items-center h-full my-6">
            <div className="heading">
              <h1 className="text-6xl py-3 mb-6 text-hung">How it Works</h1>
            </div>
            <div className="flow flex justify-evenly mt-8">
              <div className="items-center justify-center flex flex-col">
                <img src={donate} className="h-48 px-6 py-6" alt="" />
                <p className="px-6">Choose what you want to donate</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <img src={ngo} className="h-48 px-6 py-6" alt="" />
                <p className="px-6">Contact a NGO or submit your request</p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <img src={deliver} className="h-48 px-6 py-6" alt="" />
                <p className="px-6">Either you or we can deliver your food </p>
              </div>
              <div className="items-center justify-center flex flex-col">
                <img src={happy} className="h-48 px-6 py-6" alt="" />
                <p className="px-6">Get a positive feeling and Karma!</p>
              </div>
            </div>
          </div>
        </section>

        {/*another section*/}
        <div className="pt-40">
          <div className="bg-white py-6 flex flex-row shadow-2xl  ">
            <div className=" flex flex-col text-left w-3/4">
              <p className="text-4xl font-semibold text-hung px-36 py-3">
                Together we end hunger
              </p>
              <p className="px-36 py-3 text-lg">
                {" "}
                "In a world where hunger persists, let's sow seeds of change
                through compassion, kindness, and unwavering determination.
                Together, we can cultivate a future where every plate is filled,
                every stomach nourished, and every heart empowered to thrive."
              </p>
            </div>
            <div className="w-1/2 bg-hung/20 justify-evenly rounded-2xl px-7 py-3 mr-6">
              <p className="text-5xl font-semibold">Join our community</p>
              <p className="py-5 w-96">
                Get the latest conversation updates, be inspired to takw action
                , see more ways to get involved
              </p>
              <button class="border-2 border-black text-black bg-transparent py-2 px-4 rounded-lg font-semibold shadow-lg">
                Signup for email 〉
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
