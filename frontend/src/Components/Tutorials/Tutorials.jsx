import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import HeaderBwlowNav from "../utils/Navbar/HeaderBelowNav";
export default function Tutorials() {

  let [tutorials,setTutorials]=React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");


  React.useEffect(() => {
    fetch("http://localhost:8080/allturorialsontutorialspage")
      .then((res) => res.json())
      .then((data) => {
       setTutorials(data);
      });
  });
  const history = useNavigate();
  const goToTutorial = (e) => {
    let id = e.currentTarget.value;
    id && history(`/tutorial/${id}`);
  };

  const search = (e) =>{
    setSearchInput(e.target.value.toLowerCase())
    e.preventDefault()
  }

  const filteredData = tutorials.filter((el) => {
    //if no input the return the original
    console.info(el)
    if (searchInput === "") {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.name.toLowerCase().includes(searchInput)
    }
})

  return (
    <div>
      <Helmet>
        <title>Tutorials</title>
      </Helmet>
      <div className="p-5" style={{ position: "relative", left: "18%" }}>
        <p style={{ fontSize: "20px", color: "#001d42" }}>
          Search for the tutorial here
        </p>
        
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" onChange={search}/>
            </div>
            <div className="col">
              <button type="submit" className="btn search">
                Search
              </button>
            </div>
          </div>
        
      </div>
      <HeaderBwlowNav page={"Tutorials"} />
      {/* main section for all the tutorials */}
      {
        filteredData.length===0?
        <h5 style={{color:"#001d42",fontSize:"27px",margin:"6% 0 0 35%"}}>No tutorial is available currently!!!<br/>&nbsp;&nbsp;&nbsp; Sorry for the inconvenience</h5>
        :
        <div className="mt-5">
        <div
          className="row gap-4 p-5"
          style={{ position: "relative", left: "10%" }}
        >
          {filteredData.map((e) => {
            return (
              <div
                className="col-md-3 border rounded border-1 border-dark p-3"
                style={{ textAlign: "center", backgroundColor: "#F4F7FA" }}
              >
                <div style={{ padding: "5%" }} className="h1 text-capitalize">
                  {e.name}
                </div>
                <button className="btn search" onClick={goToTutorial} value={e.tutorial_id}>
                  Watch Tutorial
                </button>
              </div>
            );
          })}
        </div>
      </div>
      }
     
    </div>
  );
}

/* <div className="tutorialsContainer">
          <button
            style={{ textAlign: "center" }}
            className="border rounded border-1"
          >
            Python
          </button>
          </div> */
