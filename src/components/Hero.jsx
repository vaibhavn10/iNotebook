import React, { useEffect, useState } from "react";
import hero from "../assets/hero.jpg";
import hero1 from "../assets/hero1.jpg";
import { Link } from "react-router-dom";

function Hero() {
  const [slider, setSlider] = useState(0);
  const [order, setOrder] = useState('right');  // Goint to the right
  const [images, setImages] = useState([hero, hero1, hero, hero1]);
  const [carousalitem, setCarousalItem] = useState("100%");
  useEffect(() => {
    const w = document.getElementById("carousal").offsetWidth+'px';
    setCarousalItem(w);
    // setInterval(() => {
    //   if(slider>=0 && slider<images.length-1){
    //     setSlider((prev) => {return prev+1});
    //     console.log(slider);
    //   }
    // }, 10000);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0 px-4 sm:px-8 md:px-0 md:pl-16 lg:pl-28 shadow-sm">
      <div className="pb-32 pt-36 md:pt-32 md:pt-72 flex-1 flex flex-col gap-6">
        <div className="text-6xl font-semibold">
          Paperless &<div className="">Easy</div>
        </div>
        <div className="text-base font-medium w-full md:w-1/2">
          This is the absolute way to make your notes easier and save the earth
          as well.
          <span>Anything will be better.</span>
        </div>
        <div className="text-base font-medium">
          <a href={`${sessionStorage.getItem('authtoken')?"/dashboard":"/auth/login"}`} className="btn px-12 py-3 rounded-lg text-white font-medium duration-200">
            Get Started
          </a>
        </div>
      </div>
      <div
        className="hidden md:block flex-1 h-96 w-1/2 md:h-screen overflow-x-hidden overflow-y-hidden scrollbarnone relative"
        id="carousal"
      >
        <div className={`h-96 md:h-full w-max flex duration-700 absolute top-0 ${order=='right'?`-left-[${slider*100}%]`:`left-[${slider*100}%]`}`}>
          {images &&
            images.map((i, idx) => {
              return (
                <div className={`h-full w-[${carousalitem}]`} key={idx}>
                  <img
                    src={i}
                    alt="..."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
