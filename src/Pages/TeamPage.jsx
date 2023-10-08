import NavBar from "../Components/NavBar";
import Executive from "../Components/Executive";
import kb from "../assets/engineers.jpg";

const TeamPage = () => {
  return (
    <>
      <NavBar />
      <h2>This is the Team Page</h2>
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
        name="Ronald Ajiboye"
        title="The Secretary 1"
        li_link="https://linkedin.com/in/kemisola-bolarinwa-399694182"
        img_src={kb}
      />
      <Executive
        name="Michael Ojo"
        title="Public Relations Officer 1"
        li_link="https://linkedin.com/in/michael-ojo-38271a130"
        img_src={kb}
      />
      <Executive
        name="Seyi Ojelabi"
        title="Head of Research"
        li_link="https://www.linkedin.com/in/seyi-ojelabi-918779198"
        img_src={so}
      />
    </>
  );
};

export default TeamPage;
