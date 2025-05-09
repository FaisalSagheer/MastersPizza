import React, { lazy } from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gray-100">
      {/* Hero image */}
      <div className="h-96 md:h-screen max-h-[600px] bg-cover bg-center" 
           style={{backgroundImage: "url('assets/HeroImg.jpg')"}} onLoad={lazy}>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-20 text-white text-center lg:text-start">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">DELICIOUS PIZZA</h1>
            <p className="text-xl md:text-2xl mb-5 pl-2">Order online or visit our branches</p>
            <button className="bg-pizza-red hover:bg-pizza-yellow text-white font-semibold py-2 px-5 rounded-full hover:border-1 text-sm lg:text-lg ml-3 font-[inter]">
              Order Now
            </button>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;