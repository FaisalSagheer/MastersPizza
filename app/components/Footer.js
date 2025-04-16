import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="gap-8 flex justify-between flex-wrap mb-8">
          <div>
            {/* <h3 className="text-xl font-bold mb-4 text-pizza-yellow">CONTACT US</h3> */}
            <h3 className="text-xl font-bold mb-4 text-pizza-yellow">PIZZA</h3>
            <p className="mb-2">111-666-111</p>
            <p className="mb-2">info@pizza.com</p>
            <p>Main Branch: XYZ Road, Karachi, Pakistan</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-pizza-yellow">Our Timing</h3>
            <p className='mb-4'>4:00 P.M To 3:00 A.M</p>
            <h3 className="text-xl font-bold mb-4 text-pizza-yellow">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pizza-yellow"><FaFacebook className="text-xl" /></a>
              <a href="#" className="hover:text-pizza-yellow"><FaInstagram className="text-xl" /></a>
              <a href="#" className="hover:text-pizza-yellow"><FaTwitter className="text-xl" /></a>
              <a href="#" className="hover:text-pizza-yellow"><FaYoutube className="text-xl" /></a>
            </div>
          </div>



          {/* Contact */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4 text-pizza-yellow">CONTACT US</h3>
            <p className="mb-2">111-666-111</p>
            <p className="mb-2">info@pizzamax.com.pk</p>
            <p>Head Office: XYZ Road, Karachi, Pakistan</p>
          </div> */}


        </div>

      </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} PizzaMax. All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;