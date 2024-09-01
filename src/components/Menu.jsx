import React from 'react'

function Menu() {
  return (
    <>
    {/* Desktop menu */}
    <div className="hidden md:flex gap-4 text-sm tracking-wide font-medium">
        <div className="text-stone-500 hover:text-[#90d474] cursor-pointer duration-200">Home</div> 
        <div className="text-stone-500 hover:text-[#90d474] cursor-pointer duration-200">About us</div> 
        <div className="text-stone-500 hover:text-[#90d474] cursor-pointer duration-200">Contact us</div>
    </div>
    </>
  )
}

export default Menu
