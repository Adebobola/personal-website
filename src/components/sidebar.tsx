import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.clear();
  //   sessionStorage.clear();
  //   navigate("/signin");
  // };

  const menuLinks = [
    {
      label: "Home",
      to: "/",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
    },
    {
      label: "About",
      to: "/about",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
    },
    {
      label: "Projects",
      to: "/projects",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
    {
      label: "Contact",
      to: "/contact",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16v16H4z" />
          <polyline points="4,4 12,12 20,4" />
        </svg>
      ),
    }
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r shadow-sm w-64 transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0`}
      >
        {/* Branding */}
        <div className="p-6 border-b flex items-center gap-3">
          <img src="/panda4.svg" alt="panda" className="w-8 h-8" />
          <h1 className="text-xl font-semibold text-gray-900">Adebobola</h1>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b flex items-center gap-3">
          <img
            src="/default-avatar.png"
            alt="User"
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="text-sm font-semibold">Guest User</p>
            <span className="text-xs text-gray-500">User</span>
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-4 flex flex-col gap-1">
          {menuLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all ${
                  isActive ? "text-red-600 bg-red-50" : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        {/* <div className="absolute bottom-5 w-full px-6">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-gray-600 hover:text-red-600 hover:bg-red-50 w-full px-4 py-3 rounded-lg transition"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        </div> */}
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-20 left-4 z-50 bg-white p-2 rounded-lg shadow border"
        aria-label="Toggle sidebar"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;