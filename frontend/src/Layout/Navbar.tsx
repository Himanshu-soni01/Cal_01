// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   const [userdata, setUserdata] = useState<any>([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     console.log(user);

//     const getEmployeeData = async () => {
//       var response = await axios.get(
//         `http://localhost:8080/employeedata/${user}`
//       );
//       setUserdata(response.data);
//     };
//     getEmployeeData();
//   }, []);

//   return (
//     <>
//       <div className="menu">
//         <ul>
//           <li>
//             <Link
//               style={{ color: "white", textDecoration: "none" }}
//               to="/dashboard"
//             >
//               Dashboard
//             </Link>
//           </li>
//           <li>Timesheet</li>
//           <li>Projects</li>
//           <li>
//             <Link
//               style={{ color: "white", textDecoration: "none" }}
//               to="/dashboard/calendar"
//             >
//               Events
//             </Link>
//           </li>
//           <li>Work From Home</li>
//           <li>Approvals</li>
//           <li>Survey</li>
//           <li>Service Desk</li>
//           <li>Forms</li>
//           <li>Travel</li>

//           <li>Expenses</li>

//           <li>Settings</li>

//           {userdata && userdata.email === "hs@jmangroup.com" ? (
//             <li>
//               <Link
//                 style={{ color: "white", textDecoration: "none" }}
//                 to="/dashboard"
//               >
//                 Add Event
//               </Link>
//             </li>
//           ) : null}

//           <li>Control Panel</li>

//           <li>Resourcing</li>

//           <li>
//             <Link
//               style={{ color: "white", textDecoration: "none" }}
//               to="/dashboard/profile"
//             >
//               Profile
//             </Link>
//           </li>

//           {}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate=useNavigate()
  const [userdata, setUserdata] = useState<any>([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const getEmployeeData = async () => {
      var response = await axios.get(
        `http://localhost:8080/employeedata/${user}`
      );
      setUserdata(response.data);
    };
    getEmployeeData();
  }, []);
 const logout = ()=>{
      localStorage.clear();
      navigate("/")

 }

  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/dashboard"
            >
              Events
            </Link>
          </li>

          
          <li>
            <Link style={{ color: "white", textDecoration: "none" }} to="/dashboard/resourceallocation">
              Resource Allocation
            </Link>
          </li>

          {userdata && userdata.email === "hs@jmangroup.com" ? (
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/dashboard/addevent"
              >
                Add Event
              </Link>
            </li>
          ) : null}

          <li>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/dashboard/profile"
            >
              Profile
            </Link>
          </li>
          <div style={{display:"flex",flexDirection:"row",gap:"50%",cursor:"pointer"}}>

          <li>{userdata.name}</li> &nbsp;
          <li onClick={logout}>Logout</li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
