import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import aleikaLogo from "../../assets/AleikaLogo.png";
import { motion } from "framer-motion";

function Header() {
  const MotionLink = motion(Link);
  const location = useLocation(); // track current route

  const hoverEffect = {
    scale: 1.1,
    textShadow: "0px 0px 8px #7c3aed",
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={aleikaLogo} alt="Alison's logo" className="header__logo" />
      </Link>

      <MotionLink
        key={location.pathname} // force remount on route change
        whileHover={hoverEffect}
        to="/"
        className="header__name"
        style={{
          display: "inline-block",
          textShadow: "0px 0px 0px rgb(255, 255, 255)",
        }}
      >
        Alison de la Paz
      </MotionLink>

      <nav
        className="header__nav"
        role="navigation"
        aria-label="Main Navigation"
      >
        <MotionLink
          key={location.pathname + "/resume"}
          whileHover={hoverEffect}
          to="/resume"
          className="header__link"
          style={{ display: "inline-block", textShadow: "0px 0px 0px #7c3aed" }}
        >
          Resume
        </MotionLink>

        <MotionLink
          key={location.pathname + "/projects"}
          whileHover={hoverEffect}
          to="/projects"
          className="header__link"
          style={{ display: "inline-block", textShadow: "0px 0px 0px #7c3aed" }}
        >
          Projects
        </MotionLink>
      </nav>
    </header>
  );
}

export default Header;
