import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <motion.h2
        className="text-4xl font-semibold text-primary text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Work Experience
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Work Experience Card 1 */}
        <motion.div
          className="w-full sm:w-96 p-6 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-primary mb-2">
            Business Operation & IT Coordinator
          </h3>
          <p className="text-lg text-gray-700 mb-4">Hani Properties Limited</p>
          <p className="text-gray-600 mb-6">[Dates of Employment]</p>
          <ul className="text-gray-700 space-y-2">
            <li>
              Managed business operations and IT infrastructure for the company.
            </li>
            <li>Coordinated between departments to streamline processes.</li>
            <li>Provided technical support and resolved IT-related issues.</li>
            <li>Ensured data security and optimized system performance.</li>
          </ul>
        </motion.div>

        {/* Work Experience Card 2 */}
        <motion.div
          className="w-full sm:w-96 p-6 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-primary mb-2">
            Sales Representative
          </h3>
          <p className="text-lg text-gray-700 mb-4">Okkhorbitro Prokashon</p>
          <p className="text-gray-600 mb-6">[Dates of Employment]</p>
          <ul className="text-gray-700 space-y-2">
            <li>Promoted and sold company products and services.</li>
            <li>Developed and maintained strong customer relationships.</li>
            <li>Achieved sales targets and contributed to business growth.</li>
            <li>
              Assisted in organizing marketing campaigns to promote products.
            </li>
          </ul>
        </motion.div>

        {/* Work Experience Card 3 */}
        <motion.div
          className="w-full sm:w-96 p-6 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-primary mb-2">
            Marketing Team Lead
          </h3>
          <p className="text-lg text-gray-700 mb-4">Obhai</p>
          <p className="text-gray-600 mb-6">[Dates of Employment]</p>
          <ul className="text-gray-700 space-y-2">
            <li>Led and coordinated marketing campaigns for the company.</li>
            <li>
              Developed strategies to increase brand visibility and engagement.
            </li>
            <li>
              Analyzed market trends and customer behavior to inform decisions.
            </li>
            <li>Managed the marketing team to ensure deadlines were met.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
