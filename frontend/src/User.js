import React from "react";
import Navbar from "./Components/utils/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Tutorials from "./Components/Tutorials/Tutorials";
import Tests from "./Components/Tests/Tests";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FAQ from "./Components/utils/FAQ/FAQ";
import Profile from "./Components/utils/Profile/Profile";
import TutorialsPage from "./Components/utils/tutorial/TutorialsPage";
import TestPage from "./Components/utils/test/TestPage";
import Footer from "./Components/utils/Footer/Footer";
import { Route, Routes } from "react-router-dom";

export default function User() {
  return (
    <div className="parent-body d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/tutorials" element={<Tutorials />}></Route>
        <Route path="/testpage/:testname" element={<TestPage />}></Route>
        <Route path="/tests" element={<Tests />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/tutorial/:id" element={<TutorialsPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
