import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <section className="section-skills">
        <h1>My Skills</h1>
        <ul className="skills-box">
          <div>
            <li className="skills-item intermediate">
              C
              <div className="skill-after"></div>
            </li>
            <li className="skills-item intermediate">
              C++
              <div className="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item advanced">
              Python
              <div className="skill-after"></div>
            </li>
            <li className="skills-item advanced">
              Web Development
              <div className="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item intermediate">
              Django
              <div className="skill-after"></div>
            </li>
            <li className="skills-item beginner">
              Machine Learning
              <div className="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item beginner">
              Deep Learning
              <div className="skill-after"></div>
            </li>
            <li className="skills-item intermediate">
              Datascience
              <div className="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item intermediate">
              MySql
              <div className="skill-after"></div>
            </li>
            <li className="skills-item beginner">
              MongoDb
              <div className="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item beginner">
            Express.js
            <div className="skill-after"></div>
          </li>
            <li className="skills-item advanced">
              React.js
              <div className="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item advanced">
              Node.js
              <div className="skill-after"></div>
            </li>
          </div>
        </ul>
      </section>
  )
}

export default Skills