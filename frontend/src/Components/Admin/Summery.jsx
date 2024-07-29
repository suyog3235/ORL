import React from "react";

export default function Summery() {
  const number = {
    fontSize: "100px",
    textAlign: "center",
    fontWeight: "700",
  };
  const heading = {
    fontSize: "22px",
    fontWeight: "600",
  };
  const subNumber = {
    fontSize: "20px",
    fontWeight: "600",
  };
  return (
    <div>
      <div className="bg-light p-2">
        <p className="h3 mt-1" style={{ marginLeft: "4%", color: "#001d42" }}>
          Summery
        </p>
        <p style={{ marginLeft: "4%", color: "#001d42" }}>
          Summery of all tutorials,admins,users and tests.
        </p>
      </div>
      <div className="container border border-dark">
        <div className="row p-1">
          <div
            className="col-6 border border-dark p-1"
            style={{ color: "#001d42" }}
          >
            <p style={heading}>Tutorials :</p>
            <p style={number}>0</p>
            <p style={subNumber}>Active : 0</p>
            <p style={subNumber}>InActive : 0</p>
          </div>
          <div
            className="col-6 border border-dark p-1"
            style={{ color: "#001d42" }}
          >
            <p style={heading}>Tests :</p>
            <p style={number}>0</p>
            <p style={subNumber}>Active : 0</p>
            <p style={subNumber}>InActive : 0</p>
          </div>
          <div
            className="col-6 border border-dark p-1"
            style={{ color: "#001d42" }}
          >
            <p style={heading}>Tutorials :</p>
            <p style={number}>0</p>
            <p style={subNumber}>Active : 0</p>
            <p style={subNumber}>InActive : 0</p>
          </div>{" "}
          <div
            className="col-6 border border-dark p-1"
            style={{ color: "#001d42" }}
          >
            <p style={heading}>Tutorials :</p>
            <p style={number}>0</p>
            <p style={subNumber}>Active : 0</p>
            <p style={subNumber}>InActive : 0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
