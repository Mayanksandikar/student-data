import React from 'react'
import "./MBA.css"
const Mba = () => {
    return (
        <div class="container">
        <h2>Program Structure: Master of Business Administration (MBA)</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Semester</th>
              <th scope="col">Subjects</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Semester 1</th>
              <td>
                <ul>
                  <li>Financial Accounting</li>
                  <li>Marketing Management</li>
                  <li>Organizational Behavior</li>
                  <li>Business Communication</li>
                  <li>Managerial Economics</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Semester 2</th>
              <td>
                <ul>
                  <li>Human Resource Management</li>
                  <li>Financial Management</li>
                  <li>Operations Management</li>
                  <li>Strategic Management</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Semester 3</th>
              <td>
                <ul>
                  <li>Business Ethics and Corporate Governance</li>
                  <li>Business Law</li>
                  <li>Entrepreneurship Development</li>
                  <li>Elective 1</li>
                  <li>Elective 2</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Semester 4</th>
              <td>
                <ul>
                  <li>Project Management</li>
                  <li>International Business</li>
                  <li>Elective 3</li>
                  <li>Elective 4</li>
                  <li>Major Project</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default Mba
