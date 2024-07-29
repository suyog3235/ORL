import React from "react";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
import HeaderBwlowNavbar from "../Navbar/HeaderBwlowNavbar";
export default function FAQ() {
  const accordianBody = {
    backgroundColor: "#F4F7FA",
    color: "#001d42",
    fontWeight: "500",
  };
  return (
    <>
      <HeaderBwlowNavbar
        page="FAQ's"
        quote="A list of questions and answers relating to ORL."
      />

      <div
        className="container mt-1 p-5 border border-0"
        style={{ width: "95%" }}
      >
        <Helmet>
          <title>FAQ</title>
        </Helmet>
        <Accordion className="border border-0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Why ORL ? When there are so many other portals providing the same
            </Accordion.Header>
            <Accordion.Body>
              Alot of those platforms are paid so not everyone can afford them
              so we wanted to create a platform which is free to use as well as
              easy to use.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do these videos belong to you ?</Accordion.Header>
            <Accordion.Body>
              No these videos do not belong to me they are widely available on
              youtube and other video streaming platforms.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              if i want a specific video, how can i search it on ORL platform ?
            </Accordion.Header>
            <Accordion.Body>
              you can simply visit the "Tutorials section",and search the video
              in the search bar.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              if i want a specific video, how can i search it on ORL platform ?
            </Accordion.Header>
            <Accordion.Body>
              you can simply visit the "Tutorials section",and search the video
              in the search bar.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              which browser would you recommend while visiting ORL
            </Accordion.Header>
            <Accordion.Body>
              you can use any browser you want but Google Chrome is recommended.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              is the code of this website in public domain ?
            </Accordion.Header>
            <Accordion.Body style={accordianBody}>
              Yes the source code of this website is in public domain and you
              can get it <a href="https://github.com/suyog3235/ORL" style={{"textDecoration":"none"}}>HERE</a>.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              what if i want to contribute to the project ?
            </Accordion.Header>
            <Accordion.Body>
              Yes the source code of this website is in public domain{" "}
              <a href="https://github.com/suyog3235/ORL" style={{"textDecoration":"none"}}>HERE </a>so you can
              contribute if you want just dont push the changes to main branch
              create new branch and push changes there.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
