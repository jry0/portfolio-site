import React from 'react'

const EducationItem = ({ degree, institution, year }) => (
  <li className="education__item">
    <div className="education__box">
      <h6>{institution}, {year}</h6>
      <p>{degree}</p>
    </div>
  </li>
)

export default EducationItem
