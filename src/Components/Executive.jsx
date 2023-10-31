import li_icon from "../assets/linkedin-logo.svg";

const Executive = (props) => {
  return (
    <>
      <div className="executive">
        <div className="exec_img_div">
          <img src={props.img_src} className="exec_img" alt="image" />
        </div>
        <div className="exec_text">
          <p>
            <b>{props.name}</b>
          </p>
          <p className="exec_title">{props.title}</p>
          <div className="exec_socials">
            <a href={props.li_link} className="social-icon">
              <img src={li_icon} alt="LinkedIn Profile" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Executive;
