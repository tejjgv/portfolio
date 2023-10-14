import "bootstrap/dist/css/bootstrap.min.css";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import "./FooterDiv.css";

const icons = {
  Github: [FaGithub, "Github", "https://github.com/ajayganeshch"],
  Instagram: [
    FaInstagram,
    "Instagram",
    "https://www.instagram.com/ajay__ganesh/",
  ],
  LinkedinIn: [
    FaLinkedinIn,
    "Linkedin",
    "https://www.linkedin.com/in/ajayganeshch/",
  ],
  Email: [FaEnvelope, "Email", "mailto:ajayganesh789@gmail.com"],
};

export function FooterDiv() {
  return (
    <div className="footer-div">
      <FooterLinks />
      <div className="footer-copyright">
        <em>Copyright Deservers To Ajay Ganesh ©️</em>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="footer-div-links container">
      <GetIcons name={"Github"} />
      <GetIcons name={"Instagram"} />
      <GetIcons name={"LinkedinIn"} />
      <GetIcons name={"Email"} />
    </div>
  );
}
function GetIcons({ name }) {
  const IconComponent = icons[name][0];
  let componentName = icons[name][1];
  let linkForComponent = icons[name][2];
  return (
    <div className="icon-div">
      <IconComponent className="footer-icons" size={30} />
      <a
        className="icon-name"
        href={linkForComponent}
        target="_blank"
        rel="noopener noreferrer"
      >
        {componentName}
      </a>
    </div>
  );
}
