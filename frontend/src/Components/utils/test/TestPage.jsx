import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsTrophy } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function TestPage() {
  const { testname } = useParams();
  const [questions, setQuestions] = useState([1]);
  let [i, seti] = useState(0);
  let [score, setScore] = useState(0);
  let quesstionNumber = 0;
  let history = useNavigate();
  useEffect(() => {
    const url = "http://localhost:8080/gettest";
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        filename: testname,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  });

  const saveresult = (e) => {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    console.info("data--->>", data);
    let email = data[0]["email"];
    const url = "http://localhost:8080/saveresult";
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        testname: testname,
        userEmail: email,
        score: score,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data['affectedRows'] === 1)
        {
          history('/tests')
        }
      });
  };
  const nextQuestion = (e) => {
    seti(i + 1);
    if (e.target.value === questions[i].answer) {
      setScore(score + 1);
    }
  };

  if (i === questions.length) {
    return (
      <div
        className="container rounded border border-dark border-2 p-2 w-75"
        style={{ backgroundColor: "#F4F7FA", marginTop: "2%" }}
      >
        <p
          className="text-center mt-4"
          style={{ color: "#001d42", fontSize: "22px", fontWeight: "700" }}
        >
          Congratulations you have completed the quiz and you guessed{" "}
          <span style={{ color: "green" }}>{score}</span> out of{" "}
          <span style={{ color: "red" }}>{questions.length}</span> questions
          correctly.
        </p>
        <p className="p-5 text-center d-flex align-items-center justify-content-center">
          <div
            className="p-3 rounded-circle"
            style={{
              width: "200px",
              backgroundColor: "#001d42",
              color: "yellow",
            }}
          >
            <BsTrophy size={"140px"} className="p-2" />
          </div>
        </p>
        <p
          className="h5 text-center my-3 p-2"
          style={{ color: "#001d42", fontWeight: "700" }}
        >
          Total Points: {score}
        </p>
        <p
          className="text-center d-flex align-items-center justify-content-center"
          style={{ fontSize: "22px" }}
        >
          <button className="btn btn-success w-25" onClick={saveresult}>
            <span>OK</span>
          </button>
        </p>
      </div>
    );
  } else {
    return (
      <div className="mt-2 mb-2">
        <div
          className="mt-4 ms-5"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span
            style={{
              fontSize: "30px",
              color: "#001d42",
              fontweight: "700",
              textTransform: "capitalize",
            }}
          >
            Test : {testname}
          </span>
          <span
            className="ms-1"
            style={{ fontSize: "20px", color: "#001d42", fontweight: "700" }}
          >
            Questions : {questions.length}
          </span>
          <hr className="bg-dark" style={{ width: "97%" }} />
        </div>
        <div>
          <div className="question-container ms-5">
            <div>
              <p
                style={{
                  fontSize: "25px",
                  color: "#001d42",
                  fontweight: "700",
                }}
              >
                Q{i + 1}. {questions[i].question}
              </p>
            </div>
            <div>
              <div>
                <div className=" w-50 p-2 mb-1">
                  <button
                    className="btn border border-1 w-100 border-secondary"
                    value={questions[i].op1}
                    onClick={nextQuestion}
                  >
                    <span className="float-start"> {questions[i].op1}</span>
                  </button>
                </div>
                <div className=" w-50 p-2 mb-1">
                  <button
                    className="btn border border-1 w-100 border-secondary"
                    value={questions[i].op2}
                    onClick={nextQuestion}
                  >
                    <span className="float-start"> {questions[i].op2}</span>
                  </button>
                </div>
                <div className=" w-50 p-2 mb-1">
                  <button
                    className="btn border border-1 w-100 border-secondary"
                    value={questions[i].op3}
                    onClick={nextQuestion}
                  >
                    <span className="float-start"> {questions[i].op3}</span>
                  </button>
                </div>
                <div className=" w-50 p-2 mb-1">
                  <button
                    className="btn border border-1 w-100 border-secondary"
                    value={questions[i].op4}
                    onClick={nextQuestion}
                  >
                    <span className="float-start"> {questions[i].op4}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
