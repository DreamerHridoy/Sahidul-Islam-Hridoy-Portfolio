import { motion } from "framer-motion";

const projects = [
  {
    title: "Jack Hammer Corporation",
    description:
      "This is a full stack application where users can login and buy different kinds of tools. After ordering, users can see their order list.",
    liveLink: "#",
    exploreLink: "#",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
  },
  {
    title: "Create-Eve Art",
    description:
      "This is a React application for an independent photographer where users can login and book the photographer schedule.",
    liveLink: "#",
    exploreLink: "#",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
  },
  {
    title: "Bastrop Convention Center",
    description:
      "This is a React application where users can see the packages and book the convention center for their occasion.",
    liveLink: "#",
    exploreLink: "#",
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
