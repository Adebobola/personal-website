import { useEffect, useState } from "react";
import Loading from "../components/loading"; 

const Projects: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const projectList = [
    { title: "Bulk SMS Portal", description: "Scalable messaging platform with API integration.", link: "#" },
    { title: "Phonebook Module", description: "Smart contact grouping and transactional display system.", link: "#" },
    { title: "Microbial Genome Analysis", description: "Bioinformatics workflow for uncultured microbes.", link: "#" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="relative py-20 px-4 bg-white text-gray-900">
      {/* Projects Content */}
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

      {/* Loading Overlay */}
      {loading && <Loading />}
    </section>
  );
};

export default Projects;
