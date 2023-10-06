import Button from "../Components/Button";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section className="hero_section">
        <div className="hero_container">
          <h1 className="hero_h1">NIHDS</h1>
          <p className="hero_p">
            Nigeria Innovative Hardware Development Society.
          </p>
          <Button />
        </div>
      </section>
      <section className="who_we_are">
        <div className="card_one">
          <div className="card_one_text">
            <h2 className="card_one_h2">Who We Are.</h2>
            <p>
              NIHDS is not just a community, it is a platform that serves as a
              cutting edge tool for hardware developers, startup founders
              entrepreneurs and AI engineers in Nigeria with a common goal
              called "National Development".
              <a href="/about">Read more about us</a>
            </p>
          </div>
          <div className="card_one_img"></div>
        </div>
        <div className="card_two">
          <div className="card_two_text">
            <h2 className="card_two_h2">What we do </h2>
            <p>
              We empower hardware developers, startup founders, entrepreneurs,
              and AI engineers in Nigeria by providing a collaborative platform
              for innovation, knowledge sharing, and mutual support in the
              rapidly evolving fields of hardware, AI, and IoT..
            </p>
          </div>
          <div className="card_two_img"></div>
        </div>
        <div className="card_three">
          <div className="card_three_text">
            <h2 className="card_three_h2">Why we exist</h2>
            <p>
              Through our initiatives and collaborative efforts, we aim to
              catalyze Nigeria's hardware and AI industry, creating a thriving
              ecosystem that not only generates technological advancements but
              also contributes significantly to economic prosperity and job
              creation within the country.
            </p>
          </div>
          <div className="card_three_img"></div>
        </div>
      </section>
      <section className="programs">
        <h2>Membership benefits</h2>
        <ul>
          <li>Education and Skill development</li>
          <li>Incubators and Accelerators</li>
          <li>Research and Development</li>
          <li>Infrastructure</li>
          <li>Regulatory framework</li>
          <li>Access to Funding</li>
          <li>Collaboration and Networking</li>
          <li>
            <a href="/about#full_program">and lots more</a>
          </li>
        </ul>
      </section>
      <section className="body_cta">
        <div>
          <h3>Connect with innovative minds</h3>
          <Button />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
