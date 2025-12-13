import "./Resume.css";
import resumeImage from "../../assets/resumeImage.png";

const Resume = () => {
    return (
        <div className="resume">
        <h1 className="resume__title">My Resume</h1>
      
        <p className="resume__intro">
          You can download my resume or view it below:
        </p>
      
        <div className="resume__download">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume__button"
          >
            Download Resume (PDF)
          </a>
        </div>
      
        {/* Resume image */}
        <img
          src={resumeImage}
          alt="Alison Hibschle Resume"
          className="resume__image"
        />
      </div>
    );
  };

  export default Resume;