import { useEffect, useState } from "react";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import profile from "../Assets/profile.jpg"
import Banner from "../Assets/Banner.jpg"
// import profilepic from '../'

export default function Profile() {
  const [userdata, setUserdata] = useState<any>([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const getEmployeeData = async () => {
      var response = await axios.get(
        `http://localhost:8080/employeedata1/${user}`
      );
      setUserdata(response.data);
    };
    getEmployeeData();
  }, []);
  console.log("USERDATA",userdata.name);
  

  const navigate = useNavigate();
  function logout() {
    navigate("/");
  }
  return (
    <>
        {
          <div className="user-profile">
      
          <div className="gradient" style={{backgroundImage:`url(${Banner})`}}></div>    
          <div className="profile-image">
              <img src={profile} alt=""/>
              <div className="profile-info">
                 <div className="profile-title" >{userdata.name}</div>
                 <div className="profile-desc">{userdata.designation}</div>
              </div>
          </div>
          
          <div className="user-info">
              <div className='user-info-1' >
                  <p>Name: { userdata.name}</p>
                  <p>Email: {userdata.email}</p>
                  <p>Gender: {userdata.gender}</p>
                           
              </div>

              <div className='user-info-2'>
                  <p>Emp ID: {userdata.empid}</p>
                  <p>Desigation: {userdata.designation}</p>
                  <p>Date Of Joined: 2023-March </p> 
              </div>
          </div>
      </div>}
    </>
  );
}
