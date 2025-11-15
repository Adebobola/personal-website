import { useEffect, useState } from "react";
import Loading from "../components/loading"

const LandingPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-stone-400 text-white px-4 text-center">
      
      {/* Page Content */}
      <div className="mb-8 w-80 h-80 mx-auto rounded-full bg-stone-600 flex items-center justify-center overflow-hidden">
        {/* Placeholder  */}
        <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-amber-400">
          A
        </div>
        {/* <img src="/path-to-image.jpg" alt="Adebobola" className="w-full h-full object-cover rounded-full" /> */}
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m Adebobola
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-xl">
        I’m a software engineer and bioinformatics enthusiast building tools, communities, and ideas at the intersection of science and technology.
      </p>
      <a
        href="#projects"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
      >
        View My Work
      </a>

      {/* Loading Overlay */}
      {loading && <Loading />}
    </section>
  );
};

export default LandingPage;
