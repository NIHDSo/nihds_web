import li_icon from "../assets/react.svg";

const Executive = (props) => {
  return (
    <>
      <div className="executive">
        <div className="exec_img_div">
          <img src={props.img_src} className="exec_img" />
        </div>
        <div className="exec_text">
          <p>
            <b>{props.name}</b>
          </p>
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
