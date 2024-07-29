import React from "react";

export default function HeaderBwlowNavbar(props) {
  return (
    <div style={{ backgroundColor: "#F4F7FA", height: "170px", padding: "4%" }}>
      <div>
        <h1
          style={{
            color: "#001d42",
            position: "relative",
            left: "7px",
          }}
        >
          {props.page}
        </h1>
        <h5
          style={{ color: "#001d42", position: "relative", left: "7px" }}
          className="mt-3"
        >
          {props.quote}
        </h5>
      </div>
    </div>
  );
}
