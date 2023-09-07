import axios from "axios";
import { useState, useEffect } from "react";
import { Form } from "react-router-dom";

const ResourceAllocation = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const getCustomersData = async () => {
      await axios.get("http://localhost:8081/customers").then((response) => {
        console.log(response.data);
        //  return response.json();
        setCustomers(response.data);
      });
    };

    getCustomersData();
  }, []);

  const [records, setRecords] = useState("");
  console.log(records);

  return (
    <div
      style={{ marginLeft: "250px", marginTop: "-950px", position: "relative" }}
    >
      <h1 style={{ marginLeft: "300px" }}>Customers</h1>
      <h6
        style={{ marginLeft: "12px", position: "absolute", paddingTop: "10px" }}
      >
        Number of customers: {customers.length}
      </h6>
      {customers.length === 0 && (
        <h1 style={{ marginLeft: "290px", color: "red" }}>No customers</h1>
      )}
      <Form
        className="d-flex"
        style={{ marginTop: "10px", marginLeft: "200px" }}
      >
        {/* <Form.Control
          type="search"
          placeholder={"Search for customers"}
          className="searchinput"
          aria-label="Search"
          style={{
            width: "300px",
            marginLeft: "310px",
            backgroundColor: "white",
            alignContent: "left",
            fontWeight: "bold",
          }}
          onChange={(e) => {
            setRecords(e.target.value);
          }}
        /> */}
      </Form>

      <div className="container py-2">
        <table style={{ width: "800px", border: "1px solid black" }}>
          {customers.length > 0 && (
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  fontSize: "20px",
                  backgroundColor: "#009B4D",
                  color: "white",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                First Name
              </th>
              <th
                style={{
                  border: "1px solid black",
                  fontSize: "20px",
                  backgroundColor: "#009B4D",
                  color: "white",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                Last Name
              </th>
              <th
                style={{
                  border: "1px solid black",
                  fontSize: "20px",
                  backgroundColor: "#009B4D",
                  color: "white",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                Email
              </th>
            </tr>
          )}

          {/* {customers
            .filter((res) => {
              return records.toLowerCase() === ""
                ? res
                : res.firstname.toLowerCase().includes(records) ||
                  records.toLowerCase() === ""
                ? res
                : res.lastname.toLowerCase().includes(records);
            })
            .map((res) => (
              <tr key={res.id} style={{ height: "30px", overflow: "scroll" }}>
                <td
                  style={{
                    fontSize: "18px",
                    borderRight: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  {res.firstname}
                </td>
                <td
                  style={{
                    fontSize: "18px",
                    borderRight: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  {res.lastname}
                </td>
                <td
                  style={{
                    fontSize: "18px",
                    borderRight: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  {res.email}
                </td>
              </tr>
            ))} */}
        </table>
      </div>
    </div>
  );
};

export default ResourceAllocation;