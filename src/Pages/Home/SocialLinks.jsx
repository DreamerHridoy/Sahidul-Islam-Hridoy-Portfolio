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
        href="https://www.linkedin.com/in/sahidul-islam-hridoy-841a0b317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-3xl hover:text-blue-800 transition-transform transform hover:scale-110"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/DreamerHridoy"
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
        href="https://www.facebook.com/share/1JhipKCVJK/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 text-3xl hover:text-blue-900 transition-transform transform hover:scale-110"
      >
        <FaFacebook />
      </a>

      {/* Email */}
      <a
        href="mailto:eng.sahidul.hridoy@gmail.com"
        className="text-red-500 text-3xl hover:text-red-700 transition-transform transform hover:scale-110"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;
