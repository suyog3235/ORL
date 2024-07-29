import React, { useEffect, useMemo } from "react";
import { Table, Modal } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function AllTutorials() {
  let sr = 1;
  let btn = {
    outline: "none",
    boxShadow: "none",
  };

  let [tutorialName, setTutorialName] = React.useState("");
  let [tutorialsUrl, setTutorialUrl] = React.useState("");
  let [courtesy, setCourtesy] = React.useState("");
  let [ebook, setEbook] = React.useState("");
  let [test, setTest] = React.useState("");
  let [active, setActive] = React.useState("");
  let [allTutorialsData, setAllTutorialsData] = React.useState([]);
  let [addNewTutorialButton, setAddNewTutorialButton] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [dataForUpdation, setDataForUpdation] = React.useState([0]);
  let [id, setId] = React.useState("");

  const handleClose = (e) => {
    setShow(false);
    e.preventDefault()
  };

  const handleShow = (e) => {
    const url = `http://localhost:8080/gettutorial`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: e.currentTarget.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setDataForUpdation(data);
        setShow(true);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/allturorials")
      .then((res) => res.json())
      .then((data) => {
        setAllTutorialsData(data);
      });
  });

  useEffect(() => {
    setTutorialName(dataForUpdation[0].name);
    setTutorialUrl(dataForUpdation[0].url);
    setCourtesy(dataForUpdation[0].courtesy);
    setEbook(dataForUpdation[0].ebook);
    setTest(dataForUpdation[0].test_name);
    setActive(dataForUpdation[0].active);
  }, [dataForUpdation[0]]);

  const show_form = () => {
    setAddNewTutorialButton(true);
  };
  const show_table = () => {
    setAddNewTutorialButton(false);
  };

  // for adding the tutorials into our states
  const setStates = (e) => {
    if (e.target.name === "tutorials_name") {
      setTutorialName(e.target.value);
    } else if (e.target.name === "tutorials_url") {
      setTutorialUrl(
        "https://www.youtube.com/embed/" +
          e.target.value.split("https://youtu.be/")[1]
      );
    } else if (e.target.name === "tutorials_courtesy") {
      setCourtesy(e.target.value);
    } else if (e.target.name === "tutorials_ebook") {
      setEbook(e.target.value);
    } else if (e.target.name === "tutorials_test") {
      setTest(e.target.value);
    } else if (e.target.name === "tutorials_active") {
      setActive(e.target.value);
    }
  };

  const add_new_tutorials = (e) => {
    const url = `http://localhost:8080/addtutorial`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        tutorialName: tutorialName,
        tutorialsUrl: tutorialsUrl,
        courtesy: courtesy,
        ebook: ebook,
        test: test,
        active: active,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data while adding tutorial--->", data);
      });
  };

  const update_tutorial = (e) => {
    const url = `http://localhost:8080/updatetutorial`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: id,
        tutorialName: tutorialName,
        tutorialsUrl: tutorialsUrl,
        courtesy: courtesy,
        ebook: ebook,
        test: test,
        active: active,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data while updating tutorial--->", data);
      });
      e.preventDefault()
      setShow(false)
  };

  const delete_tutorial = (e) => {
    const url = `http://localhost:8080/deletetutorial`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: e.currentTarget.value,
      }),
    });
  };

  return (
    <div>
      <div className="bg-light p-2">
        <p className="h3" style={{ marginLeft: "4%", color: "#001d42" }}>
          Tutorials
        </p>
        <button
          className="btn btn-success"
          style={{ marginLeft: "4%" }}
          onClick={show_form}
        >
          Add new tutorial
        </button>
      </div>
      <div className="p-3">
        {addNewTutorialButton ? (
          <div style={{ width: "80%" }} className="container mt-3">
            <form
              action=""
              onSubmit={add_new_tutorials}
              className="p-2 border border-1 rounded"
              style={{ backgroundColor: "#F8F9FA" }}
            >
              <label className="form-label  mt-1 ms-1">Name:</label>
              <input
                onChange={setStates}
                type="text"
                name="tutorials_name"
                className="form-control"
                placeholder="Tutorial name"
                required
              />
              <label className="form-label mt-1 ms-1">Url:</label>
              <input
                onChange={setStates}
                type="url"
                name="tutorials_url"
                className="form-control"
                placeholder="Url for the tutorial"
                required
              />
              <label htmlFor="" className="form-label  mt-1 ms-1">
                Courtesy:
              </label>
              <input
                onChange={setStates}
                type="text"
                name="tutorials_courtesy"
                className="form-control"
                placeholder="courtesy"
                required
              />
              <label htmlFor="" className="form-label  mt-1 ms-1">
                E-book:
              </label>
              <input
                onChange={setStates}
                type="url"
                name="tutorials_ebook"
                className="form-control"
                placeholder="Ebook link"
                required
              />
              <label htmlFor="" className="form-label mt-1 ms-1">
                Assign Test:
              </label>
              <input
                onChange={setStates}
                type="text"
                name="tutorials_test"
                className="form-control"
                placeholder="test name"
                required
              />
              <label htmlFor="" className="form-label mt-1 ms-1">
                Active:
              </label>
              <select
                onChange={setStates}
                id="active"
                name="tutorials_active"
                className="form-control"
                required
              >
                <option>Select option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <button
                type="submit"
                className="btn btn-primary mt-3"
                style={{ margin: "0 0 0 35%", width: "200px" }}
              >
                Submit
              </button>
              <button type="reset" className="btn btn-danger mt-3 ms-1">
                Reset
              </button>
              <button onClick={show_table} className="btn btn-danger mt-3 ms-1">
                Back
              </button>
            </form>
          </div>
        ) : (
          <Table className="mt-3 rounded" hover bordered size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>url</th>
                <th>Courtesy</th>
                <th>Ebook</th>
                <th>Test</th>
                <th>Active</th>
                <th width={"200px"}>Options</th>
              </tr>
            </thead>
            {allTutorialsData.length !== 0 ? (
              <tbody>
                {allTutorialsData.map((e) => {
                  return (
                    <tr>
                      <td>{sr++}</td>
                      <td>{e.name}</td>
                      <td>{e.url}</td>
                      <td>{e.courtesy}</td>
                      <td>{e.ebook}</td>
                      <td>{e.test_name}</td>
                      <td>{e.active}</td>
                      <td>
                        <div className="row">
                          <div className="col">
                            <button
                              className="btn"
                              style={btn}
                              title="Edit"
                              value={e.tutorial_id}
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
                                <Modal.Title>Update tutorial</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <form
                                  action=""
                                  onSubmit={update_tutorial}
                                  className="p-2 border border-1 rounded"
                                  style={{ backgroundColor: "#F8F9FA" }}
                                >
                                  <label className="form-label  mt-1 ms-1">
                                    Name:
                                  </label>
                                  <input
                                    onChange={setStates}
                                    type="text"
                                    name="tutorials_name"
                                    className="form-control"
                                    placeholder="Tutorial name"
                                    required
                                    defaultValue={dataForUpdation[0].name}
                                  />
                                  <label className="form-label mt-1 ms-1">
                                    Url:
                                  </label>
                                  <input
                                    onChange={setStates}
                                    type="url"
                                    name="tutorials_url"
                                    className="form-control"
                                    placeholder="Url for the tutorial"
                                    required
                                    defaultValue={dataForUpdation[0].url}
                                  />
                                  <label
                                    htmlFor=""
                                    className="form-label  mt-1 ms-1"
                                  >
                                    Courtesy:
                                  </label>
                                  <input
                                    onChange={setStates}
                                    type="text"
                                    name="tutorials_courtesy"
                                    className="form-control"
                                    placeholder="courtesy"
                                    required
                                    defaultValue={dataForUpdation[0].courtesy}
                                  />
                                  <label
                                    htmlFor=""
                                    className="form-label  mt-1 ms-1"
                                  >
                                    E-book:
                                  </label>
                                  <input
                                    onChange={setStates}
                                    type="url"
                                    name="tutorials_ebook"
                                    className="form-control"
                                    placeholder="Ebook link"
                                    required
                                    defaultValue={dataForUpdation[0].ebook}
                                  />
                                  <label
                                    htmlFor=""
                                    className="form-label mt-1 ms-1"
                                  >
                                    Assign Test:
                                  </label>
                                  <input
                                    onChange={setStates}
                                    type="text"
                                    name="tutorials_test"
                                    className="form-control"
                                    placeholder="test name"
                                    required
                                    defaultValue={dataForUpdation[0].test_name}
                                  />
                                  <label
                                    htmlFor=""
                                    className="form-label mt-1 ms-1"
                                  >
                                    Active:
                                  </label>
                                  <select
                                    onChange={setStates}
                                    id="active"
                                    name="tutorials_active"
                                    className="form-control"
                                    required
                                    defaultValue={dataForUpdation[0].active}
                                  >
                                    <option>Select option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                  <button
                                    type="submit"
                                    className="btn btn-primary mt-3"
                                    style={{
                                      marginLeft: "19%",
                                      width: "200px",
                                    }}
                                    value={dataForUpdation[0].tutorial_id}
                                    onClick={(e) => {
                                      setId(e.target.value);
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
                              value={e.tutorial_id}
                              onClick={delete_tutorial}
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
            ) : (
              <tbody>
                <h4 style={{ color: "#001d42" }} className="p-2">
                  No tutorials are available currently!!
                </h4>
              </tbody>
            )}
          </Table>
        )}
      </div>
    </div>
  );
}
