import { Link } from "react-router";
import { FaPhone } from "react-icons/fa";

const Hero = () => {
  return (
    <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4">Hi, I'm Lebo 👋</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
        Full-stack developer building modern web apps with React, Next.js,
        TypeScript & AI. Passionate about solving real-world problems with tech.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-6 rounded"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="border border-blue-500 text-blue-400 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
         <FaPhone className="inline-block mr-2" /> Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
