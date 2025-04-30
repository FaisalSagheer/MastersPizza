'use client'


import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Featured from './FoodItems/Featured';
import Deals from './FoodItems/Deals';
import Special from './FoodItems/FestiveDeals';
import Drinks from './FoodItems/Drinks';
import Search from './Search';


export default function FoodItems() {
  const featuredRef = useRef(null);
  const dealsRef = useRef(null);
  const specialRef = useRef(null);
  const drinkRef = useRef(null);

  const menuCategories = [
    { id: 1, name: "Pizzas", target: "special" },
    { id: 2, name: "Featured ", target: "featured" },
    { id: 3, name: "Pasta" },
    { id: 4, name: "Wings", },
    { id: 5, name: "Salads", },
    { id: 6, name: "Desserts", },
    { id: 7, name: "Drinks", target: "drink" },
    { id: 8, name: "Deals", target: "deals" }
  ];

  const scrollToSection = (target) => {
    let element;
    switch (target) {
      case 'featured':
        element = featuredRef.current;
        break;
      case 'deals':
        element = dealsRef.current;
        break;
      case 'special':
        element = specialRef.current;
        break;
      case 'drink':
        element = drinkRef.current;
        break;
      default:
        return;
    }

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <>

      <section className="bg-pizza-red overflow-hidden py-0 lg:py-2">
        <div className="container mx-auto relative px-3 md:px-5 lg:px-10">
          <Swiper
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500 }}
            loop={true}
            spaceBetween={14}
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 7 },
            }}
          >
            {menuCategories.map((category) => (
              <SwiperSlide key={category.id}>
                <div
                  className="overflow-hidden text-white cursor-pointer"
                  onClick={() => category.target && scrollToSection(category.target)}
                >
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-sm lg:text-lg">{category.name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center">
            <svg
              className="w-6 h-6 lg:w-8 lg:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center">
            <svg
              className="w-6 h-6 lg:w-8 lg:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
      <Search/>
      <div ref={specialRef}>
        <Special />
      </div>
      <div ref={dealsRef}>
        <Deals />
      </div>
      <div ref={featuredRef}>
        <Featured />
      </div>
      <div ref={drinkRef}>
        <Drinks />
      </div>
    </>
  );
}