import "./Projects.css";
import newsExplorer from "../../assets/NewsExplorer.png";
import coffeeShop from "../../assets/coffeeShop.png";
import spotsLanding from "../../assets/Spots.png";
import whatToWear from "../../assets/WTWR.png";

function Projects() {
  return (
    <div className="project">
    <div className="project__cards">
      <div className="project__card">
        <a
          href="https://adelapaz33.github.io/news-explorer-frontend"
          target="_blank"
          rel="nonreferrer"
        >
          <img
            src={newsExplorer}
            alt="NewsExplorer Homepage"
            className="project__image"
          ></img>
        </a>
        <h2 className="project__title">NewsExplorer</h2>
        <p className="project__description">
          A responsive, modular React application that allows users to search
          for news articles, simulate authentication, and save favorite
          articles. Designed with scalability, accessibility, and clean
          architecture in mind.
        </p>
        <div className="project__links" >
          <a
            href="https://adelapaz33.github.io/news-explorer-frontend"
            className="project__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Live Demo
          </a>
          <a
            href="https://github.com/adelapaz33/news-explorer-frontend"
            className="project__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
          <a
            href="https://youtu.be/VmOKO9zMpRk"
            className="project__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶️ Demo Video
          </a>
        </div>
      </div>

      <div className="project__card">
        <a
          href="https://youtu.be/eGQR6fo5mP8"
          target="_blank"
          rel="nonreferrer"
        >
          <img
            src={whatToWear}
            alt="What to Wear landing page"
            className="project__image"
          ></img>
        </a>
        <h2 className="project__title">What To Wear</h2>
        <p className="project__description">
          This is a weather-based clothing recommendation app featuring user
          authentication, profile management, and the ability to add, like, and
          manage clothing items.
        </p>
        <div className="project__links">
        <a
          href="https://github.com/adelapaz33/se_project_react"
          className="project__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub Frontend
        </a>
        <a
          href="https://github.com/adelapaz33/se_project_express"
          className="project__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub Backend
        </a>
        <a
          href="https://youtu.be/eGQR6fo5mP8"
          className="project__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶️ Demo Video
        </a>
        </div>
      </div>

      <div className="project__card">
        <a
          href="https://adelapaz33.github.io/se_project_spots/"
          target="_blank"
          rel="nonreferrer"
        >
          <img
            src={spotsLanding}
            alt="Spots landing page"
            className="project__image"
          ></img>
        </a>
        <h2 className="project__title">Spots</h2>
        <p className="project__description">
          This website allows creators to upload photos using a link and add a
          photo caption. There is also a like button for users to indicate which
          photos they like best.
        </p>
        <div className="project__links">
        <a
          href="https://adelapaz33.github.io/se_project_spots/"
          className="project__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Live Demo
        </a>
        <a
          href="https://github.com/adelapaz33/se_project_spots"
          className="project__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>
        <a
          href="https://youtu.be/3cFierZo1yk"
          className="project__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶️ Demo Video
        </a>
        </div>
      </div>

      <div className="project__card">
        <a
          href="https://adelapaz33.github.io/se_project_coffeeshop/"
          target="_blank"
          rel="nonreferrer"
        >
          <img
            src={coffeeShop}
            alt="Coffee Shop landing page"
            className="project__image"
          ></img>
        </a>
        <h2 className="project__title">Coffee Shop</h2>
        <p className="project__description">
          This is a landing page for the coffeeshop, Triple Espresso. Visitors
          can find recipes, book a table, take a look at the menu, or find the
          shops contact information.
        </p>
        <div className="project__links">
        <a
          href="https://adelapaz33.github.io/se_project_coffeeshop/"
          className="project__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Live Demo
        </a>
        <a
          href="https://github.com/adelapaz33/se_project_coffeeshop"
          className="project__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Projects;
