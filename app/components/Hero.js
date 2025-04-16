import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gray-100">
      {/* Hero image */}
      <div className="h-96 md:h-screen max-h-[600px] bg-cover bg-center" 
           style={{backgroundImage: "url('assets/HeroImg.jpg')"}}>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-20 text-white text-center lg:text-start">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">DELICIOUS PIZZA</h1>
            <p className="text-xl md:text-2xl mb-5 pl-2">Order online or visit our branches</p>
            <button className="bg-pizza-red hover:bg-gray-700 text-white font-semibold py-2 px-5 rounded-full text-lg ml-3">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;