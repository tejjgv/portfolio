import "./ResumeDiv.css";
import { useState } from "react";
import { Link } from "react-scroll";
import JsLogo from "../js-icon.svg";

const resumeContent = {
  smallIntro:
    "🗣️ This is Tejeswar Reddy GV, Andhra Pradesh, India. I made this website mostly using react. This is short information, for more information reach AboutDiv",
  education: [
    {
      name: "Vellore Institute Of Technology",
      fieldOfStudy: "Bachelor of Technology",
      city: "Vellore",
      country: "India",
      keyPoints: ["Pursuing Course CSE Computer Science", "CGPA: 9.04"],
      yearOfJoin: "2021",
      endYear: "2025",
    },
    {
      name: "Narayana Junior College",
      fieldOfStudy: "Intermediate",
      city: "Madhapur",
      country: "India",
      keyPoints: ["Marks: 970/1000"],
      yearOfJoin: "2019",
      endYear: "2021",
    },
    {
      name: "Viswabharati High School",
      fieldOfStudy: "School",
      city: "Gudivada",
      country: "India",
      keyPoints: ["GPA: 10"],
      endYear: "2019",
    },
  ],
  skills: [
    "JavaScript",
    "⚛️ React",
    "🗃️ Oracle SQL",
    "🐍 Python",
    "🟩 Node.js",
    "🔵 C",
    "📲 UI/UX",
    "🔷 C++",
    "☕ Java",
    
  ],
  languages: ["🏠 Telugu (Native)", "🌐 English", "🕌 Hindi"],
  interests: ["🎮 Playing Online Games", "🏸 Badminton", "💻 Leaning New Tech"],
};

export function ResumeDiv() {
  return (
    <div className="resume-div">
      <Heading />
      <Container resumeContent={resumeContent} />
      {/* <DownloadResume /> */}
    </div>
  );
}

// function DownloadResume() {
//   return (
//     <div className="download-resume">
//       <button>
//         <a className="link-resume" href="/Chitturi_Ganesh_Resume.pdf" download>
//           Download PDF ⬇️
//         </a>
//       </button>
//     </div>
//   );
// }

function Heading() {
  return <div className="resume-head">Resume 📜:</div>;
}

function Container({ resumeContent }) {
  const [openSection, setOpenSection] = useState(null);

  let objKeys = Object.keys(resumeContent);

  return (
    <div className="resume-container-div">
      {objKeys.map((curr) => (
        <div className="content-div" key={`${curr}`}>
          <Name
            name={curr}
            onIsOpen={setOpenSection}
            isOpen={openSection === curr}
          />
          <MainContent
            contentIn={resumeContent[curr]}
            nameOfContent={curr}
            isOpen={openSection === curr}
          />
        </div>
      ))}
    </div>
  );
}

function Name({ name, onIsOpen, isOpen }) {
  function handleIsOpen() {
    // console.log("ok");
    onIsOpen(isOpen ? null : name);
  }
  // console.log(name);
  let newName = name === "smallIntro" ? "Small Intro" : name;
  return (
    <div onClick={() => handleIsOpen()} className="resume-content-name">
      {newName.replace(newName[0], newName[0].toUpperCase())}
    </div>
  );
}

function MainContent({ contentIn, nameOfContent, isOpen }) {
  switch (nameOfContent) {
    case "smallIntro":
      return <SmallIntro contentIn={contentIn} isOpen={isOpen} />;
    case "education":
      return <Education contentIn={contentIn} isOpen={isOpen} />;
    case "skills":
      return <Skills contentIn={contentIn} isOpen={isOpen} />;
    case "languages":
      return <Languages contentIn={contentIn} isOpen={isOpen} />;
    case "interests":
      return <Interests contentIn={contentIn} isOpen={isOpen} />;
    default:
      return <p>Error In Loading ☹️ Sorry For Inconvenience</p>;
  }
}

function SmallIntro({ contentIn, isOpen }) {
  let [part] = contentIn.split("AboutDiv");
  return isOpen ? (
    <div className="content-mainpart-div">
      <span>{part}</span>
      <span>
        <Link
          className="about-link"
          to="about-div"
          smooth={true}
          duration={100}
        >
          About Me.
        </Link>
      </span>
    </div>
  ) : null;
}

function Education({ contentIn, isOpen }) {
  return (
    isOpen && (
      <div className="content-mainpart-div-ed content-mainpart-div">
        {contentIn.map((current, i) => (
          <EducationPart educationContent={current} key={i + 1} num={i + 1} />
        ))}
      </div>
    )
  );
}

function EducationPart({ educationContent, num }) {
  let temp = [...educationContent.keyPoints];
  // console.log(educationContent);
  return (
    <div className="education-content-div">
      <span className="number-resume">{num < 10 ? `0${num}` : num}.</span>
      <span className="name-resume">{educationContent.name} :</span>
      <div>🎓 Degree : {educationContent.fieldOfStudy}</div>
      <div>🏙️ City: {educationContent.city}</div>
      <div>🗺️ Country: {educationContent.country}</div>
      <div>
        🔑 key Points :
        {temp.map((point, i) => (
          <KeyPointsDiv key={i + 2} point={point} />
        ))}
      </div>
    </div>
  );
}

function KeyPointsDiv({ point }) {
  return (
    <p style={{ paddingLeft: "25px" }} className="keypoints-p">
      🌠 {point}
    </p>
  );
}

function Skills({ contentIn, isOpen }) {
  return isOpen ? (
    <div className="content-mainpart-div skills-div">
      {contentIn.map((current, i) => (
        <PointUse point={current} key={i + 1} />
      ))}
    </div>
  ) : null;
}

function Languages({ isOpen, contentIn }) {
  return isOpen ? (
    <div className="content-mainpart-div skills-div">
      {contentIn.map((current, i) => (
        <PointUse point={current} key={i + 1} />
      ))}
    </div>
  ) : null;
}

function Interests({ isOpen, contentIn }) {
  return isOpen ? (
    <div className="content-mainpart-div skills-div">
      {contentIn.map((current, i) => (
        <PointUse point={current} key={i + 1} />
      ))}
    </div>
  ) : null;
}

function PointUse({ point }) {
  return (
    <div>
      {point === "JavaScript" ? (
        <img className="js-icon" src={JsLogo} alt={"Js"} />
      ) : null}
      <span>{point}</span>
    </div>
  );
}
