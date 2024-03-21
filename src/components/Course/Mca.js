import React from 'react'
import './Mca.css'
const Mca = () => {
    return (
        <div class="container">
        <h2>Program Structure: Master of Computer Applications (MCA)</h2>
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
                  <li>Graph Theory and Combinatorics</li>
                  <li>Advanced Database Management Systems</li>
                  <li>Advanced Software Engineering Principles</li>
                  <li>Professional Communication</li>
                  <li>Core Java</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Semester 2</th>
              <td>
                <ul>
                  <li>Network Security and Cryptography</li>
                  <li>Cognitive Analytics & Social skills for professional</li>
                  <li>Data Structures and Algorithm Design</li>
                  <li>Research Methodology</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Semester 3</th>
              <td>
                <ul>
                  <li>Cloud Infrastructure and Services</li>
                  <li>Quantitative Aptitude</li>
                  <li>Professional Ethics</li>
                  <li>Seminar (Evaluation)</li>
                  <li>Unix/Linux Programming</li>
                  <li>Statistics Using R Programming</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Semester 4</th>
              <td>
                <ul>
                  <li>Major Project</li>
             
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default Mca
