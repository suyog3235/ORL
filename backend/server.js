const express = require("express");
const App = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config");
const fs = require("fs");
const path = require("path");
const { json } = require("body-parser");

App.use(cors());
App.use(bodyParser.json());

App.get("/", (req, res) => {
  let qu = "SHOW TABLES FROM orldb";
  db.query(qu, (err, result) => {
    if (err) {
      console.log("err while gettting the tables from orldb", err);
    } else {
      if (result.length === 0) {
        res.send("No tables are available currently!");
      } else {
        res.send(result);
      }
    }
  });
});

App.post("/signup", (req, res) => {
  let { userName, userEmail, password } = req.body;
  let query = `SELECT * FROM orldb.user`;
  // let query = `INSERT INTO user(name,email,password,role) VALUES("${userName}","${userEmail}","${password}","admin")`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("error while checking the user database for null value", err);
    } else {
      if (result.length == 0) {
        let query = `INSERT INTO orldb.user(name,email,password,role) VALUES("${userName}","${userEmail}","${password}","admin")`;
        db.query(query, (err, result) => {
          if (err) {
            console.log(
              "error whhile signup as admin when table is empty: ",
              err
            );
          } else {
            res.json(result);
          }
        });
      } else {
        let query = `INSERT INTO orldb.user(name,email,password,role) VALUES("${userName}","${userEmail}","${password}","member")`;
        db.query(query, (err, result) => {
          if (err) {
            console.log(
              "error whhile signup as admin when table is empty: ",
              err
            );
          } else {
            res.json(result);
          }
        });
      }
    }
  });
});
App.post("/login", (req, res) => {
  let { userEmail, password } = req.body;
  let query = `SELECT * FROM orldb.user WHERE email="${userEmail}"AND password="${password}"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("error while login", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/changepassword", (req, res) => {
  let { userEmail, newpassword } = req.body;
  console.log(req.body)
  let query = `UPDATE orldb.user SET password="${newpassword}" WHERE email="${userEmail}"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("error while updating the tutorial: ", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/addtutorial", (req, res) => {
  let { tutorialName, tutorialsUrl, courtesy, ebook, test, active } = req.body;
  let query = `INSERT INTO orldb.tutorial(name,url,courtesy,ebook,test_name,active) VALUES("${tutorialName}","${tutorialsUrl}","${courtesy}","${ebook}","${test}","${active}")`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("Error while adding tutorials-->", err);
    } else res.json(result);
  });
});
App.post("/deletetutorial", (req, res) => {
  let { id } = req.body;
  let query = `DELETE FROM orldb.tutorial WHERE tutorial_id=${id}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err While deleting the tutorial", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/updatetutorial", (req, res) => {
  let { id, tutorialName, tutorialsUrl, courtesy, ebook, test, active } =
    req.body;
  let query = `UPDATE orldb.tutorial SET name = "${tutorialName}", url = "${tutorialsUrl}", courtesy="${courtesy}", ebook="${ebook}",test_name="${test}", active="${active}" WHERE tutorial_id="${id}"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("error while updating the tutorial: ", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/gettutorial", (req, res) => {
  let { id } = req.body;
  let query = `SELECT * FROM orldb.tutorial WHERE tutorial_id=${id}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err while getting the particular tutorial");
    } else {
      res.json(result);
    }
  });
});
App.get("/allturorials", (req, res) => {
  let query = `SELECT * FROM orldb.tutorial`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("Error while adding tutorials-->", err);
    } else res.json(result);
  });
});
App.get("/allturorialsontutorialspage", (req, res) => {
  let query = `SELECT * FROM orldb.tutorial WHERE active="yes"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("Error while adding tutorials-->", err);
    } else res.json(result);
  });
});
App.get("/allusers", (req, res) => {
  let query = `SELECT * FROM orldb.user WHERE role ="member"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err while getting all the members:", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/deleteuser", (req, res) => {
  let { id } = req.body;
  let query = `DELETE FROM orldb.user WHERE user_id=${id}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err While deleting the tutorial", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/getuser", (req, res) => {
  let { id } = req.body;
  let query = `SELECT * FROM orldb.user WHERE user_id=${id}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err While deleting the tutorial", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/updateuser", (req, res) => {
  let { id, role } = req.body;
  let query = `UPDATE orldb.user SET role = "${role}" WHERE user_id="${id}"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("error while updating the tutorial: ", err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
});

App.get("/alladmins", (req, res) => {
  let query = `SELECT * FROM orldb.user WHERE role ="admin"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err while getting all the members:", err);
    } else {
      res.json(result);
    }
  });
});

App.post("/getalltests", (req, res) => {
  let qu = "SHOW TABLES FROM orltests";
  db.query(qu, (err, result) => {
    if (err) {
      console.log("err while gettting the tables from orldb", err);
    } else {
      if (result.length === 0) {
        res.send("No tables are available currently!");
      } else {
        res.send(result);
      }
    }
  });
});

App.post("/gettest", (req, res) => {
  let { filename } = req.body;
  let query = `SELECT * FROM orltests.${filename}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(`err while getting test data from ${filename} table.`, err);
    } else {
      res.json(result);
    }
  });
});

