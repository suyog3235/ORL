import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import HeaderBwlowNavbar from "../Navbar/HeaderBwlowNavbar";
import { Modal } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import {AiOutlineDownload} from 'react-icons/ai'

export default function AdminProfile() {

  const [userData, setUserdata] = useState([])
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDelete, setDelete] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState([])
  const history = useNavigate()

  const handleClose = (e) => {
    setShowUpdateForm(false);
    setDelete(false)
    e.preventDefault();
  };

  const handleShow = (e) => {
        setShowUpdateForm(true);  
  };

  useEffect(()=>{
    let data = JSON.parse(sessionStorage.getItem('userData'))
    setUserdata(data)
    setEmail(data[0].email)
    setName(data[0].name)
  }, [])

  useEffect(()=>{
    if(userData.length !==0){
      const userUrl = `http://localhost:8080/getuser`;
      fetch(userUrl, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: userData[0].user_id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
            sessionStorage.setItem("userData", JSON.stringify(data));
            setUserdata(data)
        });
      
        const resultUrl = `http://localhost:8080/getresult`
        fetch(resultUrl, {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: userData[0].email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
              setResult(data)
          });
    }
  })

  const showDeleteModal = () =>{
    setDelete(true)
  }
  const deleteUSer = () =>{
    if(userData.length !==0){
      const url = `http://localhost:8080/deleteuser`;
      fetch(url, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: userData[0].user_id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log("deleted user \n", data)
            history("/")
        });
    }
  }

  const updateInfo = (e) =>{
      const url = `http://localhost:8080/updateuserprofile`;
      fetch(url, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: userData[0].user_id,
          name:name,
          email:email
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data while updating the user--->", data);
        });
        e.preventDefault()
        setShowUpdateForm(false)
  }

  const aboutHeading = {
    color: "#001d42",
    position: "relative",
    left: "15%",
    fontSize: "30px",
  };
  const labels = {
    color: "#001d42",
    fontSize: "20px",
  };
  const data = {
    color: "#001d42",
    fontSize: "20px",
  };
  const box = {
    left: "15%",
    position: "relative"
  }

  const setState = (e) =>{
    if(e.target.name==='tutorials_name')
    {
      setName(e.target.value)
    }
    else if(e.target.name==='tutorials_url')
    {
      setEmail(e.target.value)
    }
  }

  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <HeaderBwlowNavbar page={"Profile"} quote={"All the user related information."} />
      {
        userData.length !==0?
      <div className="mt-4 p-2">
          <h3 style={aboutHeading}>Profile</h3>
          <div style={box} className="mt-4">
            <div>
                <div>
                  <label style={labels}>Name:</label>
                </div>
                <div>
                  <label className="p-2" style={data}>{userData[0].name}</label>
                  <div className="border w-75"></div>
                </div>
            </div>
          <div className="mt-3">
                  <label style={labels}>Email:</label>
                </div>
                <div>
                  <label className="p-2" style={data}>{userData[0].email}</label>
                  <div className="border w-75"></div>
                </div>
                <div className="mt-4">
                  <button className="btn btn-primary" style={{left:"56%", position:"relative"}} onClick={handleShow}>Update Profile</button>
                  <Modal
                            show={showUpdateForm}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Update User</Modal.Title>
                            </Modal.Header>
                            {
                              userData.lenght!==0?
                            <Modal.Body>
                              <form action="" onSubmit={updateInfo} style={{ backgroundColor: "#F8F9FA" }} className="p-2 rounded border border-1">
                                <label className="form-label  mt-1 ms-1">
                                  Name:
                                </label>
                                <input
                                  onChange={setState}
                                  type="text"
                                  name="tutorials_name"
                                  className="form-control"
                                  placeholder="Tutorial name"
                                  required
                                  defaultValue={userData[0].name}
                                />
                                <label className="form-label mt-1 ms-1">
                                  Email:
                                </label>
                                <input
                                  onChange={setState}
                                  type="email"
                                  name="tutorials_url"
                                  className="form-control"
                                  placeholder="Url for the tutorial"
                                  required
                                  defaultValue={userData[0].email}
                                />
                                <button
                                  type="submit"
                                  className="btn btn-primary mt-3"
                                  style={{
                                    marginLeft: "19%",
                                    width: "200px",
                                  }}
                                  value={userData[0].user_id}
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
                  <button className="btn btn-danger" style={{left:"58%", position:"relative"}} onClick={showDeleteModal}>Delete Profile</button>
                  <Modal
                            show={showDelete}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Delete User</Modal.Title>
                            </Modal.Header>
                            {
                              userData.lenght!==0?
                            <Modal.Body>
                              <div>  
                                  Are you sure you want to delete your profile ?
                              </div>
                             <button className="btn btn-danger mt-3 float-end ms-2" onClick={deleteUSer}>Delete</button>
                             <button className="btn btn-primary mt-3 float-end" onClick={handleClose}>Cancel</button>
                            </Modal.Body>
                            :
                            <Modal.Body>
                              <h5 className="text-center">No data available!!</h5>
                            </Modal.Body>
                            }
                          </Modal>
                </div>
          </div>
      </div>
      :
      <p>{"No data is available"}</p>
      }
    </div>
  );
}
