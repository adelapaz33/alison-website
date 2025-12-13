import "./Header.css";
import { Link } from "react-router-dom";
import aleikaLogo from "../../assets/AleikaLogo.png";
function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={aleikaLogo} alt="Alison's logo" className="header__logo" />
      </Link>
      <Link to="/" className="header__name">
        Alison de la Paz
      </Link>
      <nav
        className="header__nav"
        role="navigation"
        aria-label="Main Navigation"
      >
        <Link to="/resume" className="header__link">
          Resume
        </Link>
        <Link to="/projects" className="header__link">
          Projects
        </Link>
      </nav>
    </header>
  );
}

export default Header;
