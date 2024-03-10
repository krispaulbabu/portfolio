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
          <a href="contact.asp">PROJECTS</a>
        </li>
        <li>
          <a href="about.asp">CONTACT</a>
        </li>
      </ul>
      <div className="hpBody" id="home">
        <h1 className="hpHeader"> Hi! I&apos;m Kris!</h1>
        {/* <div className="descDiv"> */}
          {/* <div className="projectList">
          <a href="/main.html">
            <div className="project">
              <img src={"/airbnb.png"} style={{ width: 60, height:60, marginRight:"10px", marginTop:"10px", borderRadius:"15px"}} />
              <div style={{display:"flex", flexDirection:"column"}}>
              <h5 style={{marginTop:"8px", fontWeight:500}}>Airbnb Data exploration</h5>
              <p style={{fontSize:12, marginRight:"3px"}}>An exploratory analysis of Airbnb data from kaggle using python, jupyter notebook and tableau.</p>
              </div>
            </div>
            </a>
          </div> */}
        {/* </div> */}
      </div>
      <div className="descDiv"
      id="about"
      >
          <p style={{}}>
            Hello there! Thanks for stopping by my portfolio. I&apos;m a
            21-year-old software developer originally from the UAE, and I
            recently completed my Bachelor of Science degree with a
            specialization in Computing at Macquarie University. <br />
            <br />
            During my academic journey and beyond, I&apos;ve delved into the
            worlds of software development, data science, machine learning, and
            statistical computing. I&apos;m passionate about creating efficient
            software solutions and using data to make informed decisions. <br />
            <br />
            In this portfolio, you&apos;ll find a collection of my projects,
            each representing a unique aspect of my journey. I&apos;m dedicated
            to pushing the boundaries of technology and exploring new
            possibilities.
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
    </>
  );
}
