import React from 'react'
import EducationItem from './EducationItem'
import { education } from '../../portfolio'
import './Education.css'

const Education = () => (
  <section id="education" className="education">
    <h2 className="section__title">Education</h2>
    <ul className="education__list">
      {education.map(item => (
          <EducationItem
            key={`${item.degree}-${item.institution}-${item.year}`}
            degree={item.degree}
            institution={item.institution}
            year={item.year}
          />
      ))}
    </ul>
  </section>
)

export default Education
