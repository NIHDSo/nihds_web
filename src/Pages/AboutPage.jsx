import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Executive from "../Components/Executive";
import { accordionList, allOrdredList } from "../mockData/data";
import AccordionList from "../Components/AccordionList";


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

          <div style={{ marginTop: "50px" }}>
            {accordionList.map((item, id) => (
              <AccordionList
                id={id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

        </div>
      </div>
      <section className="full_executives" id="full_executives">
        <h2>Meet All our Executives</h2>
        <div style={{ flexDirection: 'row', display: "flex", flexWrap: "wrap", marginLeft: "30px", marginRight: "30px" }}>
          {allOrdredList.map((executive, id) => (
            <Executive
              key={id}
              name={executive.name}
              title={executive.title}
              li_link={executive.link}
              img_src={executive.image}
            />
          ))}
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
