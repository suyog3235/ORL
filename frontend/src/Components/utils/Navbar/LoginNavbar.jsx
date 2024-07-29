import React from "react";
import { Link } from "react-router-dom";

export default function LoginNavbar() {
  const brandName = {
    color: "#001d42",
    textDecoration: "none",
    fontWeight: "700",
    position: "relative",
    fontSize: "50px",
    left: "9%",
  };

  // const id = "suyog";
  // const history = useNavigate();
  // const userPRofile = (e) => {
  //   id && history(`/profile/${id}`);
  // };

  return (
    <div style={{ backgroundColor: "#F4F7FA" }}>
      <div className="row">
        <div className="col-md-6">
          <Link to="/login" className=" text-opacity-75" style={brandName}>
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
      </div>
    </div>
  );
}
