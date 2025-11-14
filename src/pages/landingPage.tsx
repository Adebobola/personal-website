// import React from "react";

const LandingPage = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-600 text-white px-4 text-center">
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
    </section>
  );
};

export default LandingPage;
