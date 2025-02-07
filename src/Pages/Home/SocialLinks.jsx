import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-3xl hover:text-blue-800 transition-transform transform hover:scale-110"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 text-3xl hover:text-black transition-transform transform hover:scale-110"
      >
        <FaGithub />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 text-3xl hover:text-blue-600 transition-transform transform hover:scale-110"
      >
        <FaTwitter />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 text-3xl hover:text-blue-900 transition-transform transform hover:scale-110"
      >
        <FaFacebook />
      </a>

      {/* Email */}
      <a
        href="mailto:your-email@example.com"
        className="text-red-500 text-3xl hover:text-red-700 transition-transform transform hover:scale-110"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;
