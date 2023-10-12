import Button from "../Components/Button";
import Executive from "../Components/Executive";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import kb from "../assets/kemisola-bolarinwa.jpg";
import mo from "../assets/michael-ojo.jpg";
import so from "../assets/seyi-ojelabi.jpg";
import dy from "../assets/dada-yemisi.jpg";
import ra from "../assets/ronald-ajoboye.png";

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
              Nigeria's hardware and AI industry lags globally due to limited
              government support. China excels in hardware, while Nigeria
              struggles with minimal expertise. Initiatives like NIHDS aim to
              unite developers for national growth, boosting productivity,
              reducing unemployment, and decreasing imports. Nigeria's potential
              could spark an industrial revolution and global recognition.
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
      <section className="executive_panel">
        <h2>Meet the Executives</h2>
        <Executive
          name="Dr. Agu Collins"
          title="The Chairman"
          li_link="https://linkedin.com/in/kemisola-bolarinwa-399694182"
          img_src={kb}
        />
        <Executive
          name="Bolarinwa Kemisola"
          title=" The President"
          li_link="https://linkedin.com/in/kemisola-bolarinwa-399694182"
          img_src={kb}
        />

        <Executive
          name="Ronald Ajiboye"
          title="The Secretary 1"
          li_link="https://linkedin.com/in/kemisola-bolarinwa-399694182"
          img_src={ra}
        />
        <Executive
          name="Michael Ojo"
          title="Public Relations Officer 1"
          li_link="https://linkedin.com/in/michael-ojo-38271a130"
          img_src={mo}
        />
        <Executive
          name="Seyi Ojelabi"
          title="Head of Research"
          li_link="https://www.linkedin.com/in/seyi-ojelabi-918779198"
          img_src={so}
        />
        <p>
          <a href="/about#full_executives">Meet the Core team</a>
        </p>
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
