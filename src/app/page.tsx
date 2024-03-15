export default function Home() {
  return (
    <>
    <div className="everything">
    <div className="hpBody" id="home">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <h1 className="hpHeader"> Hi! I&apos;m Kris!</h1>
      </div>
      <div className="descDiv" id="about">
        <p>
          Hello there! Thanks for stopping by my portfolio. I&apos;m a
          21-year-old software developer originally from the UAE, and I recently
          completed my Bachelor of Science degree with a specialization in
          Computing at Macquarie University. <br />
          <br />
          During my academic journey and beyond, I&apos;ve delved into the
          worlds of software development, data science, machine learning, and
          statistical computing. I&apos;m passionate about creating efficient
          software solutions and using data to make informed decisions. <br />
          <br />
          In this portfolio, you&apos;ll find a collection of my projects, each
          representing a unique aspect of my journey. I&apos;m dedicated to
          pushing the boundaries of technology and exploring new possibilities.
          <br />
          <br />
          Whether you&apos;re here to view my work, discuss tech, or explore
          potential collaborations, I&apos;m here to connect. Please feel free
          to browse my portfolio, and don&apos;t hesitate to reach out. Thank
          you for visiting, and I hope you find inspiration in my digital
          creations!
          <br />
          <br />
        </p>
      </div>
      <div className="projects" id="projects">
        <div className="project">
          <a href="/main.html">
            <img
            className="projectImage"
              src="airbnb.png"
              style={{
                borderRadius: "20%",
              }}
            />

            <div className="overlay">
              <h1 className="text">AirBnB Data Analysis</h1>
              <p className="desc">
                An exploratory data analysis on an AirBnB dataset from Kaggle.
              </p>
            </div>
          </a>
        </div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
      </div>
      <div className="contact" id="contact">
        <p className="info">+61412516044</p>
        <a href="https://www.linkedin.com/in/krispaulbabu4/" target="_blank">
          <p
            className="info"
            style={{
              // borderRightWidth: "1px",
              // borderLeftWidth: "1px",
              paddingLeft: "5vw",
              paddingRight: "5vw",
              marginLeft: "10vw",
              marginRight: "10vw",
              textDecoration: "underline",
            }}
          >
            https://www.linkedin.com/in/krispaulbabu4
          </p>
        </a>
        <a href="mailto:krispaulbabukkp@gmail.com">
          <p className="info" style={{ textDecoration: "underline" }}>
            krispaulbabukkp@gmail.com
          </p>
        </a>
      </div>
    </div>
    </>
  );
}