import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className="flex items-center justify-around border-b-2 border-gray-300 p-4">
      {/* Search Input */}
      <input
        className="px-4 py-2 w-56 md:w-72 bg-gray-100 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-gray-400"
        type="text"
        placeholder="Search for shoes..."
      />

      {/* Icons Section */}
      <div className="flex gap-4">
        <a href="#" aria-label="Wishlist">
          <FiHeart className="w-6 h-6 text-gray-700 hover:text-red-500 transition" />
        </a>
        <a href="#" aria-label="User Account">
          <AiOutlineUserAdd className="w-6 h-6 text-gray-700 hover:text-blue-500 transition" />
        </a>
        <a href="#" aria-label="Shopping Cart">
          <AiOutlineShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-500 transition" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
