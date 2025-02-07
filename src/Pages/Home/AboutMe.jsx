import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="about" className="bg-base-100 py-16 px-4 md:px-16 lg:px-32">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="mb-4">
          Hello! I'm{" "}
          <span className="text-blue-600 font-semibold">
            Sahidul Islam Hridoy
          </span>
          , a passionate Junior Web Developer with a strong foundation in modern
          web technologies. I graduated with a B.Sc. in Computer Science and
          Engineering from IIUC, and I’ve been honing my skills through various
          projects and hands-on experiences ever since.
        </p>

        <p className="mb-4">
          I specialize in building responsive, user-friendly web applications
          using technologies like
          <span className="font-semibold text-blue-600">
            {" "}
            HTML, CSS, JavaScript, and React
          </span>
          . Additionally, I have experience working with back-end tools like
          <span className="font-semibold text-blue-600"> MongoDB</span> and
          <span className="font-semibold text-blue-600"> Firebase</span>. My
          curiosity and love for learning keep me updated with the latest
          industry trends.
        </p>

        <p className="mb-4">
          Apart from coding, I enjoy{" "}
          <span className="font-semibold text-blue-600">
            traveling, meeting new people, and exploring diverse cultures
          </span>
          . These experiences have helped me develop strong communication and
          problem-solving skills, which I bring into my work.
        </p>

        <p className="mb-4">
          My ultimate goal is to contribute to creating seamless, intuitive, and
          dynamic digital experiences. I believe in continuous growth and am
          always looking forward to opportunities that challenge my skills and
          push me to innovate.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center mt-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default AboutMe;
