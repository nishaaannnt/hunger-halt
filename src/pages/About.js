import React from "react";
import { about } from "../assets/images";
import { donate, ngo, deliver, happy } from "../assets/images";

const About = () => {
  return (
    <div>
      {/*image of abous us*/}
      <div className="p-10 hidden md:block">
        <div className="relative ">
          <img src={about} className="w-full rounded-2xl" />
          <h1 className="absolute text-5xl font-pop text-white top-16 left-1/2 -translate-x-1/2 -translate-y-1/3 ">
            HUNGER HALT
          </h1>
          <p className="absolute  text-2xl text-white left-1/2 -translate-x-1/2 bottom-14 px-3  font-brad ">
            "From Hunger to Smiles: Empowering Lives with Food"
          </p>
        </div>
      </div>

      {/*---card--*/}
      <div className="home-content flex flex-col justify-center md:px-12 md:py-12 items-center h-full">
        <div className="home flex justify-between mt-8 mb-8 h-3/4 w-4/5">
          <div className="flex flex-col">
            <div className="desc flex flex-col">
              <h1 className="md:text-6xl text-3xl py-3 text-center md:px-10 mb-6 text-hung">
                "Hunger Halt: Uniting Against Hunger"
              </h1>
            </div>
            <div className="aspect-w-16 aspect-h-9   md:px-11  py-4 md:pt-16">
              <iframe
                src="https://www.youtube.com/embed/00dPKd1gu0Q"
                className="rounded-3xl shadow-2xl mx-auto h-[10rem] md:h-[38rem] md:w-[60rem]"
                itle="YouTube video player"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/*-card-*/}
      <div className="volunteer flex  justify-center md:px-36 px-8 py-12 items-center h-full mb-16">
        <div className="md:flex justify-center items-center">
          <div className="desc md:w-1/2 md:mr-9">
            <h1 className="md:text-6xl text-3xl py-3 mb-6 text-hung text-center">Who Are we?</h1>
            <p className="text-lg mb-8">
              "We are a passionate team dedicated to addressing food waste and
              hunger. Through our platform, we connect users with NGOs and
              retreat centers, providing reliable food sources and contributing
              to a world with zero hunger."
            </p>
          </div>
          <div className="image  ml-8">
            <img
              src="https://media.istockphoto.com/id/1347280753/vector/feeding-homeless-people-concept.jpg?s=612x612&w=0&k=20&c=VurxbK_wC-Mjvzu1WroQd6GdA9cE8KmJcUZ34zwmrac="
              className="h-560"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="volunteer flex md:mb-24  justify-center px-10  items-center h-full">
        <div className="md:flex justify-center items-center">
          <div className="image  md:block hidden mr-8">
            <img
              src="https://media.istockphoto.com/id/508669820/vector/propaganda-woodcut-fist-hand-holding-fork.jpg?s=612x612&w=0&k=20&c=MUJO1_p5PupH7BrxmK-RaT99U5oAAEmR56B3RYhp4vM="
              className="h-96"
              alt=""
            />
          </div>
          <div className="desc md:w-1/2 md:ml-9">
            <h1 className="md:text-6xl text-3xl py-3 mb-6 text-hung">
              What do we stand for?
            </h1>
            <p className="text-lg md:mb-8">
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
            <div className="working flex flex-col  justify-center px-12 py-12 items-center h-full my-6">
                <div className="heading">
                    <h1 className="md:text-6xl text-5xl py-3 mb-4 text-hung">How it Works</h1>
                </div>
                <div className="flow md:flex justify-evenly mt-8">
                    <div className="items-center justify-center flex flex-col">
                        <img src={donate} className="h-48 md:px-6 py-6" alt=""/>
                        <p className="md:px-6">Choose what you want to donate</p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        <img src={ngo} className="h-48 md:px-6 py-6" alt=""/>
                        <p className="md:px-6">Contact a NGO or submit your request</p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        <img src={deliver} className="h-48 md:px-6 py-6" alt=""/>
                        <p className="md:px-6">Either you or we can deliver your food </p>
                    </div>
                    <div className="items-center justify-center flex flex-col">
                        <img src={happy} className="h-48 md:px-6 py-6" alt=""/>
                        <p className="md:px-6">Get a positive feeling and Karma!</p>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default About;
