import React,{useEffect, useState} from 'react'
import {Table} from 'react-bootstrap'
import {AiOutlineDelete } from "react-icons/ai";


export default function Allresults() {

  let id=1;
  const [results, setresults] = useState([])

  useEffect(()=>{
    let url = "http://localhost:8080/getallteresults"
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setresults(data)
    })
  })

  const deleteResult = (e) => {
    const url = `http://localhost:8080/deleteoneresult`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: e.currentTarget.value,
      }),
    });
  };

  return(
    <>
    <div className="bg-light p-2">
        <p className="h3" style={{ marginLeft: "4%", color: "#001d42" }}>
         Results
        </p>
      </div>
      <div className='container mt-4'>
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Test Name</th>
                <th>Test Score</th>
                <th>User email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                results.length!==0?
                results.map(e=>{
                  return(
                    <tr>
                      <td>{id++}</td>
                      <td>{e.testname}</td>
                      <td>{e.score}</td>
                      <td>{e.user_email}</td>
                      <td>
                        <button style={{border:"none", outline:'none', background:"transparent"}} value={e.result_id} onClick={deleteResult}>
                          <AiOutlineDelete size={"20px"} className="ms-4" />
                        </button>
                      </td>
                    </tr>
                  )
                }):
                <p>
                  Results are not available currently check after sometime.
                </p>
              }
              
            </tbody>
          </Table>
      </div>
    </>
  );
}


