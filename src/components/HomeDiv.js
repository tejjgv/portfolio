import "./HomeDiv.css";
import profileImg from "../profile-img.JPG";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown } from "react-icons/fa";

export function HomeDiv() {
  return (
    <div className="main-div">
      <Introduction />
      <MyImg />
      <FaChevronDown className="down-arrow" />
    </div>
  );
}

function Introduction() {
  return (
    <div className="introduction">
      <div>Hello 👋🏻</div>
      <div>This is Tejeswaar! 😉</div>
      <div>
        <em className="tag-mine">
          (A Student At Vellore Institute Of Technology, Vellore, IN)
        </em>
      </div>
    </div>
  );
}

function MyImg() {
  return (
    <div className="div-img">
      <img
        className="img-pic img-fluid img-thumbnail"
        src={profileImg}
        alt="profile-img"
      />
    </div>
  );
}
