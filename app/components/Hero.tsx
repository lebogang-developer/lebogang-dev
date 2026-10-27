import { Link } from "react-router";
import { FaPhone } from "react-icons/fa";

const Hero = () => {
  return (
    <header
      className="relative isolate overflow-hidden text-center py-24 px-4 sm:py-32 text-white bg-cover bg-center bg-no-repeat transition-colors duration-300"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-900/75 to-blue-950/70" />

      {/* Hero content */}
      <div className="relative mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm Lebo 👋
        </h2>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Full-stack developer building modern web apps with React, Next.js,
          TypeScript & AI. Passionate about solving real-world problems with
          tech.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium py-3 px-7 rounded-lg"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-blue-400 text-white px-7 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            <FaPhone className="inline-block mr-2" />
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
