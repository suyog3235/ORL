import "./App.css";
import Login from "./Components/utils/Login-Signup/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/utils/Login-Signup/Signup";
import React from "react";
import Auth from "./Auth";
function App() {
  const [check, setCheck] = React.useState([]);
  React.useEffect(() => {
    setCheck(JSON.parse(sessionStorage.getItem("userData")) || []);
  });
  return (
    <div className="parent-body d-flex flex-column min-vh-100">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      {check.length === 0 ? <></> : <Auth check={check} />}
    </div>
  );
}

export default App;
