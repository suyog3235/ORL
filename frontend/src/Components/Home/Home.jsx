import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import TrendionTechnologies from "./TrendionTechnologies";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Home() {
  const info = {
    fontSize: "1.25rem",
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: "1px",
    position: "relative",
    left: "12.5%",
  };
  return (
    <div>
      <Helmet>
        <title>ORL</title>
      </Helmet>
      <div className="row codebg orl">
        <div
          className="ms-5 h1"
          style={{
            color: "#001d42",
            textAlign: "left",
            fontSize: "3rem",
            fontWeight: "700!important",
            position: "relative",
            left: "12.5%",
            marginTop: "4%",
          }}
        >
          Welcome to ORL
        </div>
        <div className="ms-5 w-50 mt-2 orl" style={info}>
          Online Resource Library(ORL) is a e-learning platform designed and
          developed to enhance the learning experience of learners.
        </div>
        <div className="ms-5 mt-2 w-50 mb-5 orl" style={info}>
          ORL provides training in all the latest technology. The training
          provided on ORL is to help our users to learn new technology
          efficiently. Happy Learning !!
        </div>
      </div>
      <div className="mb-5">
        <h2 style={{ textAlign: "center", color: "#001d42" }} className="mt-4">
          Trending Technologies
        </h2>
        <TrendionTechnologies />
        <div style={{ textAlign: "center" }}>
          <a href="/tutorials" className="btn btn-primary">
            Explore More <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

/* <div style={info}>
  <p>
    Online Resource Library(ORL) is a e-learning platform designed and developed
    to enhance the learning experience of learners.Toturial's provided on ORL
    are there to help you get basic understanding of new/ old technologies.
    Happy Learning And Best Of Luck :)
  </p>
</div>; */
