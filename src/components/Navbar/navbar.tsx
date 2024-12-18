import React from 'react';
import { FaShoppingBasket, FaRegHeart, FaSearch, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Brand Name */}
          <div className="flex-shrink-0 text-xl font-semibold text-gray-800">
            BrandName
          </div>

          {/* Center Section: Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-indigo-600 transition duration-300">Home</a>
            <a href="/shop" className="text-gray-800 hover:text-indigo-600 transition duration-300">Shop</a>
            <a href="/about" className="text-gray-800 hover:text-indigo-600 transition duration-300">About</a>
            <a href="/blog" className="text-gray-800 hover:text-indigo-600 transition duration-300">Blog</a>
            <a href="/contact" className="text-gray-800 hover:text-indigo-600 transition duration-300">Contact</a>
            <a href="/pages" className="text-gray-800 hover:text-indigo-600 transition duration-300">Pages</a>
          </div>

          {/* Right Section: Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-800 hover:text-indigo-600">
              <FaSearch className="h-6 w-6" />
            </button>
            <button className="text-gray-800 hover:text-indigo-600">
              <FaShoppingBasket className="h-6 w-6" />
            </button>
            <button className="text-gray-800 hover:text-indigo-600">
              <FaRegHeart className="h-6 w-6" />
            </button>
            <button className="text-gray-800 hover:text-indigo-600">
              <FaUser className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
