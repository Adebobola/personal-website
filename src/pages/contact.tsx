import { useEffect, useState } from "react";
import Loading from "../components/loading"; 

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" className="relative py-20 px-4 bg-gray-800 text-white text-center">
      {/* Page Content */}
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-6">
        I’m open to collaborations, speaking opportunities, or just a chat about tech and science.
      </p>
      <a
        href="mailto:aeadereti@gmail.com"
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
      >
        Contact Me
      </a>

      {/* Loading Overlay */}
      {loading && <Loading />}
    </section>
  );
};

export default Contact;
