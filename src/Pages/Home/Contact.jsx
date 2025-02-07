import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contacts"
      className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Get in Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-gray-800 rounded-xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
            <button className="btn w-full bg-teal-400 hover:bg-teal-500 text-black font-bold">
              Submit
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-gray-800 rounded-xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaUser className="text-teal-400" />
              <span>Sahidul Islam Hridoy</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-teal-400" />
              <span>+8801839161037</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-teal-400" />
              <span>eng.sahidul.hridoy@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-teal-400" />
              <span>Chandgaon, Chattogram, Bangladesh</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
