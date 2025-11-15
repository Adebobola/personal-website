import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Layout from "./layout/layout";

function App() {
  return (
    <div className="font-sans w-full overflow-x-hidden">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;