// import React from "react";

const Projects = () => {
  const projectList = [
    { title: "Bulk SMS Portal", description: "Scalable messaging platform with API integration.", link: "#" },
    { title: "Phonebook Module", description: "Smart contact grouping and transactional display system.", link: "#" },
    { title: "Microbial Genome Analysis", description: "Bioinformatics workflow for uncultured microbes.", link: "#" },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectList.map((project, idx) => (
          <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
