import React from 'react'

export default function Special() {
  const menu = [
    {
      id: 1,
      src: "assets/pizza.jpg",
      food: "Pepperoni Feast",
      alt: "Pizza",
      subtitle: "Loaded with premium pepperoni.",
      price: "Rs. 1200",
      crossedPrice: "Rs. 950"
    },
    {
      id: 2,
      src: "assets/pizza.jpg",
      food: "Pepperoni Feast",
      alt: "Pizza",
      subtitle: "Loaded with premium pepperoni.",
      price: "Rs. 1200",
      crossedPrice: "Rs. 950"
    },
    {
      id: 3,
      src: "assets/pizza.jpg",
      food: "Pepperoni Feast",
      alt: "Pizza",
      subtitle: "Loaded with premium pepperoni.",
      price: "Rs. 1200",
      crossedPrice: "Rs. 950"
    },
    {
      id: 4,
      src: "assets/pizza.jpg",
      food: "Pepperoni Feast",
      alt: "Pizza",
      subtitle: "Loaded with premium pepperoni.",
      price: "Rs. 1200",
      crossedPrice: "Rs. 950"
    },
  ]
  return (
    <section className="py-12 text-center">
      <h3 className="text-3xl font-bold pb-10">Our Special Pizzas</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-10 lg:px-20">
        {
          menu.map((items) => (
            <div className="bg-white border border-gray-200 rounded-lg shadow pb-5 w-xs" key={items.id}>

              <img src={items.src} alt={items.alt} className="w-full h-60 object-cover rounded" />
              <h4 className="mt-3 font-bold text-lg">{items.food}</h4>
              <p className="text-gray-500 pt-2">{items.subtitle}</p>

              <span className='flex justify-around items-center mt-5'>
                <span className='flex flex-col text-start'>

                  <span className="text-pizza-red font-bold text-xl">{items.price}</span>
                  {/* <span className="text-gray-400 text-lg font-light line-through">{items.crossedPrice}</span> */}
                </span>
                <button className="bg-pizza-red hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-full border border-red-700">
                  ORDER NOW
                </button>
              </span>

            </div>
          ))
        }

      </div>
    </section>
  )
}
