const bodyParser = require("body-parser");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const mssql = require("mssql");

const config = {
  user: "soni-232",
  password: "Hims@2010",
  server: "hs01server.database.windows.net",
  database: "soni-232",
};

const pool = new mssql.ConnectionPool(config);

pool
  .connect()
  .then(() => console.log("Connected to SQL Server!"))
  .catch((err) => {
    console.error("Error connecting to sql");
  });

class userDetails {
  async userDatainsert(data) {
    try {
      try {
        await pool.connect();
        var inserData = `INSERT INTO users (Firstname,Lastname,Email,DOB,Password) values('${data.firstname}','${data.lastname}','${data.email}','${data.dob}','${data.password}')`;
        await pool.request().query(inserData);
        // console.log("Data inserted");
        return true;
      } catch (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async checkData(checkUserData) {
    try {
      await pool.connect();
      var checkQuery = `select * from users where email = '${checkUserData.email}'`;
      var user_data = await pool.request().query(checkQuery);
      const password = user_data.recordset;
      if (password.length > 0) {
        console.log("HERE", password);
        console.log(checkUserData.password);
        console.log(checkUserData);
        if (checkUserData.password === password[0].password) {
          return true;
        } else {
          return false;
        }
      } else {
        return "Invalid! User";
      }

      // Catching occuring error
    } catch (error) {
      throw error;
    }
  }
}

const obj = new userDetails();

app.get(`/eventdata/:selectedCategory`, async (req, res) => {
  const selected = req.params.selectedCategory;
  if (selected === "All") {
    try {
      await pool.connect();
      var q =
        "SELECT eventtype,title,FORMAT (STARTDATE, 'yyyy-MM-dd') as startdate,FORMAT (ENDDATE, 'yyyy-MM-dd') as enddate,CONVERT(TIME,STARTTIME) as starttime,CONVERT (TIME, ENDTIME) as endtime,otherdetails  from calendarevents";
      var user_data = await pool.request().query(q);
      const pwd = user_data.recordset;
      return res.json(pwd);
      // Catching occuring error
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await pool.connect();
      var q = `SELECT eventtype,title,FORMAT (STARTDATE, 'yyyy-MM-dd') as startdate,FORMAT (ENDDATE, 'yyyy-MM-dd') as enddate,CONVERT(TIME,STARTTIME) as starttime,CONVERT (TIME, ENDTIME) as endtime,otherdetails  from calendarevents where eventtype='${selected}'`;
      var user_data = await pool.request().query(q);
      const pwd = user_data.recordset;
      return res.json(pwd);
      // Catching occuring error
    } catch (error) {
      throw error;
    }
  }
});

// Signup route which inserts the user signup details into databse
app.post("/signup", async (req, res) => {
  const { firstname, lastname, email,dob, password} = req.body;
  try {
    await pool.connect();
    var insertQuery = `INSERT INTO users (fname, lname, email,dob,  password) values('${firstname}','${lastname}','${email}','${dob}',''${password}')`;
    var response = pool.request().query(insertQuery);
    return res
      .status(200)
      .json({ success: true, message: "User Registered Successfully!" });
  } catch (error) {
    // Catching occuring error
    res.status(500).json({ error: "An error occurred while signing up" });
  }
});

app.post("/login", async (req, res) => {
  const inputData = req.body;
  try {
    const checkUserData = await obj.checkData(inputData);
    if (checkUserData === "Invalid! User") {
      return res.json({ success: false, message: "Invalid! Credentials" });
    }
    if (checkUserData) {
      return res
        .status(200)
        .json({ success: true, message: "Login Successfully" });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Wrong Password" });
    }
    // Catching occuring error
  } catch (error) {
    throw error;
  }
});

app.get(`/employeedata/:user`, async (req, res) => {
  const data = req.params.user;
  try {
    await pool.connect();
    var q = `SELECT * FROM users WHERE email='${data}'`;
    var user_data = await pool.request().query(q);
    const userData = user_data.recordset[0];
    return res.json(userData);

    // Catching occuring error
  } catch (error) {
    console.log(error);
  }
});
app.get(`/employeedata1/:user`, async (req, res) => {
  const data = req.params.user;
  try {
    await pool.connect();
    var q = `SELECT * FROM users WHERE email='${data}'`;
    var user_data = await pool.request().query(q);
    const userData = user_data.recordset[0];
    return res.json(userData);

    // Catching occuring error
  } catch (error) {
    throw error;
  }
});

app.get("/profile/:empEmail", (req, res) => {
  const empEmail = req.params.empEmail;
  let results = db.query(`SELECT * FROM users WHERE email = '${empEmail}'`)(
    error,
    results
  );
  {
    if (error) {
      // Handle the error
      return res.status(500).json({ error: "Database error" });
    }
    return res.send({ results });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port no. ${PORT}`);
});