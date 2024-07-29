import React from "react";
import { Helmet } from "react-helmet";
import HeaderBwlowNav from "../utils/Navbar/HeaderBelowNav";
import { useNavigate } from "react-router-dom";
export default function Tests() {
  const history = useNavigate();
  const [data, setData] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");

  React.useEffect(() => {
    const url = `http://localhost:8080/getalltests`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        filename: "get file paths from here hehe",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);


  const search = (e) =>{
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
    e.preventDefault();
}

  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (searchInput === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.Tables_in_orltests.toLowerCase().includes(searchInput)
    }
})

  const testPage = (e) => {
    history(`/testpage/${e.target.value}`);
  };




  return (
    <div>
      <Helmet>
        <title>Tests</title>
      </Helmet>
      <div className="p-5" style={{ position: "relative", left: "18%" }}>
        <p style={{ fontSize: "20px", color: "#001d42" }}>
          Search for the test here
        </p>
        <form action="#">
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
        </form>
      </div>
      <HeaderBwlowNav page={"Tests"} />
      <div className="p-5">
        {filteredData.length === 0 ? (
          <h5
            style={{ color: "#001d42", fontSize: "27px", margin: "6% 0 0 35%" }}
          >
            No test is available currently&nbsp;!!!
            <br />
            &nbsp;&nbsp; Sorry for the inconvenience
          </h5>
        ) : (
          filteredData.map((e) => {
            return (
              <div
                className="border border-1 rounded  w-75 p-3 container mt-3"
                style={{ backgroundColor: "#F4F7FA" }}
              >
                <div className="row">
                  <div className="col-md-8 h3 text-capitalize">
                    {e.Tables_in_orltests}
                  </div>
                  <div className="col-md-4">
                    <button
                      value={e.Tables_in_orltests}
                      className="btn btn-success float-end"
                      onClick={testPage}
                    >
                      Attempt Test
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
