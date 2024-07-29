import React from "react";
import LoginNavbar from "../Navbar/LoginNavbar";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
export default function Login() {
  let [userEmail, setUseremail] = React.useState("");
  let [userPassword, setPassword] = React.useState("");
  let [verifyEmail, setVerifyEmail] = React.useState("");
  let [showForm, setShowform] = React.useState(false);
  let [check, setcheck] = React.useState(false);
  let [success, setSuccess] = React.useState([]);
  let [failed, setFailed] = React.useState([1, 2, 3, 4]);
  const [show, setShow] = React.useState(false);
  const [newpassword, setnewpassword] = React.useState("");
  const history = useNavigate();

  const handleClose = (e) => {
    setShow(false);
    setShowform(false);
    setcheck(false);
    setVerifyEmail("");
    e.preventDefault();
  };
  const handleShow = (e) => {
    setShow(true);
  };

  React.useEffect(() => {
    sessionStorage.clear();
  }, []);

  React.useEffect(() => {
    if (success.length > 0) {
        notify();
        history("/home");
        setSuccess([]);
    } else if (failed.length === 0) {
       setFailed([1, 2, 3, 4]);
    }
  });
  
  if (check === true) {
    setTimeout(() => {
      setcheck(false);
      setFailed([1,2,3,4])
    }, 5000);
  }
  
  const submitLoginForm = (e) => {
    const url = `http://localhost:8080/login`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userEmail: userEmail,
        password: userPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("userData", JSON.stringify(data));
        setSuccess(data);
        setFailed(data);
      });
    e.preventDefault();
    e.target.reset();
  };

  const verifyEmailAddress = (e) => {
    const url = `http://localhost:8080/verifyemail`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userEmail: verifyEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setcheck(true);
        if (data.length !== 0) {
          setShowform(true);
          setFailed([1,2,3,4]);
        }
      });
    e.preventDefault();
  };



  const notify = () => {
    if (success.length !== 0) {
      toast(
        "Login successfull ! Wait for a moment we are redirecting you to our main page"
      );
    } else if (failed.length === 0) {
      toast("Failed ! Please try again");
    }
  };

  const updateState = (e) => {
    if (e.target.name === "email") {
      setUseremail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "verifyemail") {
      setVerifyEmail(e.target.value);
      console.info(e.target.value);
    } else if (e.target.name === "newPassword") {
      setnewpassword(e.target.value);
    }
  };

  const loginForm = {
    backgroundColor: "#FAF9FA",
    marginTop: "10%",
    marginBottom: "13%",
    width: "30%",
  };
  const loginButton = {
    marginLeft: "40%",
  };

  const changePassword = (e) => {
    const url = `http://localhost:8080/changepassword`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userEmail: verifyEmail,
        newpassword: newpassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShow(false)
      });
    e.preventDefault();
  };

  return (
    <div className="loginBackground">
    {
      show?"":
      <ToastContainer
      position="bottom-right"
      autoClose={4000}
      newestOnTop={false}
      closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        hideProgressBar={false}
        />
      }
      <LoginNavbar />
      <div>
        <div style={loginForm} className="container border rounded">
          <h1
            style={{ color: "#001d42", fontWeight: "700" }}
            className="text-center mt-1"
          >
            Login
          </h1>
          <h4 style={{ color: "#001d42" }} className="text-center">
            To access the Resources
          </h4>
          <form action="" onSubmit={submitLoginForm}>
            <label htmlFor="" className="form-label mt-1">
              E-mail Address
            </label>
            <input
              required
              type="text"
              className="form-control"
              name="email"
              onChange={updateState}
            />
            <label htmlFor="" className="form-label mt-1">
              Password
            </label>
            <input
              required
              type="password"
              className="form-control"
              name="password"
              onChange={updateState}
            />
              <button
                type="submit"
                className="btn search mt-3 mb-3"
                style={loginButton}
              >
                Login
              </button>
            <p className="text-center">
              <a
                style={{
                  textDecoration: "none",
                  color: "#0A71E0",
                  cursor: "pointer",
                }}
                onClick={handleShow}
              >
                Forgot passowrd ?
              </a>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Change Password
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form action="" onSubmit={verifyEmailAddress}>
                    <input
                      value={verifyEmail}
                      required
                      onChange={updateState}
                      type="email"
                      name="verifyemail"
                      placeholder="Enter your email Address to verify"
                      className="border border-1 rounded me-1 border-dark"
                      style={{ width: "389px", padding: "7px" }}
                    />
                    <button type="submit" className="btn btn-success">
                      Verify
                    </button>
                  </form>
                  {check ? (
                    <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                      <div class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div className="mt-1">
                        Please wait till we verify your email address !
                      </div>
                      <div className="mt-1" style={{ color: "gray" }}>
                        This may take a while !
                      </div>
                    </div>
                  ) : showForm ? (
                    <div className="mt-4">
                      <form
                        action=""
                        style={{ backgroundColor: "#F8F9FA" }}
                        className="p-2 rounded border border-1"
                        onSubmit={changePassword}
                      >
                        <label htmlFor="" className="form-label">
                          New password :{" "}
                        </label>
                        <input
                          required
                          onChange={updateState}
                          type="password"
                          name="newPassword"
                          placeholder="new passowrd"
                          className="form-control"
                        />
                        <label htmlFor="" className="form-label">
                          confirm password :{" "}
                        </label>
                        <input
                          type="password"
                          required
                          onChange={updateState}
                          name="cfmaPassword"
                          placeholder="confirm passowrd"
                          className="form-control"
                        />
                        <button
                          type="submit"
                          className="btn btn-primary mt-3"
                          style={{
                            marginLeft: "19%",
                            width: "200px",
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
                    </div>
                  ) : (
                    ""
                  )}
                </Modal.Body>
              </Modal>
            </p>
            <p className="text-center">
              <a href="/signup" style={{ textDecoration: "none" }}>
                New user maybe? click here to signup
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
