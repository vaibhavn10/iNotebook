import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

function Services() {
  const Service = ({image, reverse }) => {
    return (
      <div className={`px-4 sm:px-8 md:px-16 lg:px-28 flex justify-between ${reverse?"flex-row-reverse":"flex-row"} service relative`}>
        <div className={`flex flex-col justify-center gap-6 px-6`}>
          <div className="flex items-center justify-center w-max p-5 bg-[rgba(144, 212, 116)] logo rounded-full text-[#78c454] duration-500">
            <i className={`fa-solid fa-briefcase h-4 w-4`}></i>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <span className="text-lg md:text-3xl font-semibold">
              Meet every deadline
            </span>
            <div className="text-sm md:text-[16px] text-stone-600 font-medium w-full sm:w-72 md:w-96">
              Create and design tasks in your notes with due dates, flags, and
              remainders so that nothing is missed.
            </div>
          </div>
          <div className="font-medium text-sm tracking-[1px] text-[#78c454] hover:text-[#90d474] w-max flex items-center cursor-pointer duration-200">
            LEARN MORE <i className="fa-solid fa-arrow-right pl-3"></i>
          </div>
        </div>
        <div className={`absolute md:static opacity-80 md:opacity-100 ${reverse?"left-0":"right-0"} h-[110%] sm:h-48 md:h-96 z-[-1]`}>
          <div className={`h-full flex items-center ${reverse?"justify-start":"justify-end"}`}>
            <img src={image} alt={image} className="h-full object-cover object-end" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full py-32 flex flex-col gap-16 md:gap-24">
      <Service image={service1} reverse={false}/>
      <Service image={service2} reverse={true}/>
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 flex service relative">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex items-center justify-center w-max p-5 bg-[rgba(144, 212, 116)] logo rounded-full text-[#78c454] duration-500">
            <i className={`fa-solid fa-briefcase h-4 w-4`}></i>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="text-lg md:text-3xl font-semibold">Meet every deadline</div>
            <div className="text-sm md:text-[16px] text-stone-600 font-medium w-3/4 md:w-1/2">
              Create and design tasks in your notes with due dates, flags, and
              remainders so that nothing is missed.
            </div>
          </div>
          <div className="font-medium text-sm tracking-[1px] text-[#78c454] hover:text-[#90d474] w-max flex items-center cursor-pointer duration-200">
            LEARN MORE <i className="fa-solid fa-arrow-right pl-3"></i>
          </div>
        </div>
        <div className="absolute md:relative opacity-80 md:opacity-100 right-0 md:flex-1 h-[110%] sm:h-48 md:h-96 z-[-1]">
            <div className="absolute top-4 right-4 w-1/2 h-[35%] bg-[#90d474] z-[-3]"></div>
            <div className="absolute top-[20%] right-[20%] w-1/4 h-3/4 bg-stone-100 z-[-2]"></div>
            <div className="absolute bottom-2 right-16 w-1/2 h-[35%] bg-[#90d474] z-[-1]"></div>
          <div className="h-full flex items-center justify-end">
            <img src={service3} alt="1" className="h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
