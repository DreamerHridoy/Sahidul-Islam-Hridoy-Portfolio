import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiDaisyui,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 />, level: 85 },
  { name: "CSS3", icon: <SiCss3 />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript />, level: 87 },
  { name: "React.js", icon: <SiReact />, level: 85 },
  { name: "Node.js", icon: <SiNodedotjs />, level: 80 },
  { name: "MongoDB", icon: <SiMongodb />, level: 80 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, level: 95 },
  { name: "Bootstrap", icon: <SiBootstrap />, level: 80 },
  { name: "Firebase", icon: <SiFirebase />, level: 80 },
  { name: "DaisyUI", icon: <SiDaisyui />, level: 85 },
];

const Skills = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="p-8 bg-base-100 text-base-content rounded-2xl shadow-2xl card w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-8">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-secondary">
              Expertise :
            </h3>
            <p className="mb-4">
              HTML5, CSS3, JavaScript, ES6, React.js, React Router, React
              Tailwind, Node.js, Express.js, MongoDB.
            </p>
            <h3 className="text-2xl font-semibold text-secondary">
              Comfortable :
            </h3>
            <p className="mb-4">
              React Bootstrap, React Query, React Toastify, React Hook Form.
            </p>
            <h3 className="text-2xl font-semibold text-secondary">Tools :</h3>
            <p>
              GitHub, VS Code, Chrome Dev Tools, Netlify, Heroku, Firebase, JWT,
              Stripe.
            </p>
          </div>

          <div>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 mb-5 bg-neutral p-4 rounded-lg shadow-md"
              >
                <div className="text-4xl text-accent">{skill.icon}</div>
                <div className="w-full">
                  <div className="flex justify-between font-medium text-lg">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <progress
                    className="progress progress-accent w-full h-2"
                    value={skill.level}
                    max="100"
                  ></progress>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
