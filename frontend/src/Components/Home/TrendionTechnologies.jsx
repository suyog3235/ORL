import React from "react";
import { Carousel } from "react-bootstrap";
export default function TrendionTechnologies() {
  return (
    <div className="mb-2">
      <Carousel autoPlay={true} interval={3000}>
        <Carousel.Item>
          <div className=" active mt-3">
            <h4
              className="mt-3"
              style={{
                textAlign: "center",
                color: "#001d42",
                fontWeight: "700",
              }}
            >
              Python
            </h4>
            <h6
              style={{
                textAlign: "center",
                color: "#001d42",
                fontSize: "20px",
                position: "relative",
                left: "13%",
                filter: "blur(0px)",
                fontFamily: "Poppins, sans-serif",
              }}
              className="mt-2 w-75 mb-5"
            >
              Python is a high-level, interpreted, general-purpose programming
              language. Its design philosophy emphasizes code readability with
              the use of significant indentation. Python is dynamically-typed
              and garbage-collected.
            </h6>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className=" mt-3">
            <h4
              className="mt-3"
              style={{
                textAlign: "center",
                color: "#001d42",
                fontWeight: "700",
              }}
            >
              Artificial intelligence (AI)
            </h4>
            <h6
              style={{
                textAlign: "center",
                color: "#001d42",
                fontSize: "20px",
                position: "relative",
                left: "13%",
                filter: "blur(0px)",
                fontFamily: "Poppins, sans-serif",
              }}
              className="mt-2 w-75 mb-5"
            >
              Artificial intelligence (AI) is the ability of a computer or a
              robot controlled by a computer to do tasks that are usually done
              by humans because they require human intelligence and discernment.
            </h6>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className=" mt-3">
            <h4
              className="mt-3"
              style={{
                textAlign: "center",
                color: "#001d42",
                fontWeight: "700",
              }}
            >
              React
            </h4>
            <h6
              style={{
                textAlign: "center",
                color: "#001d42",
                fontSize: "20px",
                position: "relative",
                left: "13%",
                filter: "blur(0px)",
                fontFamily: "Poppins, sans-serif",
              }}
              className="mt-2 w-75 mb-5"
            >
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
            </h6>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className=" mt-3">
            <h4
              className="mt-3"
              style={{
                textAlign: "center",
                color: "#001d42",
                fontWeight: "700",
              }}
            >
              Web Development
            </h4>
            <h6
              style={{
                textAlign: "center",
                color: "#001d42",
                fontSize: "20px",
                position: "relative",
                left: "13%",
                filter: "blur(0px)",
                fontFamily: "Poppins, sans-serif",
              }}
              className="mt-2 w-75 mb-5"
            >
              Web development is the coding or programming that enables website
              functionality, per the owner's requirements. It mainly deals with
              the non-design aspect of building websites, which includes coding
              and writing markup.
            </h6>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className=" mt-3">
            <h4
              className="mt-3"
              style={{
                textAlign: "center",
                color: "#001d42",
                fontWeight: "700",
              }}
            >
              Machine Learning
            </h4>
            <h6
              style={{
                textAlign: "center",
                color: "#001d42",
                fontSize: "20px",
                position: "relative",
                left: "13%",
                filter: "blur(0px)",
                fontFamily: "Poppins, sans-serif",
              }}
              className="mt-2 w-75 mb-5"
            >
              Machine Learning is undeniably one of the most influential and
              powerful technologies in today's world. More importantly, we are
              far from seeing its full potential. There’s no doubt, it will
              continue to be making headlines for the foreseeable future.
            </h6>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
