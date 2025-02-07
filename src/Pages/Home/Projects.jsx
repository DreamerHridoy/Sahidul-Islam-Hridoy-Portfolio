import { motion } from "framer-motion";

const projects = [
  {
    title: "Medicine Selling E-commerce",
    description:
      "💊 Medicine Selling eCommerce Website This project is a full-stack eCommerce platform for selling medicines online. It includes a user-friendly frontend built with React and a secure backend using Express.js and MongoDB.",
    liveLink: "https://medicine-selling-ff8ac.web.app/",
    exploreLink: "https://medicine-selling-ff8ac.web.app/",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "🎓 Tutor Booking Platform 📚",
    description:
      "🎓 Tutor Booking Platform 📚 Welcome to the Tutor Booking Platform—an innovative and user-friendly solution designed to connect students with qualified tutors across various subjects and languages.",
    liveLink: "https://online-tutor-booking-64a1d.web.app/",
    exploreLink: "https://online-tutor-booking-64a1d.web.app/",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "🏀 Sports Equipment Store 🏐",
    description:
      "A full-stack web application for buying and managing sports equipment. Built with React, TailwindCSS, DaisyUI, Firebase, and a backend powered by Express.js, MongoDB, and Node.js.",
    liveLink: "https://sports-equipment-ba8eb.web.app/",
    exploreLink: "https://sports-equipment-ba8eb.web.app/",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-teal-400 mb-8"
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800 p-4 rounded-2xl shadow-xl hover:shadow-teal-500/50 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-40 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-center">
              {project.title}
            </h2>
            <p className="text-sm text-gray-400 mb-4 text-center">
              {project.description}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={project.liveLink}
                className="btn bg-teal-400 hover:bg-teal-500 text-black font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Website
              </a>
              <a
                href={project.exploreLink}
                className="btn bg-teal-400 hover:bg-teal-500 text-black font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
