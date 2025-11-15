import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-stone-900/90 backdrop-blur-md fixed top-0 right-0 left-0 md:left-64 z-40 border-b border-stone-700">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-amber-400 text-stone-900 font-semibold rounded-lg hover:bg-amber-500 transition text-sm"
          >
            Are you Adebobola?
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
