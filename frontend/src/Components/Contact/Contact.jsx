import React from "react";
import { Helmet } from "react-helmet";
import HeaderBwlowNavbar from "../utils/Navbar/HeaderBwlowNavbar";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";

export default function Contact() {
  const formLabel = {
    color: "#001d42",
    fontSize: "17px",
    fontWeight: "400",
  };

  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <HeaderBwlowNavbar
        page={"Contact"}
        quote={"How to get in touch with the team"}
      />
      <div
        className="container w-75 row p-5"
        style={{ position: "relative", left: "13%" }}
      >
        <div className="col">
          <form action="https://public.herotofu.com/v1/17b6ff50-3888-11ed-8ff6-d1ee553f3964" method="post"
          style={{ backgroundColor: "#F4F7FA" }}
          className="p-4 rounded border"
          >
            <div>
              <label for="name" style={formLabel}>Your Name</label>
              <input name="Name" id="name" type="text" required className="form-control border border-1 border-dark"
              placeholder="Your name" />
            </div>
            <div>
              <label for="email" style={formLabel} className="mt-2">Your Email</label>
              <input name="Email" id="email" type="email" required  className="form-control border border-1 border-dark"
              placeholder="Your e-mail address"/>
            </div>
            <div>
              <input  value="submit" className="btn btn-primary mt-3 w-25"
              style={{ position: "relative", left: "35%" }}
              type="submit" />
            </div>
          <p className="mt-3 ms-3" style={{
            color: "#001d42",
          }}>Send us your name and email and we will reach out to you in no time!</p>
          </form>
        </div>
        <div
          className="col p-4"
          style={{
            color: "#001d42",
            fontSize: "20px",
            position: "Relative",
            left: "1%",
          }}
        >
          <p className="mt-2 ms-2">
            Don't want to use the form? You can also email us directly at &nbsp;
            <a href="mailto:kulkarnisuyog3@gmail.com">
              kulkarnisuyog3@gmail.com
            </a>{" "}
            from your favorite email client.
          </p>
          <p className="ms-2">
            We aim to reply to all enquiries within 24 hours, but we often reply
            much faster than that.
          </p>

          <p className="ms-2">
            Or you can message us on any of our social media,
          </p>
          <div className="row w-75 ms-2 mt-1">
            <div className="col-md-2">
              <a href="#">
                <AiOutlineInstagram
                  size={"40px"}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#CCC7C7",
                    padding: "5px",
                  }}
                />
              </a>
            </div>
            <div className="col-md-2">
              <a href="mailto:kulkarnisuyog3@gmail.com">
                <CgMail
                  size={"40px"}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#CCC7C7",
                    padding: "5px",
                  }}
                />
              </a>
            </div>
            <div className="col-md-2">
              <a href="#">
                <AiFillGithub
                  size={"40px"}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#CCC7C7",
                    padding: "5px",
                  }}
                />
              </a>
            </div>
            <div className="col-md-2">
              <a href="#">
                <AiFillLinkedin
                  size={"40px"}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#CCC7C7",
                    padding: "5px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-5 w-75"
        style={{ position: "relative", left: "10%", color: "#001d42" }}
      >
        <p style={{ textAlign: "center", fontSize: "20px", fontWeight: "500" }}>
          Looking for something else? Talk to our developer today about our
          service, tutorials, website or anything else, our developer is ready
          to answer all of your questions.
        </p>
        <p style={{ textAlign: "center", fontSize: "20px", fontWeight: "500" }}>
          Ping him <a href="mailto:kulkarnisuyog3@gmail.com">HERE!!</a>
        </p>
      </div>
    </div>
  );
}
