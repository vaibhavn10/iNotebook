import React from "react";

function Features() {
  const Feature = ({ logo, title, desc }) => {
    return (
      <div className="md:px-4 py-12 md:py-0 md:h-96 flex flex-col items-center justify-center bg-white rounded-xl border border-stone-200 gap-4 hover:-translate-y-4 md:hover:-translate-y-8 feature duration-500">
        <div className="flex items-center justify-center p-5 bg-[#78c454] logo rounded-full text-white duration-500">
          <i className={`fa-solid fa-${logo} h-4 w-4`}></i>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-lg md:text-xl font-semibold title duration-500">{title}</div>
          <div className="text-center text-stone-400 text-sm md:text-base px-8 md:px-14 desc duration-500">
            {desc}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full bg-[#78c454]/30 py-16 md:py-32 shadow-inner">
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 sm:px-8 md:px-16 lg:px-28 gap-8 relative">
        <Feature
          logo="briefcase"
          title="Work from Anywhere"
          desc="Keep important info handy-your notes sync automatically across all
            your devices."
        />
        <Feature
          logo="briefcase"
          title="Work from Anywhere"
          desc="Keep important info handy-your notes sync automatically across all
            your devices."
        />
        <Feature
          logo="briefcase"
          title="Work from Anywhere"
          desc="Keep important info handy-your notes sync automatically across all
            your devices."
        />
      </div>
    </div>
  );
}

export default Features;
