import "./Footer.css";
import linkedInLogo from "../../assets/linkedin.webp";
import githubLogo from "../../assets/Octicons-mark-github.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Developed by Alison de la Paz</p>
      <div className="footer__icons">
      <a
      href="https://www.linkedin.com/in/alisondelapaz/"
      className="footer__icon-link"
      target="_blank"
      rel="noopener noreferrer">
        <img src={linkedInLogo} alt="LinkedIn Logo" className="footer__icon" />
      </a>
      <a href="https://github.com/adelapaz33"
            className="footer__icon-link"
            target="_blank"
            rel="noopener noreferrer" >
        <img src={githubLogo} alt="GitHub Logo" className="footer__icon" />
      </a>
      </div>

    </footer>
  );
}
export default Footer;
