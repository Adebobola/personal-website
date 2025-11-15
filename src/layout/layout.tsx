import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar  */}
      <Sidebar />
      
      {/* Main content  */}
      <div className="flex flex-col flex-1 ml-0 md:ml-64">
        {/* Navbar  */}
        <Navbar />
        
        {/* Page content  */}
        <main className="flex-1 overflow-y-auto mt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;