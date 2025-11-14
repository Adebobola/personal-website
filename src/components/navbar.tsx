// import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-900 text-white">
      <div className="text-2xl font-bold">Adebobola</div>
      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
