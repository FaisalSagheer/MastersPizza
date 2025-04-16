import React from 'react';

const Featured = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Maxican Pizza",
      price: "Rs. 850",
      image: "assets/pizza.jpg"
    },
    {
      id: 2,
      name: "Chicken Fajita",
      price: "Rs. 950",
      image: "assets/pizza.jpg"
    },
    {
      id: 3,
      name: "Chicken Tikka",
      price: "Rs. 900",
      image: "assets/pizza.jpg"
    },
    {
      id: 4,
      name: "BBQ Chicken",
      price: "Rs. 950",
      image: "assets/pizza.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pizza-red">OUR FEATURED PIZZAS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-20 lg:px-40">
          {featuredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-pizza-red font-bold mb-4">{item.price}</p>
                <button className="bg-pizza-red hover:bg-red-800 text-white border border-red-700 font-semibold py-2 px-4 rounded-full text-sm">
                  ORDER NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-pizza-yellow hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg">
            VIEW FULL MENU
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Featured;