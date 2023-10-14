import { useState } from "react";
import Modal from "react-modal";
import "./ContactMe.css";

Modal.setAppElement("#root"); // replace '#root' with the id of your app's root element

export function ContactMe() {
  const [isOpen, setIsOpen] = useState(false);
  function handleForm() {
    setIsOpen((curr) => !curr);
  }
  return (
    <div className="div-form">
      <Heading />
      <FormDiv onIsForm={handleForm} />
      <ShowForm isOpen={isOpen} onIsForm={handleForm} />
    </div>
  );
}

function Heading() {
  return (
    <div>
      <h2 className="head-form-name">Contact Form 📞: </h2>
    </div>
  );
}

function FormDiv({ onIsForm }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div className="btn-form-open-close-div">
        <button className="btn-form-open-close" onClick={() => onIsForm()}>
          Click On Me To Submit Form ⚽
        </button>
      </div>
    </div>
  );
}

function ShowForm({ isOpen, onIsForm }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onIsForm()}
      contentLabel="Contact Me Form"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          animationName: "fadeIn",
          animationDuration: "1s",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <iframe
        title="Contact Me Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScQHfZ1CE0p1CpdKukaf4De5I1OuzJR65SkEbIoHHgix3xzjA/viewform?embedded=true"
        style={{
          width: "100%",
          height: "1543px",
          border: "0",
        }}
      >
        Loading…
      </iframe>
      <button className="last-btn-form" onClick={() => onIsForm()}>
        Close Form
      </button>
    </Modal>
  );
}
