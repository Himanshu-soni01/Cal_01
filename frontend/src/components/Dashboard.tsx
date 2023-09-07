import React from "react";
import "../App.css";

const Dashboard = () => {
  return (
    <div>
      <div className="content">
        <h1>Timesheet</h1>

        <div className="contain">
          <h3>Total Hours:8.0</h3>
          <button className="accordion">Allocation Extension </button>

          <div className="panel">
            <table className="table1">
              <tr className="top">
                <th>Project name</th>

                <th>Project type</th>

                <th>Project end date</th>

                <th>Allocation end date</th>

                <th>Allocation Extension</th>
              </tr>

              <tr className="top">
                <td>JMD_12</td>

                <td>CLIENT_TYPE</td>

                <td>12-12-2023</td>

                <td>12-12-2023</td>

                <td>
                  <input type="date" />
                </td>
              </tr>

              <tr>
                <td>JMD_12</td>

                <td>CLIENT_TYPE</td>

                <td>12-12-2023</td>

                <td>12-12-2023</td>

                <td>
                  <input type="date" />
                </td>
              </tr>
            </table>

            <button className="request">Request &#8594;</button>
          </div>
        </div>

        <div className="timesheet">
          <p>Timesheet</p>

          <table className="table2" id="abc">
            <tbody id="tableToModify">
              <tr className="top">
                <th>Project type</th>

                <th>Project name</th>

                <th>Task</th>

                <th>Comment</th>

                <th>MON 14</th>

                <th>TUE 15</th>

                <th>WED 16</th>

                <th>THU 17</th>

                <th>FRI 18</th>

                <th>Total</th>

                <th></th>
              </tr>

              <tr id="rowToClone">
                <td>BAU activity</td>

                <td>
                  <select name="project" id="project">
                    <option value="Project1">Project1</option>

                    <option value="Project2">Project2</option>

                    <option value="Project3">Project3</option>

                    <option value="Project4">Project4</option>
                  </select>
                </td>

                <td>
                  <select name="project" id="project">
                    <option value="Project1">Project1</option>

                    <option value="Project2">Project2</option>

                    <option value="Project3">Project3</option>

                    <option value="Project4">Project4</option>
                  </select>
                </td>

                <td>
                  <input type="string" />
                </td>

                <td>
                  <input type="string" className="date-14" />
                </td>

                <td>
                  <input type="string" className="date-15" />
                </td>

                <td>
                  <input type="string" className="date-16" />
                </td>

                <td>
                  <input type="string" className="date-17" />
                </td>

                <td>
                  <input type="string" className="date-18" />
                </td>

                <td id="0"></td>
              </tr>

              <tr id="row2ToClone">
                <td>JMD_12</td>

                <td>
                  <select name="project" id="project">
                    <option value="Project1">Project1</option>

                    <option value="Project2">Project2</option>

                    <option value="Project3">Project3</option>

                    <option value="Project4">Project4</option>
                  </select>
                </td>

                <td>
                  <select name="project" id="project">
                    <option value="Project1">Project1</option>

                    <option value="Project2">Project2</option>

                    <option value="Project3">Project3</option>

                    <option value="Project4">Project4</option>
                  </select>
                </td>

                <td>
                  <input type="string" />
                </td>

                <td>
                  <input type="string" className="date-14" />
                </td>

                <td>
                  <input type="string" className="date-15" />
                </td>

                <td>
                  <input type="string" className="date-16" />
                </td>

                <td>
                  <input type="string" className="date-17" />
                </td>

                <td>
                  <input type="string" className="date-18" />
                </td>

                <td id="1"></td>
              </tr>

              <tr id="row2ToClone">
                <td>TOTAL</td>

                <td></td>

                <td></td>

                <td></td>

                <td id="date-14"></td>

                <td id="date-15"></td>

                <td id="date-16"></td>

                <td id="date-17"></td>

                <td id="date-18"></td>
              </tr>
            </tbody>
          </table>

          <div className="request-button">
            <button className="save" id="save-button">
              Save
            </button>

            <button id="Submit-button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
