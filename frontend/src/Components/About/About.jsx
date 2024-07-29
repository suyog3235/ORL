import React from "react";
import { Helmet } from "react-helmet";
import HeaderBwlowNavbar from "../utils/Navbar/HeaderBwlowNavbar";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";
export default function About() {
  const aboutHeadingInfContainer = { padding: "4%" };
  const aboutHeading = {
    color: "#001d42",
    position: "relative",
    left: "15%",
    fontSize: "30px",
  };
  const aboutInfo = {
    color: "#001d42",
    position: "relative",
    left: "15%",
    fontSize: "20px",
    letterSpacing: "1px",
  };
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <HeaderBwlowNavbar page={"About"} quote={"The idea behind ORL."} />
      <div className="w-75" style={aboutHeadingInfContainer}>
        <h3 style={aboutHeading}>About</h3>
        <p style={aboutInfo}>
          Online Resource Library(ORL) is a e-learning platform designed and
          developed to give you a basic overview about new/old technologies and
          educate you about them using youtube videos. We created ORL for all
          users interested in e-learning scene with minimal programming
          experience.
        </p>
        <h3 style={aboutHeading} className="mt-5">
          What is running this website?
        </h3>
        <p style={aboutInfo}>
          <div className="row mt-5" style={{ textAlign: "center" }}>
            <div className="col">
              <FaReact size={"40px"} />
              <h6>ReactJs</h6>
            </div>
            <div className="col" style={{ position: "relative", top: "1px" }}>
              <FaBootstrap size={"40px"} />
              <h6>Bootstrap</h6>
            </div>
            <div className="col">
              <FaNodeJs size={"40px"} />
              <h6>NodeJS</h6>
            </div>
            <div className="col">
              <SiExpress size={"40px"} />
              <h6>ExpressJs</h6>
            </div>
            <div className="col">
              <SiMysql size={"40px"} />
              <h6>Mysql</h6>
            </div>
          </div>
        </p>
        <h3 style={aboutHeading} className="mt-5">
          Our Goal
        </h3>
        <p style={aboutInfo}>
          Enhance the quality of learning and teaching. Meet the learning style
          or needs of students. Improve the efficiency and effectiveness.
          Improve user-accessibility and time flexibility to engage learners in
          the learning process. we hope you’ll come to think of it as a sort of
          education guide.
        </p>
        <h3 style={aboutHeading} className="mt-5">
          FAQ's
          <a
            className="ms-2"
            href="/faq"
            style={{ fontSize: "28px", textDecoration: "none" }}
          >
            Here !!
          </a>
        </h3>
      </div>
    </div>
  );
}
