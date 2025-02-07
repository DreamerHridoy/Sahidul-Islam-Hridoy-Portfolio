import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import EducationalQualifications from "./EducationalQualifications";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./skills";
import WorkExperience from "./WorkExperience";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <EducationalQualifications></EducationalQualifications>
      <Skills></Skills>
      <Projects></Projects>
      <WorkExperience></WorkExperience>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
