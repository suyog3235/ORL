import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../Navbar/LoginNavbar";
import Footer from "../Footer/Footer";
export default function Signup() {
  const history = useNavigate();
  let [userName, setUsername] = React.useState("");
  let [userEmail, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [success, setSuccess] = React.useState(0);

  const updateStates = (e) => {
    if (e.target.name === "userName") {
      setUsername(e.target.value);
    } else if (e.target.name === "userEmail") {
      setEmail(e.target.value);
    } else if (e.target.name === "Password") {
      setPassword(e.target.value);
    }
  };

  React.useEffect(() => {
    if (success === 1) {
      notify();
      setTimeout(() => {
        history("/");
      }, 5000);
      setSuccess(0);
    }
  });

  const submitSignupForm = (e) => {
    console.log(`name ${userName}, email ${userEmail}, password ${password}`);
    const url = `http://localhost:8080/signup`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userName: userName,
        userEmail: userEmail,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(data.affectedRows);
      });
    e.preventDefault();
    e.target.reset();
  };

  const notify = () =>
    toast(
      "Sign up successfull !, wait for a moment we are redirecting you to login page "
    );

  const loginForm = {
    backgroundColor: "#FAF9FA",
    marginTop: "7%",
    marginBottom: "13%",
    width: "30%",
  };
  const loginButton = {
    marginLeft: "40%",
  };

  return (
    <div className="loginBackground">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        hideProgressBar={false}
      />
      <LoginNavbar />
      <div>
        <div style={loginForm} className="container border rounded">
          <h1
            style={{ color: "#001d42", fontWeight: "700" }}
            className="text-center mt-1"
          >
            Signup
          </h1>
          <form onSubmit={submitSignupForm} action="">
            <label htmlFor="" className="form-label mt-1">
              Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              name="userName"
              onChange={updateStates}
            />
            <label htmlFor="" className="form-label mt-1">
              E-mail Address
            </label>
            <input
              required
              type="email"
              className="form-control"
              name="userEmail"
              onChange={updateStates}
            />
            <label htmlFor="" className="form-label mt-1">
              Password
            </label>
            <input
              required
              type="password"
              className="form-control"
              name="Password"
              onChange={updateStates}
            />
            <label htmlFor="" className="form-label mt-1">
              Confirm Password
            </label>
            <input
              required
              type="password"
              className="form-control"
              name="confirmPassword"
            />
            <button
              type="submit"
              className="btn search mt-3 mb-3"
              style={loginButton}
            >
              Signup
            </button>
            <p className="text-center">
              <a href="/" style={{ textDecoration: "none" }}>
                Already a user ? click here to login
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
