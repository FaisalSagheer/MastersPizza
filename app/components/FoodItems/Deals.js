import React from 'react';

const Deals = () => {
  const deals = [
    {
      id: 1,
      name: "Family Deal",
      description: "2 Large Pizzas + 1.5L Drink",
      price: "Rs. 1699",
      originalPrice: "Rs. 2100",
      image: "assets/pizza.jpg"
    },
    {
      id: 2,
      name: "Max Deal",
      description: "1 Large Pizza + 4 Pieces Chicken + 1.5L Drink",
      price: "Rs. 1299",
      originalPrice: "Rs. 1600",
      image: "assets/pizza.jpg"   
    },
    {
      id: 3,
      name: "Party Deal",
      description: "4 Large Pizzas + 4 Pieces Chicken + 2.5L Drink",
      price: "Rs. 3299",
      originalPrice: "Rs. 4000",
      image: "assets/pizza.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pizza-red">HOT DEALS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-10 lg:px-20">
          {deals.map(deal => (
            <div key={deal.id} className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <img src={deal.image} alt={deal.name} className="w-full h-58 object-fit" />
                {/* <div className="absolute top-0 right-0 bg-pizza-red text-white px-3 py-1 font-bold">
                  SAVE {Math.round((parseInt(deal.originalPrice.replace(/\D/g, '')) - parseInt(deal.price.replace(/\D/g, '')) / 100 * 100)}%
                </div> */}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-pizza-red font-bold text-xl">{deal.price}</span>
                    {/* <span className="ml-2 text-gray-400 line-through">{deal.originalPrice}</span> */}
                  </div>
                  <button className="bg-pizza-red hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-full">
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;