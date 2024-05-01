"use client";

import Link from "next/link";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AlternateEmail } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState("none");


  return (
    <>
      <div className="everything">
        <div className="hpBody" id="home">
          <div id="hamburger">
            <MenuIcon
              id="menuIcon"
              onClick={() => {
                if(menu=="block"){
                  setMenu("none")
                }
                else setMenu("block");
              }}
            />
          </div>
          <div className="menu">
            <ul style={{ display:menu}}>
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
            className="welcomeImage"
            alt="welcome image"
            src="/images/welcome.svg"
            height={500}
            width={500}
            style={{}}
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
            className="descImage"
            src="/images/Innovation-pana.svg"
            alt="corpo art of a woman in a park"
            height={10}
            width={10}
            style={{ marginRight: "5vw", marginTop: "4vh" }}
          />
        </div>
        <div className="projects" id="projects">
          <div className="project">
            <a
              href="https://public.tableau.com/app/profile/kris.paul/viz/AirBnBdata_17057060393650/Ratingsandpricebyneighbourhod"
              target="_blank"
            >
              <Image
                height={100}
                width={100}
                className="projectImage"
                alt="an image of the airbnb logo"
                src="/images/airbnb.png"
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
              <Image
                height={100}
                width={100}
                className="projectImage"
                alt="An image of a library"
                src="/images/library.png"
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
          <Image
            id="contactImage"
            alt="Two guys talking"
            width={100}
            height={100}
            src={"/images/contact.svg"}
          ></Image>
          <div id="contactInfo">
            <LocalPhoneIcon className="contactIcon" id="callIcon" />
            <p id="number">+61412516044</p>
            <LinkedInIcon className="contactIcon" id="linkedinIcon" />
            <a
              href="https://www.linkedin.com/in/krispaulbabu4/"
              target="_blank"
              id="linkedin"
            >
              <p>https://www.linkedin.com/in/krispaulbabu4</p>
            </a>
            <AlternateEmailIcon className="contactIcon" id="emailIcon" />
            <a href="mailto:krispaulbabukkp@gmail.com" id="email">
              <p className="info" style={{ textDecoration: "underline" }}>
                krispaulbabukkp@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
      <a href="https://storyset.com/technology">
        Technology illustrations by Storyset
      </a>
    </>
  );
}
