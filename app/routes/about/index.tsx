import { li } from "framer-motion/client";
import AboutPreview from "~/components/AboutPreview";

const AboutPage = () => {
  return (
    <div className="max-w-5xl max-auto px-6 py-16 bg-gray-900">
      {/* Intro section */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="images/fofo.png"
          className="w-40 h-40 rounded-full object-cover border-2 border-blue-500 shadow-md"
          alt="Lebo"
        />
        <div>
          <h1 className="text-3xl text-white font-bold mb-2">Hi, I'm Lebo</h1>
          <p className="text-gray-300 text-md">
            Full-stack web developer with 2 experience in React, Next.js,
            TypeScript, Node.js, Prisma, and PostgreSQL. I build responsive,
            SEO-friendly websites and web applications that combine clean design
            with reliable functionality.
          </p>
        </div>
      </div>
      {/* Bio section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          To build innovative, accessible, and high-performance
          web applications that solve real-world problems and help businesses
          thrive through modern technology.
        </p>
      </div>

      {/* Tech stack section */}
      <h2 className="text-2xl font-semibold text-white mb-4">
        <code>My Tech Stack</code>
      </h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          'React',
          'Next.js',
          'Tailwind Css',
          'Node.js',
          'MongoDB',
          'Prisma',
          'PostgreSQL',
          'TypeScript',
          'WordPress',
        ].map((tech) =>(
          <li key={tech} className="bg-gray-700 px-4 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>

      {/* Tools */}
      <h2 className="text-2xl font-semibold text-white mb-4 mt-4">
        <code>Tools</code>
      </h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          'Vs Code',
          'Git & GitHub',
          'Postman',
          'Chrome DevTools',
          'Docker',
        ].map((tech) =>(
          <li key={tech} className="bg-gray-700 px-4 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
