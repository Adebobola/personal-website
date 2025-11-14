import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center bg-gray-900 text-white p-4">
        <div className="text-xl font-bold">Adebobola</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar / Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex md:flex-col
          transition-transform duration-300 ease-in-out z-50
        `}
      >
        <div className="hidden md:flex flex-col items-start p-6 space-y-6">
          <div className="text-2xl font-bold mb-10">Adebobola</div>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Links */}
        <div className="md:hidden flex flex-col p-6 space-y-6 mt-16">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
