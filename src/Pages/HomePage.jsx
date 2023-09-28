import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section className="hero_section">
        <div className="hero_container">
          <h1 className="hero_h1">NIHDS</h1>
          <p className="hero_p">
            Higeria Innovative Hardware Development Society.
          </p>
          <div className="hero_btn">
            <button className="join_btn">
              <a href="/">Join Community</a>
            </button>
          </div>
        </div>
        <div></div>
      </section>
      <section>
        <div className="who_we_are">
          <div className="card_one">
            <h2 className="card_one_h2">Who We Are.</h2>
            <p>
              NIHDS is not just a community, it is a platform that serves as a
              cutting edge tool for hardware developers, startup founders
              entrepreneurs and AI engineers in Nigeria with a common goal
              called "National Development".
            </p>
          </div>
          <div className="card_two"></div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
