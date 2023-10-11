import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Executive from "../Components/Executive";
import kb from "../assets/kemisola-bolarinwa.jpg";
import mo from "../assets/michael-ojo.jpg";
import so from "../assets/seyi-ojelabi.jpg";
import dy from "../assets/dada-yemisi.jpg";
import ra from "../assets/ronald-ajoboye.png"

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className="about_wrapper">
        <div className="summary">
          <h3>About Us</h3>
          <p>
            A vibrant and inclusive community aimed at bridging the gap and
            overcoming the challenges faced by hardware developers, startup
            founders, entrepreneurs, and AI engineers in Nigeria. The platform
            serves as a collaborative space that fosters innovation, knowledge
            sharing, and mutual support among individuals and entities involved
            in the hardware, AI, and IoT industries. By providing a supportive
            environment, access to resources, and opportunities for networking,
            It empowers its members to transform their ideas into successful
            ventures, driving technological advancement and economic growth in
            Nigeria.
          </p>
        </div>
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
            and professionals are at forefront dryiving technological
            breakthroughs, excellence, solving unique problems and economic
            prosperity. Through collaborative effort, skill development and a
            strong support network we aim to empower individuals and
            organisations with our platform to lead a future of hardware and AI
            innovation, positioning Nigeria as a recognized global centre for
            hardware and AI innovation and creativity.
          </p>
        </div>
        <div className="full_program" id="full_program">
          <h3>All Our Programs</h3>
          <p>
            The NIHDS core value is to cultivate a thriving ecosystem that
            support and nurture hardware and AI engineer with ; Promoting a
            hardware ecosystem in Nigeria, like in any other country, involves
            several steps and strategies. Here are some key considerations:
          </p>
          <ul>
            <li>
              <b>Education and Skill Development</b>: Invest in education and
              training programs focused on hardware development, electronics,
              and engineering. Partner with universities and technical
              institutions to offer relevant courses and workshops.
            </li>{" "}
            <li>
              {" "}
              <b>Incubators and Accelerators</b>: Establish hardware-focused
              incubators and accelerators to support startups and entrepreneurs.
              Provide mentorship, funding, and access to resources.
            </li>{" "}
            <li>
              <b>Research and Development (R&D) Grants</b>: Create
              government-backed grants and funding programs for hardware R&D
              projects. Encourage collaboration between academia and industry.
            </li>{" "}
            <li>
              <b>Infrastructure</b>: Ensure reliable and affordable access to
              power, internet, and transportation, as these are crucial for
              hardware production.
            </li>{" "}
            <li>
              {" "}
              <b>Regulatory Framework</b>: Simplify and streamline regulations
              related to hardware manufacturing and import/export. Make it
              easier for startups to navigate the legal aspects of their
              business.
            </li>
            <li>
              <b>Access to Funding</b>: Promote access to capital for hardware
              startups through venture capital, angel investors, and
              government-backed loans or grants.
            </li>{" "}
            <li>
              <b>Collaboration and Networking</b>: Foster a culture of
              collaboration among hardware startups, researchers, and
              established companies. Encourage networking events and
              conferences.
            </li>{" "}
            <li>
              {" "}
              <b>Local Manufacturing</b>: Encourage local manufacturing of
              hardware components and products to reduce dependency on imports
              and create jobs.
            </li>{" "}
            <li>
              {" "}
              <b>Intellectual Property Protection</b>: Strengthen intellectual
              property laws to protect innovations and encourage inventors to
              share their ideas without fear of theft.
            </li>
            <li>
              <b>Market Access</b>: Help hardware startups access local and
              international markets. This may involve trade agreements and
              export support.
            </li>{" "}
            <li>
              <b>Consumer Education:</b> Educate consumers about the benefits of
              locally produced hardware, promoting a "Buy Nigerian" campaign.
            </li>{" "}
            <li>
              {" "}
              <b>Quality Control and Standards:</b> Develop and enforce quality
              standards to ensure that locally produced hardware meets
              international benchmarks.
            </li>{" "}
            <li>
              <b>Sustainability</b>: Encourage eco-friendly practices in
              hardware manufacturing to appeal to environmentally conscious
              consumers.
            </li>
            <li>
              <b>Public-Private Partnerships:</b> Foster collaborations between
              the government, private sector, and academia to create a conducive
              environment for hardware innovation.
            </li>{" "}
            <li>
              <b>Public Awareness:</b> Promote awareness of the potential of
              hardware innovation in job creation and economic growth. Highlight
              success stories to inspire future entrepreneurs.
            </li>{" "}
            <li>
              <b>Supportive Policies:</b> Implement policies that incentivize
              hardware development, such as tax breaks for R&D expenses and
              reduced import tariffs on essential components.
            </li>{" "}
            <li>
              <b>Infrastructure for Testing and Certification:</b> Establish
              testing and certification centres to ensure that hardware products
              meet safety and quality standards.
            </li>{" "}
            <li>
              <b>International Collaboration:</b> Partner with international
              organizations and countries with thriving hardware ecosystems to
              learn from their experiences and foster global connections.
            </li>
          </ul>
        </div>
      </div>
      <section className="full_executives" id="full_executives">
        <h2>Meet All our Executives</h2>
        <div>
          <Executive
            name="Bolarinwa Kemisola"
            title=" The President"
            li_link="https://linkedin.com/in/kemisola-bolarinwa-399694182"
            img_src={kb}
          />
          <Executive
            name="Dr. Agu Collins"
            title="The Chairman"
            li_link="https://linkedin.com/in/kemisola-bolarinwa-399694182"
            img_src={kb}
          />
          <Executive
            name="Engr. Ahmad Sadiq"
            title="The Vice Chairman"
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
            name="Olorunnope John"
            title="The Secretary 2"
            li_link="https://linkedin.com/in/kemisola-bolarinwa-399694182"
            img_src={kb}
          />
          <Executive
            name="Dada Yemisi"
            title="The Treasurer"
            li_link="https://linkedin.com/in/kemisola-bolarinwa-399694182"
            img_src={dy}
          />

          <Executive
            name="Michael Ojo"
            title="Public Relations Officer 1"
            li_link="https://linkedin.com/in/michael-ojo-38271a130"
            img_src={mo}
          />
          <Executive
            name="Agata John"
            title="Public Relations Officer 2"
            li_link="https://linkedin.com/in/michael-ojo-38271a130"
            img_src={kb}
          />
          <Executive
            name="Seyi Ojelabi"
            title="Head of Research"
            li_link="https://www.linkedin.com/in/seyi-ojelabi-918779198"
            img_src={so}
          />
        </div>
      </section>
      <section className="body_cta">
        <div>
          <h3>Now ready to join?</h3>
          <Button />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
