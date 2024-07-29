import React from "react";

export default function HeaderBwlowNav(props) {
  return (
    <div style={{ backgroundColor: "#F4F7FA", height: "100px", padding: "2%" }}>
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
      </div>
    </div>
  );
}