App.post("/deletetest", (req, res) => {
  let { testname } = req.body;
  let query = `DROP TABLE orltests.${testname}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(`err while getting test data from ${testname} table.`, err);
    } else {
      res.json(result);
    }
  });
});

App.post("/edittest", (req, res) => {
  let { testname } = req.body;
  let query = `SELECT * FROM orltests.${testname}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(`err while getting test data from ${testname} table.`, err);
    } else {
      res.json(result);
    }
  });
});

App.post("/addtest", (req, res) => {
  let { testname } = req.body;
  let query = `CREATE TABLE orltests.${testname}(
    test_id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    question varchar(255),
    op1 varchar(255),
    op2 varchar(255),
    op3 varchar(255),
    op4 varchar(255),
    answer varchar(255)
  );`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("error while adding the test---->", err);
    } else {
      res.json(result);
    }
  });
});

App.post("/addquestions", (req, res) => {
  let { tablename, question, op1, op2, op3, op4, answer } = req.body;
  let query = `INSERT INTO orltests.${tablename}(question,op1,op2,op3,op4,answer) VALUES("${question}","${op1}","${op2}","${op3}","${op4}","${answer}")`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(`err while adding questions into test table`, err);
    } else {
      res.json(result);
    }
  });
});

App.post("/delequestion", (req, res) => {
  let { questionid, testname } = req.body;
  let query = `DELETE FROM orltests.${testname} WHERE test_id=${questionid}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(
        `err While deleting the question from ${testname} with id ${questionid}`,
        err
      );
    } else {
      res.json(result);
    }
  });
});

App.post("/getquestiondata", (req, res) => {
  let { id, testname } = req.body;
  let query = `SELECT * FROM orltests.${testname} WHERE test_id=${id}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(
        `err While retriving question data from ${testname} with id ${id}`,
        err
      );
    } else {
      res.json(result);
    }
  });
});
App.post("/updatequestion", (req, res) => {
  let { id, testname, question, op1, op2, op3, op4, answer } = req.body;
  let query = `update orltests.${testname} SET question="${question}", op1="${op1}", op2="${op2}", op3="${op3}", op4="${op4}", answer="${answer}" WHERE test_id="${id}"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(`error while updating question in ${testname} for id ${id}: `, err);
    } else {
      res.json(result);
    }
  });
});
App.post("/verifyemail", (req, res) => {
  let {userEmail}  = req.body;
  let query = `SELECT * FROM orldb.user WHERE email="${userEmail}"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(`error while verifying email address for table use nad email ${userEmail}: `, err);
    } else {
      res.json(result);
    }
  });
});
App.post('/saveresult', (req, res)=>{
  let {testname, userEmail, score} = req.body;
  let query = `INSERT INTO orldb.result(testname, score, user_email) VALUES("${testname}", "${score}", "${userEmail}")`
  db.query(query, (err, result)=>{
    if(err)
    {
      console.log(`err while storing result in database for test ${testname} and email ${userEmail}`)
    }
    else{
      res.json(result)
    }
  })
})

App.post('/updateuserprofile', (req,res)=>{
  let {id, name, email} = req.body;
  let query = `UPDATE orldb.user SET name = "${name}", email = "${email}" WHERE user_id="${id}"`;
  db.query(query, (err, result)=>{
    if (err)
    {
      console.log(`err while updation the user data for user ${name} and email ${email}\n ${err}`)
    }
    else
    {
      res.json(result)
    }
  })
})

App.post("/getresult", (req, res) => {
  let { email } = req.body;
  let query = `SELECT * FROM orldb.result WHERE user_email="${email}"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(`err While fetching the results for ${email}\n ${err}`);
    } else {
      res.json(result);
    }
  });
});

App.get('/getallteresults', (req,res)=>{
  let query = "SELECT * FROM orldb.result";
  db.query(query, (err,result)=>{
    if(err)
    {
      console.log("error while fetching all the results: \n", err)
    }
    else{
      res.json(result)   
    }
  })
})

App.post('/deleteoneresult', (req,res)=>{
  let{id} = req.body;
  let query = `DELETE FROM orldb.result WHERE result_id=${id}`;
  db.query(query, (err,result)=>{
    if(err)
    {
      console.log(`err while deleting result with id ${id}:\n ${err}`)
    }
    else
    {
      res.json(result)
    }
  })
})


// running the back end server on 8080 (front end is on 3000)
App.listen(8080, () => {
  console.log("server started in the backend");
});
