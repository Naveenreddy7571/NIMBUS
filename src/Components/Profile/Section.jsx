import React, { useState } from "react";
import Modal from "react-modal";
import "./Section.css";
import education from "../../images/ProfileImages/EDU-1.jpeg";
import experience from "../../images/ProfileImages/EXPERIENCE.png";
import achievements from "../../images/ProfileImages/ACHIEVEMENTS.jpeg";
import posts from "../../images/ProfileImages/POSTS.png"
Modal.setAppElement("#root");

function Section() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (description) => {
    setModalContent(description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const educationDescription = {
    title: "EDUCATION",
    details: {
      School: "VVEMHS",
      Score: "9.8 CGPA",
      College: "Sri Chaitanya",
      Marks: "971",
      University: "Parul University",
      CPI: "8.67",
      Course: "B.Tech CSE",
    },
  };

  const experienceDescription = {
    title: "EXPERIENCE",
    details: {
      "Job/Title": "Product Manager",
      Company: "Oracle",
      Experience: "7 years",
    },
  };

  const achievementsDescription = {
    title: "ACHIEVEMENTS",
    details: {
      "Industrial Awards": "Received the 'Employee of the Year'",
      "Team Leadership": "Led a team of 10 software developers",
      "Professional Development":
        "Completed a project management certification course",
    },
  };

  const postsDescription = {
    title: "POSTS",
    details: {
      description:
        "No Posts Created! Create a new post to show them in your profile.",
    },
  };

  const sections = [
    {
      title: "EDUCATION",
      img: education,
      description: educationDescription,
    },
    {
      title: "EXPERIENCE",
      img: experience,
      description: experienceDescription,
    },
    {
      title: "ACHIEVEMENTS",
      img: achievements,
      description: achievementsDescription,
    },
    {
      title: "POSTS",
      img: posts,
      description: postsDescription,
    },
  ];

  return (
    <div>
      <div className="sections">
        {sections.map((section, index) => (
          <div
            key={index}
            className="text-center section-item"
            onClick={() => openModal(section.description)}
          >
            <h2>{section.title}</h2>
            <img src={section.img} alt={section.title} className="mx-auto" />
            <p>
              {section.description.details
                ? section.description.details.description
                : section.title}
            </p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="custom-modal"
        overlayClassName="overlay"
      >
        <h2>{modalContent.title}</h2>
        {modalContent.details &&
          Object.entries(modalContent.details).map(([key, value], index) => (
            <p key={index}>
              {key}: {value}
            </p>
          ))}
        <button className="modal-close-button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Section;
