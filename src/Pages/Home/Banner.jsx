import { easeOut, motion } from "framer-motion";
import portfolioPic from "../../assets/porfolio img.jpg";
import SocialLinks from "./SocialLinks";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center">
        {/* Profile Picture with Animation */}
        <motion.div
          className="flex-1 flex justify-center"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={portfolioPic}
            alt="Portfolio"
            className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover border-l-4 border-b-4 border-blue-400 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
        </motion.div>

        {/* Introductory Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            animate={{ x: [0, 10, 0], color: ["#2563EB", "#1F2937"] }}
            transition={{
              duration: 3,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Hi,
            <br /> <span>I'm Sahidul Islam Hridoy</span>
            <br />
            <span className="text-blue-500">Junior Web Developer</span>
          </motion.h1>

          <p className="py-6 text-gray-700 text-lg">
            I'm seeking an entry-level web developer position where I can apply
            my skills in HTML, CSS, JavaScript, and React. My goal is to create
            seamless and engaging web experiences that enhance user interaction.
          </p>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary px-8 py-3"
          >
            Download Resume
          </motion.a>
          <SocialLinks></SocialLinks>
        </div>
      </div>
    </div>
  );
};

export default Banner;
