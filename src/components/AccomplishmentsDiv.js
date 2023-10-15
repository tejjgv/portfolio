import "./AccomplishmentsDiv.css";
import HousieGameImg from "../Housie-Game-Img.png";
// import MozillaFireFox from "../firefox-logo.png";
import Portfolio from "../portfolio-img.png";
// import { Link as ScrollLink } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import FlamesImg from "../flame-img.png";
let accomplishmentsContent = [
  {
    emoji: "🌐",
    name: "Portfolio Website",
    keyPoints: "⚛️ Made Using React.",
    link: "/",
    linkText: "Click Here",
    img: Portfolio,
    external: false,
  },

  {
    emoji: "🎲",
    name: "Housie Game",
    keyPoints: "💻 Made using JavaScript, HTML, CSS.",
    link: "https://dwarakacherladeepikareddy.github.io/game/",
    linkText: "Visit Site",
    img: HousieGameImg,
    external: true,
  },
  {
    emoji: "🔥",
    name: "Flames",
    keyPoints: "🐍 Made Using Python.",
    link: "k",
    linkText: "Visit Git Repo",
    img: FlamesImg,
    external: true,
  },
];

// {
//   name: "Open-Source User Interface,Mozilla",
//   keyPoints:
//     "An active member in Open-Source User Interface (under Mozilla) Club.",
//   link: null,
//   img: MozillaFireFox,
// },

export function Accomplishments() {
  return (
    <div className="accomplishments-div">
      <Heading />
      <AccomplishmentsContent content={accomplishmentsContent} />
    </div>
  );
}

function Heading() {
  return <div className="accomplishments-div-head">Accomplishments 🏆:</div>;
}

function AccomplishmentsContent({ content }) {
  return (
    <div className="accomplishment-point">
      {content.map((current, i) => (
        <AccomplishmentPoint key={i + 3} point={current} />
      ))}
    </div>
  );
}

function AccomplishmentPoint({ point }) {
  // console.log(point);
  return (
    <div className="accomplishment-point-div">
      <div>
        <span className="accomplishment-point-emoji">{point.emoji}</span>
        <span className="accomplishment-point-name">{point.name}:</span>
      </div>
      <div className="accompilshment-content-img-text">
        <div className="accomplishment-content-text">
          <p>{point.keyPoints}</p>
          <span>🔗 Link: </span>
          <a
            href={point.link}
            target="_blank"
            rel="noopener noreferrer"
            className="accomplishment-point-link"
          >
            {point.linkText}{" "}
            <FaArrowUp style={{ transform: "rotate(45deg)" }} />
          </a>
        </div>
        <div className="accompilshment-content-img img-fluid img-thumbnail">
          <img src={point.img} alt={point.name} />
        </div>
      </div>
    </div>
  );
}

// {point.external ? (
//   <a
//     href={point.link}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="accomplishment-point-link"
//   >
//     {point.linkText}{" "}
//     <FaArrowUp style={{ transform: "rotate(45deg)" }} />
//   </a>
// ) : (
//   <ScrollLink
//     className="accomplishment-point-link"
//     to={point.link}
//     smooth={true}
//     duration={100}
//     style={{ textDecoration: "underline" }}
//   >
//     {point.linkText}{" "}
//     <FaArrowUp style={{ transform: "rotate(45deg)" }} />
//   </ScrollLink>
// )}
