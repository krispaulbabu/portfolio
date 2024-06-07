"use client";

import Link from "next/link";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { IoLogoCss3, IoLogoTableau } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import ScrollContainer from 'react-indiana-drag-scroll'


export default function Home() {
  const [menu, setMenu] = useState("grid");

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("condition visited");
      if (window.innerWidth >= 1000) {
        setMenu("grid");
      }
    });

    
  }, []);

  return (
    <>
      <div className="everything">
        <div className="hpBody" id="home">
          <div id="hamburger">
            <MenuIcon
              id="menuIcon"
              onClick={() => {
                if (menu == "grid") {
                  setMenu("none");
                } else setMenu("grid");
              }}
            />
          </div>
          <div className="menu">
            <ul style={{ display: menu }}>
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
            src="/images/mainpage/welcome.svg"
            height={500}
            width={500}
            style={{}}
          />
        </div>
        <div className="descDiv" id="about">
          <div className="description">
            <p>
              Thanks for stopping by my portfolio. I&apos;m a 21-year-old
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
            src="/images/mainpage/Innovation-pana.svg"
            alt="corpo art of a woman in a park"
            height={10}
            width={10}
            style={{ marginRight: "5vw", marginTop: "4vh" }}
          />
        </div>
        <ScrollContainer className="projects">
          <div className="project" >
            <Link style={{ cursor: "pointer" }} href="/bookfinder">
              <Image
                unoptimized
                className="projectImage"
                width={1000}
                height={1000}
                alt="An image of my bookfinder webpage"
                src="/images/mainpage/bookfinder-snapshot.png"
              ></Image>
            </Link>
            <p className="projectTitle">Book Finding Website</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className="projectFrameworks">Frameworks used: </p>
              <div style={{ display: "flex" }}>
                <FaPython className="frameworkIcons" size="25" color="white" />
                <FaReact className="frameworkIcons" size="25" color="white" />
                <SiFlask className="frameworkIcons" size="25" color="white" />
                <IoLogoCss3
                  className="frameworkIcons"
                  size="25"
                  color="white"
                />
                <IoLogoJavascript
                  className="frameworkIcons"
                  size="25"
                  color="white"
                />
              </div>
            </div>
          </div>
          <div className="project">
            <Link
              style={{ cursor: "pointer" }}
              href="https://public.tableau.com/app/profile/kris.paul/viz/AirBnBdata_17057060393650/Ratingsandpricebyneighbourhod"
            >
              <Image
                unoptimized
                className="projectImage"
                width={1000}
                height={1000}
                alt="An image of my bookfinder webpage"
                src="/images/mainpage/tableau-snapshot.png"
              ></Image>
            </Link>
            <p className="projectTitle">Tableau AirBnB data exploration</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className="projectFrameworks">Frameworks used: </p>
              <div style={{ display: "flex" }}>
                <FaPython className="frameworkIcons" size="25" color="white" />
                <IoLogoTableau
                  className="frameworkIcons"
                  size="25"
                  color="white"
                />
              </div>
            </div>
          </div>
        </ScrollContainer>
        <div className="contact" id="contact">
          <Image
            id="contactImage"
            alt="Two guys talking"
            width={100}
            height={100}
            src={"/images/mainpage/contact.svg"}
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
      <a href="https://storyset.com/technology" style={{ fontSize: "1vh" }}>
        Technology illustrations by Storyset
      </a>
    </>
  );
}
