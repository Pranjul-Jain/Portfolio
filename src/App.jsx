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
          <img src={PranjulImg} className="header-img" alt="Pranjul Jain" />
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
                    <span className='gap'>Internet Of Things 3<sup>rd</sup> Year</span>
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
          Hello, My name is Pranjul Jain, and I am currently pursuing my Btech from Madhav Institute of Technology and Gwalior (M.P.).
          , I have started my journey through the C and C++ programming languages and practised some questions to hackkerank and leetcode.
          and after developing my logic, I switched to Python, which opened the doors to many opportunities for me, such as machine learning,
          web development and data scienceAfter that, in my 3rd year of college, I got to know about NPTEL, through which I learned Java and data mining.
          and DSA with Python, Recently, I took a course in Tutedude and learned MernStack, but I am still a beginner in it. Now I have taken an interest in
          in devops so that I can learn how to deploy and monitor my web application.
          I have done 100+ question in <strong>Leetcode</strong> and i am a 5 star coder in <strong>Hackkerrank</strong> in c++ and python.
        </p>
      </section>
      <section className="section-skills">
        <h1>My Skills</h1>
        <ul className="skills-box">
          <div>
            <li className="skills-item intermediate">C</li>
            <li className="skills-item intermediate">C++</li>
          </div>
          <div>
            <li className="skills-item advanced">Python</li>
            <li className="skills-item advanced">Web Development</li>
          </div>
          <div>
            <li className="skills-item intermediate">Django</li>
            <li className="skills-item beginner">Machine Learning</li>
          </div>
          <div>
            <li className="skills-item beginner">Deep Learning</li>
            <li className="skills-item intermediate">Datascience</li>
          </div>
          <div>
            <li className="skills-item intermediate">MySql</li>
            <li className="skills-item beginner">MongoDb</li>
          </div>
          <div>
            <li className="skills-item beginner">Express.js</li>
            <li className="skills-item advanced">React.js</li>
          </div>
          <div>
            <li className="skills-item advanced">Node.js</li>
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
