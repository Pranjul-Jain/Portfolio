import { useState } from 'react'
import PranjulImg from "./assets/images/Pranjul.jpg"
import FirststopImg from "./assets/images/1stop.jpg"
import VerzeoImg from "./assets/images/Verzeo.jpg"
import TeachnookImg from "./assets/images/Teachnook.jpg"
import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="header-box">
          <div className='frame'>
            <div className='frame-one'></div>
            <div className='frame-second'></div>
            <img src={PranjulImg} className="header-img" alt="Pranjul Jain" />
          </div>
          <div className='header-subbox'>
              <h1>Pranjul Jain</h1>
              <h2>Full-Stack Webdevelper</h2>
              <div className="header-sub-subbox">
                <p id='linkedin-box'>
                    <i style={{color:"rgb(0,183,255)"}} class="fa-brands fa-linkedin"></i>
                    <a className='gap' id="linkedinLink" visited={false} target="_blan" href="https://www.linkedin.com/in/pranjul-jain-b97898207?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUtJYysdiTZ%2BnMp%2BJHMoW2A%3D%3D"
                    >https://LinkedIn//Pranjul Jain</a>
                </p>
                <div>
                    <i style={{color:"white"}} class="fa-solid fa-building-columns"></i>
                    <span className='gap' style={{fontWeight:"550"}}>Madhav Institute Of Technnology And Science</span>
                </div>
                <p>
                    <span style={{fontWeight:"600",color:"wheat"}}>Branch</span>
                    <span className='gap'>Internet Of Things</span>
                </p>
                <div className="email">
                    <i class="fa-regular fa-envelope" style={{fontWeight:"600"}}></i>
                    <span id="email" className='gap'>pranjuljainp@gmail.com</span>
                </div>
              </div>
          </div>
        </div>
      </header>
      <section className="section-info">
        <h1>
          About Me
        </h1>
        <p>
        I'm a dedicated individual with a strong passion for coding, driven by a desire to stay at the forefront of new frameworks and libraries. 
        My practical approach to learning prioritizes hands-on experience and project work over theoretical knowledge. My goal is to become a 
        proficient full-stack developer, and I've already gained practical expertise in backend, frontend, and cloud technologies.
        One of my standout strengths is problem-solving; when I encounter challenges, I'm adept at finding solutions by consulting official 
        documentation, exploring GitHub repositories, engaging with the Stack Overflow community, utilizing ChatGPT, and leveraging various 
        online resources.
        </p>
      </section>
      <section className="section-skills">
        <h1>My Skills</h1>
        <ul className="skills-box">
          <div>
            <li className="skills-item intermediate">
              C
              <div class="skill-after"></div>
            </li>
            <li className="skills-item intermediate">
              C++
              <div class="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item advanced">
              Python
              <div class="skill-after"></div>
            </li>
            <li className="skills-item advanced">
              Web Development
              <div class="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item intermediate">
              Django
              <div class="skill-after"></div>
            </li>
            <li className="skills-item beginner">
              Machine Learning
              <div class="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item beginner">
              Deep Learning
              <div class="skill-after"></div>
            </li>
            <li className="skills-item intermediate">
              Datascience
              <div class="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item intermediate">
              MySql
              <div class="skill-after"></div>
            </li>
            <li className="skills-item beginner">
              MongoDb
              <div class="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item beginner">
            Express.js
            <div class="skill-after"></div>
          </li>
            <li className="skills-item advanced">
              React.js
              <div class="skill-after"></div>
            </li>
          </div>
          <div>
            <li className="skills-item advanced">
              Node.js
              <div class="skill-after"></div>
            </li>
          </div>
        </ul>
      </section>
      <section className="section-certificate">
        <h1>Internship Certificate</h1>
        <div className="certificate-frame">
          <div>
            <h2>Web Development</h2>
            <img src={TeachnookImg} alt="Teachnook" />
          </div>  
          <div>
            <h2>Datascience With Python</h2>
            <img src={VerzeoImg} alt="Verzeo" />
          </div>  
          <div>
            <h2>Machine Learning</h2>
            <img src={FirststopImg} alt="first stop" />
          </div>  
        </div>
      </section>
    </>
  )
}

export default App
