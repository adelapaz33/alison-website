import headShot from "../../assets/SideViewPhoto.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="home">
        <div className="home__main">
          <h2 className="home__tagline">
            ⚡ From music to markup, I create thoughtful, user-friendly designs
            and solve problems with clarity and creativity.
          </h2>
          <img className="home__headshot" src={headShot} alt="headshot" />
        </div>
        <p className="home__text">
          Hi, I’m Alison, a full-stack software engineer with a background in
          music education and donor relations. My journey into tech began while
          working in the nonprofit world, where I regularly used a CRM, built
          analytics dashboards, and streamlined systems for my team. Hands-on
          problem-solving with data sparked my curiosity and inspired me to dive
          deeper into software development.
        </p>

        <p className="home__text">
          I build full-stack applications with JavaScript, TypeScript, React,
          React Native, Node.js, Express.js, HTML/CSS, SQL and MongoDB. I have a
          particular interest in front-end development, but I continue to
          strengthen my backend skills. I enjoy blending creativity with logic
          and always look for fresh, thoughtful ways to solve problems. You can
          see my projects on my GitHub{" "}
          <a
            href="https://github.com/adelapaz33"
            target="_blank"
            rel="noopener noreferrer"
            className="home__link"
          >
            here
          </a>
          .
        </p>

        <p className="home__text">
          Before transitioning into tech, I ran a private voice studio, teaching
          music to students of all ages. This experience sharpened my ability to
          solve problems on the spot, adapt to different learning styles, and
          communicate clearly, all skills I now apply to writing and debugging
          code.
        </p>

        <p className="home__text">
          At the core of everything I do, I value empathy and clear
          communication. I believe these qualities help me understand the needs
          of teammates and clients and keep projects moving smoothly. I love
          collaboration, mentoring, and bringing positivity into a team
          environment.
        </p>

        <p className="home__text">
          Outside of work, you’ll usually find me walking my dog Aleika,
          cycling, or getting lost in a good book. To learn about me through
          song, click{" "}
          <a
            href="https://suno.com/s/9IYJL0KXiZXOUuu7"
            target="_blank"
            rel="noopener noreferrer"
            className="home__link"
          >
            HERE!
          </a>
        </p>
        <p className="home__text">
          Interested in working together?
          <a
            href="mailto:arhibschle@gmail.com?subject=Let's%20Connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="home__link"
          >
            {" "}
            Let's Connect!
          </a>
        </p>
      </section>
    </>
  );
}

export default Home;
