import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";
import Footer from "./Footer";

function Home() {
  return (
    <>
    <div className="mt-[-72px]">
      <Hero />
      <Features/>
      <Services/>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
