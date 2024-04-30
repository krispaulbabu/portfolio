import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="everything">
        <div className="hpBody" id="home">
          <div className="menu">
          <ul>
            <li>
              <a className="menuItem" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a className="menuItem" href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="menuItem" href="#projects">
                PROJECTS
              </a>
            </li>
            <li>
              <a className="menuItem" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
          </div>
          <h1 className="hpHeader"> Hi! I&apos;m Kris!</h1>
          <Image
            alt="welcome image"
            src="/images/welcome.svg"
            height={500}
            width={500}
            style={{ position: "absolute", zIndex: "-1", marginLeft: "30vw" }}
          />
        </div>
        <div className="descDiv" id="about">
          <div className="description">
            <p>
              Thanks for stopping by my portfolio. I&apos;m a 21-year-old
              <br />
              <b id="data"> Data analyst</b> originally from the UAE, and I
              recently completed my Bachelor of Science degree with a
              specialization in Computing at{" "}
              <b id="uni">Macquarie University.</b>
              <br />
              During my academic journey and beyond, I&apos;ve delved into the
              worlds of software development, data science,{" "}
              <b id="ml">machine learning</b>, and statistical computing.
              I&apos;m passionate about creating efficient software solutions
              and using data to make informed decisions. <br />
              In this portfolio, you&apos;ll find a collection of my{" "}
              <b id="proj">projects</b>, each representing a unique aspect of my
              journey. I&apos;m dedicated to pushing the boundaries of
              technology and exploring new possibilities. Whether you&apos;re
              here to view my work, discuss tech, or explore potential
              collaborations, I&apos;m here to connect. Please feel free to
              browse my portfolio, and don&apos;t hesitate to reach out. Thank
              you for visiting, and I hope you find inspiration in my digital
              creations!
              <br />
              <br />
            </p>
          </div>
          <Image
            src="/images/Innovation-pana.svg"
            alt="corpo art of a woman in a park"
            height={500}
            width={500}
            style={{ marginRight: "5vw", marginTop: "4vh" }}
          />
        </div>
        <div className="projects" id="projects">
          <div className="project">
            <a
              href="https://public.tableau.com/app/profile/kris.paul/viz/AirBnBdata_17057060393650/Ratingsandpricebyneighbourhod"
              target="_blank"
            >
              <img
                className="projectImage"
                alt="an image of the airbnb logo"
                src="images/airbnb.png"
                style={{
                  borderRadius: "20%",
                }}
              />

              <div className="overlay">
                <h1 className="text">AirBnB ED</h1>
                <p className="desc">
                  An exploratory data analysis on an AirBnB dataset from Kaggle.
                </p>
              </div>
            </a>
          </div>
          <div className="project">
            <Link href="/bookfinder">
              <img
                className="projectImage"
                alt="An image of a library"
                src="images/library.png"
                style={{
                  borderRadius: "20%",
                }}
              />

              <div className="overlay">
                <h1 className="text">Book finder</h1>
                <p className="desc">
                  A website that uses collaborative filtering to find you books.
                </p>
              </div>
            </Link>
          </div>
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
      <a href="https://storyset.com/technology">
        Technology illustrations by Storyset
      </a>
    </>
  );
}
