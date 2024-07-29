import React from "react";
import { Table, Modal } from "react-bootstrap";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function AllTests() {
  const [data, setData] = React.useState([]);
  const [showform, setShowForm] = React.useState(false);
  const [testName, setTestName] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [op1, setop1] = React.useState("");
  const [op2, setop2] = React.useState("");
  const [op3, setop3] = React.useState("");
  const [op4, setop4] = React.useState("");
  const [answer, setanswer] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [testnameforshowing, settestnameforshowing] = React.useState("");
  const [count, setcount] = React.useState(0);
  const history = useNavigate()
  React.useEffect(() => {
    const url = `http://localhost:8080/getalltests`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        filename: "get file paths from here hehe",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });
  const handleClose = (e) => {
    setShow(false);
    e.preventDefault();
  };
  const showTestForm = () => {
    if (showform === true) {
      setShowForm(false);
    } else if (showform === false) {
      setShowForm(true);
    }
  };
  const addTestName = (e) => {
    const url = `http://localhost:8080/addtest`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        testname: testName,
      }),
    });
    e.preventDefault();
    setShowForm(false);
  };

  const updateValue = (e) => {
    if (e.target.name === "testName") {
      setTestName(e.target.value);
    } else if (e.target.name === "question") {
      setQuestion(e.target.value);
    } else if (e.target.name === "op1") {
      setop1(e.target.value);
    } else if (e.target.name === "op2") {
      setop2(e.target.value);
    } else if (e.target.name === "op3") {
      setop3(e.target.value);
    } else if (e.target.name === "op4") {
      setop4(e.target.value);
    } else if (e.target.name === "answer") {
      setanswer(e.target.value);
    }
  };
  const addQuestion = (e) => {
    setShow(true);
    settestnameforshowing(e.currentTarget.value);
  };
  const addtestQuestions = (e) => {
    console.info(e.target.value);
    const url = `http://localhost:8080/addquestions`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        tablename: testnameforshowing,
        question: question,
        op1: op1,
        op2: op2,
        op3: op3,
        op4: op4,
        answer: answer,
      }),
    });
    e.preventDefault();
    e.target.reset();
    setcount(count + 1);
  };

  const deleteTest = (e) => {
    const url = `http://localhost:8080/deletetest`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        testname: e.currentTarget.value,
      }),
    });
  };

  const editTest = (e) => {
    history(`/edittest/${e.currentTarget.value}`  )
  };

  let id = 1;
  let btn = {
    outline: "none",
    boxShadow: "none",
  };

  return (
    <div>
      <div className="bg-light p-2">
        <p className="h3" style={{ marginLeft: "4%", color: "#001d42" }}>
          Tests
        </p>
        <button
          className="btn btn-success"
          style={{ marginLeft: "4%" }}
          onClick={showTestForm}
        >
          Add new test
        </button>
        {showform ? (
          <div className="mt-5 ms-5">
            <div style={{ display: "flex", gap: "15px" }} className="mb-3">
              <h5
                className="mt-1"
                style={{
                  color: "#001d42",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                Add Test :
              </h5>
              <form action="" onSubmit={addTestName}>
                <input
                  type="text"
                  onChange={updateValue}
                  name="testName"
                  className="border border-1 border-dark rounded"
                  style={{ padding: "7px", width: "500px" }}
                  autocomplete="off"
                />
                <button type="submit" className="ms-1 btn search">
                  Add
                </button>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* data table */}
      <div className="container" style={{ width: "90%" }}>
        <Table className="mt-3 rounded" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th> Test Name</th>
              <th width={"200px"}>Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <tr>
                  <td>{id++}</td>
                  <td>{e.Tables_in_orltests}</td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <button
                          className="btn"
                          style={btn}
                          value={e.Tables_in_orltests}
                          title="Add Question"
                          onClick={addQuestion}
                        >
                          <AiOutlinePlusCircle size={"20px"} />
                        </button>
                        <Modal
                          show={show}
                          onHide={handleClose}
                          backdrop="static"
                          keyboard={false}
                          centered
                        >
                          <Modal.Header closeButton>
                            {
                              count===0?
                              <Modal.Title>Add Question</Modal.Title>
                             : <Modal.Title>Add More Questions</Modal.Title>

                            }
                          </Modal.Header>
                          {data.lenght !== 0 ? (
                            <Modal.Body>
                              <form
                                action=""
                                style={{ backgroundColor: "#F8F9FA" }}
                                className="p-2 rounded border border-1"
                                onSubmit={addtestQuestions}
                              >
                                <label className="form-label  mt-1 ms-1">
                                  Question:
                                </label>
                                <input
                                  onChange={updateValue}
                                  type="text"
                                  name="question"
                                  className="form-control"
                                  placeholder="Question"
                                  required
                                />
                                <label className="form-label mt-1 ms-1">
                                  A:
                                </label>
                                <input
                                  onChange={updateValue}
                                  type="test"
                                  name="op1"
                                  className="form-control"
                                  placeholder="option 1"
                                  required
                                />
                                <label className="form-label mt-1 ms-1">
                                  B:
                                </label>
                                <input
                                  onChange={updateValue}
                                  type="test"
                                  name="op2"
                                  className="form-control"
                                  placeholder="option 2"
                                  required
                                />
                                <label className="form-label mt-1 ms-1">
                                  C:
                                </label>
                                <input
                                  onChange={updateValue}
                                  type="test"
                                  name="op3"
                                  className="form-control"
                                  placeholder="option 3"
                                  required
                                />
                                <label className="form-label mt-1 ms-1">
                                  D:
                                </label>
                                <input
                                  onChange={updateValue}
                                  type="test"
                                  name="op4"
                                  className="form-control"
                                  placeholder="option 4"
                                  required
                                />
                                <label className="form-label mt-1 ms-1">
                                  Answer:
                                </label>
                                <input
                                  onChange={updateValue}
                                  type="test"
                                  name="answer"
                                  className="form-control"
                                  placeholder="answer"
                                  required
                                />
                                <button
                                  type="submit"
                                  className="btn btn-primary mt-3"
                                  style={{
                                    marginLeft: "19%",
                                    width: "200px",
                                  }}
                                >
                                  Add
                                </button>
                                <button
                                  onClick={handleClose}
                                  className="btn btn-danger mt-3 ms-1"
                                >
                                  Close
                                </button>
                              </form>
                            </Modal.Body>
                          ) : (
                            <Modal.Body>
                              <h5 className="text-center">
                                Currently Not available!!
                              </h5>
                            </Modal.Body>
                          )}
                        </Modal>
                      </div>
                      <div className="col">
                        <button
                          className="btn"
                          style={btn}
                          title="Edit"
                          value={e.Tables_in_orltests}
                          onClick={editTest}
                        >
                          <AiOutlineEdit size={"20px"} />
                        </button>
                      </div>
                      <div className="col">
                        <button
                          className="btn"
                          style={btn}
                          value={e.Tables_in_orltests}
                          title="Delete"
                          onClick={deleteTest}
                        >
                          <AiOutlineDelete size={"20px"} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
