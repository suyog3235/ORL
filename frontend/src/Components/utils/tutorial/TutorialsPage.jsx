import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HeaderBelowNavForTutorial from "../Navbar/HeaderBelowNavForTutorial";
export default function TutorialsPage() {
  let [tutorialData, setTutorialData] = React.useState([]);
  let { id } = useParams();
  let history = useNavigate();
  React.useEffect(() => {
    const url = `http://localhost:8080/gettutorial`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTutorialData(data);
      });
  });

  // const testPage = (e) => {
  //   history(`/testpage/${e.target.value}`);
  // };
  return (
    <div className="mb-5">
      {tutorialData.map((e) => {
        return (
          <>
            <HeaderBelowNavForTutorial page={e.name} />
            <div className="container w-75 mt-3" style={{ height: "500px" }}>
              <iframe
                className="border rounded border-0"
                width="100%"
                height="100%"
                src={e.url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
              ></iframe>
            </div>
            <div className="container w-75 mt-2">
              <p
                style={{
                  textTransform: "capitalize",
                  color: "rgb(0, 29, 66)",
                  fontSize: "22px",
                  fontWeight: "bolder",
                  padding: "1% 1% 1% 1%",
                  fontFamily: "Poppins,sans-serif ",
                  letterSpacing: "1px",
                }}
                className="border border-2 rounded"
              >
                {e.name} <br />
                <span style={{ fontWeight: "normal", fontSize: "15px" }}>
                  video courtesy: {e.courtesy}
                </span>
              </p>
            </div>
            <div className="container w-75 mt-1 p-1">
              <div className="row gap-2 ms-2">
                <a
                  href={e.ebook}
                  className="btn search"
                  style={{ width: "22%" }}
                  download
                >
                  Download Free E-book
                </a>
                {/* <a
                  value={e.test_name}
                  onClick={testPage}
                  className="btn search"
                  style={{ width: "20%" }}
                >
                  Attempt Quiz
                </a> */}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
