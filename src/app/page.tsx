export default function Home() {
  return (
    <>
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
          <a href="about.asp">CONTACT</a>
        </li>
      </ul>
      <div className="hpBody" id="home">
        <h1 className="hpHeader"> Hi! I&apos;m Kris!</h1>
      </div>
      <div className="descDiv" id="about">
        <p style={{}}>
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
        <div className="gallery">
          <a href="/main.html">
            <div className="project">
              <img
                src="airbnb.png"
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "20px",
                }}
              />

              <div className="overlay">
                <h1 className="text">AirBnB Data Analysis</h1>
                <p className="desc">An exploratory data analysis on an AirBnB dataset from Kaggle.</p>
              </div>
            </div>
          </a>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
        </div>
      </div>
    </>
  );
}
