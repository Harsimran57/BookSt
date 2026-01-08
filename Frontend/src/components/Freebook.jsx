import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import listImg1 from '../assets/1.avif';
import listImg2 from '../assets/2.png';
import listImg3 from '../assets/3.avif';
import listImg4 from '../assets/4.jpg';
import listImg5 from '../assets/5.avif';

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2  transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500">Free Offered Courses</h1>
          <p>
            Books are vessels for knowledge, stories, and ideas, serving as crucial tools for learning, imagination, and preserving human history, ranging from ancient clay tablets to modern digital texts, and they offer entertainment, wisdom, and new perspectives, acting as friends that enrich our lives and minds
          </p>
          <div className="flex flex-col justify-evenly">
            
            <div className="flex justify-around items-center">
              <div className="w-[45%]">
                <h3 className="font-semibold text-base mt-4 mb-2  transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500">Shadows of the Sel</h3>
                <p>Explore the darker corners of the human psyche through the lens of Gothic literature. This course examines how authors like Mary Shelley (Frankenstein), Bram Stoker (Dracula), and Shirley Jackson (The Haunting of Hill House) use atmospheric terror to explore themes of madness, isolation, and the "other."</p>
              </div>
              <div className="w-[45%] flex justify-around items-center mt-4 mb-2 ">
                <img className="h-44 w-44 rounded-full object-cover 
               transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500" src={listImg1} alt="Course" />
              </div>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-[45%]">
                <h3 className="font-semibold text-base mt-4 mb-2  transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500">Empire and Aftermath</h3>
                <p>This literature-focused course highlights the powerful narratives that emerged after the fall of colonial empires. Reading works by authors such as Chinua Achebe (Things Fall Apart), Salman Rushdie (Midnight's Children), and Chimamanda Ngozi Adichie, students will investigate themes of identity, displacement</p>
              </div>
              <div className="w-[45%] flex justify-around items-center mt-4 mb-2 ">
                <img className="h-44 w-44 rounded-full  transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500 " src={listImg2} alt="Course" />
              </div>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-[45%]">
                <h3 className="font-semibold text-base mt-4 mb-2  transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500">Cosmic Perspectives</h3>
                <p>Bridging the gap between hard science and literary wonder, this course uses accessible non-fiction to explore our place in the universe. Texts like Neil deGrasse Tyson’s Astrophysics for People in a Hurry and Carl Sagan’s Cosmos serve as our guides.</p>
              </div>
              <div className="w-[45%] flex justify-around items-center mt-4 mb-2 ">
                <img className="h-44 w-44 rounded-full  transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500" src={listImg3} alt="Course" />
              </div>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-[45%]">
                <h3 className="font-semibold text-base mt-4 mb-2  transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500">The Tipping Point</h3>
                <p>What makes an idea go viral? Why do crime rates drop suddenly? This course dives into the sociology of change, using Malcolm Gladwell’s The Tipping Point and Dan Ariely’s Predictably Irrational as core texts. We will study the "law of the few," the "stickiness factor," and the power of context to understand how small actions can trigger massive societal shifts.</p>
              </div>
              <div className="w-[45%] flex justify-around items-center mt-4 mb-2 ">
                <img className="h-44 w-44 rounded-full  transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500" src={listImg4} alt="Course" />
              </div>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-[45%]">
                <h3 className="font-semibold text-base mt-4 mb-2  transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500">Zero to One</h3>
                <p>Moving away from standard business management, this course focuses on the philosophy of creating something entirely new. Anchored by Peter Thiel’s Zero to One and Eric Ries’s The Lean Startup, we will explore the contrarian thinking required to build the future.</p>
              </div>
              <div className="w-[45%] flex justify-around items-center mt-4 mb-2 ">
                <img className="h-44 w-44 rounded-full  transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-lg hover:shadow-blue-500" src={listImg5} alt="Course" />
              </div>
            </div>
          </div>

        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
