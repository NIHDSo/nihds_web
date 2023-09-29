import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className="about_wrapper">
        <div className="mission">
          <h3>Mission Statement</h3>
          <p>
            Our mission is to establish a dynamic and inclusive platform that
            unites hardware and AI enthusiasts, makers, entrepreneurs and
            professionals. We are dedicated to promoting a culture of
            collaboration, education and innovation within the hardware sector
            in Nigeria. The goal is to empower individuals and start-ups to
            explore, create and excel in hardware technology, thereby
            contributing to local economic growth, global challenges,
            technological self reliance and sustainable development in Nigeria.
          </p>
        </div>
        <div className="vision">
          <h3>Vision Statement</h3>
          <p>
            The vision is to become the cornerstone of hardware and AI
            innovation and entrepreneurship in the Nation. We envision a future
            where our community serves as a thriving hub for inventors, startups
            and professionals are at forefront driving technological
            breakthroughs, excellence, solving unique problems and economic
            prosperity. Through collaborative effort, skill development and a
            strong support network we aim to empower individuals and
            organisations with our platform to lead a future of hardware and AI
            innovation, positioning Nigeria as a recognized global centre for
            hardware and AI innovation and creativity.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
