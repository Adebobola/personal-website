import Navbar from "./components/navbar";
import LandingPage from "./pages/landingPage";
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;