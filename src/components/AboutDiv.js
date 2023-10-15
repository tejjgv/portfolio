import "./AboutDiv.css";

export function AboutDiv() {
  return (
    <div className="second-div" id="about-div">
      <Heading />
      <AboutMe />
    </div>
  );
}

function Heading() {
  return <div className="about-head">About Me 🫣 :</div>;
}

function AboutMe() {
  return (
    <div className="about-me-p">
      <p className="about-me-1">
        Hi, I’m <span className="my-name">Tejeswar Reddy</span>, a web development
        fanatic and Computer Science Student. I am student at Vellore Institute of
        Technology{" "}
        <span className="current-year">
          (Currently: 3rd Year, Graduation Period: 2021 - 2025)
        </span>
        , and I love to create awesome websites. I know JavaScript well and
        intermediate upto Reactjs and I’m learning Node.js, Express.js and
        MongoDB to make websites that rock and responsive.
      </p>
      <p className="about-me-2">
        🌟 I’m always up for learning new things and solving problems in web
        development and more. I’m excited to work with you and show you my
        creativity and passion.
      </p>
      <p className="about-me-3">
        🌟 I had completed more than 150+ problems in leet code 
          using JavaScript and have streak for 84 days.
      </p>
    </div>
  );
}
