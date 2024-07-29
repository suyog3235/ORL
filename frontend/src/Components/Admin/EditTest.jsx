import React from "react";
import { Table, Modal } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import HeaderBwlowNavbar from "../utils/Navbar/HeaderBelowNav";
export default function EditTest() {
  const [data, setData] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [dataForUpdation, setDataForUpdation] = React.useState([0]);
  const [question, setQuestion] = React.useState("");
  const [op1, setop1] = React.useState("");
  const [op2, setop2] = React.useState("");
  const [op3, setop3] = React.useState("");
  const [op4, setop4] = React.useState("");
  const [answer, setanswer] = React.useState("");
  const [ids,setIds] = React.useState('')


  const { testname } = useParams();
  React.useEffect(() => {
    const url = `http://localhost:8080/edittest`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        testname: testname,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });
  let id = 1;
  let btn = {
    outline: "none",
    boxShadow: "none",
  };
  const handleClose = (e) => {
    setShow(false);
    e.preventDefault();
  };

  React.useEffect(() => {
    setQuestion(dataForUpdation[0].question);
    setop1(dataForUpdation[0].op1);
    setop2(dataForUpdation[0].op2);
    setop3(dataForUpdation[0].op3);
    setop4(dataForUpdation[0].op4);
    setanswer(dataForUpdation[0].answer);
  },[dataForUpdation]);
  const updateValue = (e) => {
    if (e.target.name === "question") {
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
  const handleShow = (e) => {
    const url = `http://localhost:8080/getquestiondata`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: e.currentTarget.value,
        testname: testname,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setDataForUpdation(data);
        setShow(true);
      });
  };
  const updatequestion = (e) => {
    const url = `http://localhost:8080/updatequestion`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: ids,
        testname: testname,
        question: question,
        op1:op1,
        op2:op2,
        op3:op3,
        op4:op4,
        answer:answer,
      }),
    })
    e.preventDefault();
    setShow(false)
  };
  const deleteQuestion = (e) => {
    const url = `http://localhost:8080/delequestion`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        questionid: e.currentTarget.value,
        testname: testname,
      }),
    });
  };

  return (
    <div>
      <HeaderBwlowNavbar page={"Edit Test"} quote={testname} />
      {/* data table */}
      <div className="container mt-5 p-1" style={{ width: "95%" }}>
        <Table className="mt-3 rounded" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th className="" style={{ colspan: "2" }}>
                Question
              </th>
              <th>Option-1</th>
              <th>Option-2</th>
              <th>Option-3</th>
              <th>Option-4</th>
              <th>Answer</th>
              <th width={"200px"}>Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <tr>
                  <td>{id++}</td>
                  <td>{e.question}</td>
                  <td>{e.op1}</td>
                  <td>{e.op2}</td>
                  <td>{e.op3}</td>
                  <td>{e.op4}</td>
                  <td>{e.answer}</td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <button
                          className="btn"
                          style={btn}
                          title="Edit"
                          value={e.test_id}
                          onClick={handleShow}
                        >
                          <AiOutlineEdit size={"25px"} />
                        </button>
                        <Modal
                          show={show}
                          onHide={handleClose}
                          backdrop="static"
                          keyboard={false}
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                              Edit Question
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <form
                              action=""
                              onSubmit={updatequestion}
                              style={{ backgroundColor: "#F8F9FA" }}
                              className="p-2 rounded border border-1"
                            >
                              <label className="form-label  mt-1 ms-1">
                                Question:
                              </label>
                              <input
                                onChange={updateValue}
                                type="text"
                                name="question"
                                className="form-control"
                                placeholder="question"
                                required
                                defaultValue={dataForUpdation[0].question}
                              />
                              <label className="form-label mt-1 ms-1">A:</label>
                              <input
                                onChange={updateValue}
                                type="text"
                                name="op1"
                                className="form-control"
                                placeholder="option 1"
                                required
                                defaultValue={dataForUpdation[0].op1}
                              />
                              <label className="form-label mt-1 ms-1">B:</label>
                              <input
                                onChange={updateValue}
                                type="test"
                                name="op2"
                                className="form-control"
                                placeholder="option 2"
                                required
                                defaultValue={dataForUpdation[0].op2}
                              />
                              <label className="form-label mt-1 ms-1">c:</label>
                              <input
                                onChange={updateValue}
                                type="test"
                                name="op3"
                                className="form-control"
                                placeholder="option 3"
                                required
                                defaultValue={dataForUpdation[0].op3}
                              />
                              <label className="form-label mt-1 ms-1">d:</label>
                              <input
                                onChange={updateValue}
                                type="test"
                                name="op4"
                                className="form-control"
                                placeholder="option 4"
                                required
                                defaultValue={dataForUpdation[0].op4}
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
                                defaultValue={dataForUpdation[0].answer}
                              />

                              <button
                                type="submit"
                                className="btn btn-primary mt-3"
                                style={{
                                  marginLeft: "19%",
                                  width: "200px",
                                }}
                                value={dataForUpdation[0].test_id}
                                onClick={(e)=>{
                                    setIds(e.target.value)
                                  }}
                              >
                                Save Changes
                              </button>
                              <button
                                onClick={handleClose}
                                className="btn btn-danger mt-3 ms-1"
                              >
                                Close
                              </button>
                            </form>
                          </Modal.Body>
                        </Modal>
                      </div>
                      <div className="col">
                        <button
                          className="btn"
                          style={btn}
                          title="Delete"
                          value={e.test_id}
                          onClick={deleteQuestion}
                        >
                          <AiOutlineDelete size={"25px"} />
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
