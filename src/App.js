import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./components/NavBar.js";
import { HomeDiv } from "./components/HomeDiv.js";
import { AboutDiv } from "./components/AboutDiv.js";
import { ResumeDiv } from "./components/ResumeDiv.js";
import { Accomplishments } from "./components/AccomplishmentsDiv.js";
import { ContactMe } from "./components/ContactMe.js";
import { ScrollTop } from "./components/ScrollTop.js";
import { FooterDiv } from "./components/FooterDiv.js";
// import { Line } from "./components/Line.js";

export default function App() {
  return (
    <div>
      <NavBar />
      <HomeDiv />
      <AboutDiv />
      {/* <Line /> */}
      <ResumeDiv />
      <Accomplishments />
      <ContactMe />
      <ScrollTop />
      <FooterDiv />
    </div>
  );
}
