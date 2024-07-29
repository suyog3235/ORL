import React from "react";
import { Table,Modal } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function AllUsers() {
  let id = 1;
  let btn = {
    outline: "none",
    boxShadow: "none",
  };
  let [allUSersData,setAllUsersData] = React.useState([])
  const [dataForUpdation, setDataForUpdation] = React.useState([0]);
  const [show, setShow] = React.useState(false);
  const [role,setRole] = React.useState('')
  const [ids,setIds] = React.useState('')

  React.useEffect(()=>{
    fetch("http://localhost:8080/alladmins")
      .then((res) => res.json())
      .then((data) => {
        setAllUsersData(data);
      });
  })

  React.useEffect(()=>{
    setRole(dataForUpdation[0].role)
  },[dataForUpdation])

  const setStates = (e) =>{
    if(e.target.name==="user_role")
    {
      setRole(e.target.value)
    }
  }
  const handleClose = (e) => {
    setShow(false);
    e.preventDefault();
  };

  const handleShow = (e) => {
    const url = `http://localhost:8080/getuser`;
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

  const deleteUser = (e) => {
    const url = `http://localhost:8080/deleteuser`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: e.currentTarget.value,
      }),
    });
  };

  const update_user = (e) => {
    const url = `http://localhost:8080/updateuser`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: ids,
        role:role
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data while updating tutorial--->", data);
      });
      e.preventDefault()
      setShow(false)
  };

  return (
    <div>
      <div className="bg-light p-2">
        <p className="h3" style={{ marginLeft: "4%", color: "#001d42" }}>
         Admins
        </p>
      </div>
      <div className="container" style={{ width: "90%" }}>
        <Table className="mt-3 rounded" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th width={"200px"}>Options</th>
            </tr>
          </thead>
          {
            allUSersData.length !==0 ?
            <tbody>
            {allUSersData.map((e) => {
              return (
                <tr>
                  <td>{id++}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.role}</td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <button className="btn" style={btn} title="Edit" value={e.user_id} onClick={handleShow}>
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
                              <Modal.Title>Update User</Modal.Title>
                            </Modal.Header>
                            {
                              dataForUpdation.lenght!==0?
                            <Modal.Body>
                              <form action="" onSubmit={update_user} style={{ backgroundColor: "#F8F9FA" }} className="p-2 rounded border border-1">
                                <label className="form-label  mt-1 ms-1">
                                  Name:
                                </label>
                                <input
                                  disabled
                                  onChange={setStates}
                                  type="text"
                                  name="tutorials_name"
                                  className="form-control"
                                  placeholder="Tutorial name"
                                  required
                                  defaultValue={dataForUpdation[0].name}
                                />
                                <label className="form-label mt-1 ms-1">
                                  Email:
                                </label>
                                <input
                                  disabled
                                  type="url"
                                  name="tutorials_url"
                                  className="form-control"
                                  placeholder="Url for the tutorial"
                                  required
                                  defaultValue={dataForUpdation[0].email}
                                />
                                <label
                                  htmlFor=""
                                  className="form-label mt-1 ms-1"
                                >
                                  Role:
                                </label>
                                <select
                                  onChange={setStates}
                                  id="active"
                                  name="user_role"
                                  className="form-control"
                                  required
                                  defaultValue={dataForUpdation[0].role}
                                >
                                  <option>Select option</option>
                                  <option value="member">Member</option>
                                  <option value="admin">Admin</option>
                                </select>
                                <button
                                  type="submit"
                                  className="btn btn-primary mt-3"
                                  style={{
                                    marginLeft: "19%",
                                    width: "200px",
                                  }}
                                  value={dataForUpdation[0].user_id}
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
                            :
                            <Modal.Body>
                              <h5 className="text-center">No data available!!</h5>
                            </Modal.Body>
                            }
                          </Modal>
                      </div>
                      <div className="col">
                        <button className="btn" style={btn} title="Delete" value={e.user_id} onClick={deleteUser}>
                          <AiOutlineDelete size={"25px"} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          :
          <tbody>
              <h4 style={{ color: "#001d42" }} className="p-2">
              No users are available currently!!
              </h4>
          </tbody>
          }
        </Table>
      </div>
    </div>
  );
}
