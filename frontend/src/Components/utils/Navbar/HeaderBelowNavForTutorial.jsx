import React from "react";

export default function HeaderBelowNavForTutorial(props) {
  return (
    <div>
      <div
        className="sticky-top"
        style={{
          backgroundColor: "#001d42",
          height: "65px",
          padding: "1%",
        }}
      >
        <div>
          <h2
            style={{
              color: "white",
              position: "relative",
              left: "3%",
              textTransform: "capitalize",
            }}
          >
            {props.page}
          </h2>
        </div>
      </div>
    </div>
  );
}
