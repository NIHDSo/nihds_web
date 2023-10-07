import li_icon from "../assets/react.svg";

const Executive = (props) => {
  return (
    <>
      <div className="executive">
        <div className="exec_img_div">
          <img src={props.img_src} />
        </div>
        <div className="exec_text">
          <p>{props.name}</p>
          <p>{props.title}</p>
          <div className="exec_socials">
            <a href={props.li_link} className="social-icon">
              <img src={li_icon} alt="LinkedIn Profile" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Executive;
