import React, { useRef } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { FaQuestion } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
export default function AdminNavbar() {

  const [name, setName] = React.useState("");
  const [email, setemail] = React.useState("");

  React.useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("userData"));
    setName(data[0].name);
    setemail(data[0].email);
  });
  const brandName = {
    color: "#001d42",
    textDecoration: "none",
    fontWeight: "700",
    position: "relative",
    fontSize: "50px",
    left: "9%",
  };
  const link = {
    color: "black",
    fontSize: "20px",
    fontWeight: "500",
  };
  const profileIcon = {
    background: "transparent",
    border: "none",
  };
  const manageProfileButton = {
    padding: "2% 5% 2% 5%",
    textDecoration: "none",
    border: "1px solid black",
    borderRadius: "15px",
    cursor: "pointer",
  };
  const profilePopoverMenus = { textDecoration: "none", color: "#001d42" };
  
  const id = "suyog";
  const history = useNavigate();
  const userPRofile = (e) => {
    id && history(`/adminprofile/${id}`);
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header className="bg-light">
        <div className="text-center">
          <ImProfile size={"30px"} className="mt-2 mb-1" />
          <h6 className="mt-2">{name}</h6>
          <h6 className="mt-1 mb-4">{email}</h6>
          <a
            onClick={userPRofile}
            style={manageProfileButton}
            className="search"
          >
            Manage Your Profile
          </a>
        </div>
      </Popover.Header>
      <Popover.Header className="bg-light">
        <a href="/faq" style={profilePopoverMenus}>
          <FaQuestion size={"15px"} className="float-start mt-1 me-2" />
          FAQ's
        </a>

        
      </Popover.Header>
      <Popover.Header>
        <a href="/" style={profilePopoverMenus}>
          <FiLogOut size={"15px"} className="float-start mt-1 me-2" />
          Sign out
        </a>
      </Popover.Header>
    </Popover>
  );

  return (
    <div style={{ backgroundColor: "#F4F7FA" }}>
      <div className="row">
        <div className="col-md-6">
          <Link to="/home" className=" text-opacity-75" style={brandName}>
            ORL
            <span
              style={{
                fontWeight: "100",
                fontSize: "16px",
                position: "relative",
                bottom: "4px",
                left: "1px",
              }}
            >
              |Online Resource Library
            </span>
          </Link>
        </div>
        <div className="col-md-6 mt-2">
          <ul className="nav justify-content-end p-2 me-4">
            {/* <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home"
                style={link}
              >
                Summery
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link"
                // to="/alladmins"
                to="/home"
                style={link}
              >
                Admins
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allusers" style={link}>
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alltutorials" style={link}>
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alltests" style={link}>
                Tests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allresults" style={link}>
                Results
              </Link>
            </li>
            <li>
              <div className="ms-2">
                <OverlayTrigger
                  rootClose={true}
                  trigger={["click"]}
                  placement="bottom"
                  overlay={popover}
                >
                  <button style={profileIcon}>
                    <CgProfile
                      size={"33px"}
                      className="mt-1"
                      style={{ color: "black" }}
                    />
                  </button>
                </OverlayTrigger>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
