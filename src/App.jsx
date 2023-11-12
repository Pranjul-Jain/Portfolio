import React,{ useEffect,useRef } from 'react'
import Header from './components/Header/Header'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Slider from './components/Slider/Slider'
import DataMiningImg from "./assets/images/Data Mining.jpeg"
import JavaImg from "./assets/images/Programming In Java.jpeg"
import PythonImg from "./assets/images/Programming, Data Structures And Algorithms Using Python.jpeg"
import './App.css'

function App() {
  
  const currentWindow = useRef(0)
  const itemSize = useRef(0)
  const windowInterval = useRef()

  useEffect(()=>{
    const certificates = document.querySelectorAll(".nptel-certificate")
    itemSize.current = certificates.length

    if(certificates){
      windowInterval.current = setInterval(move,6000);
    }

    return ()=>{
      clearInterval(windowInterval.current)
      itemSize.current = 0;
      currentWindow.current = 0
    }
    
  })

  return (
    <>
      <Header/>
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
      <Education/>
      <Skills/>
      <Slider/>
      <section className="section-projects">
        <h1>PROJECTS</h1>
        <div className="projects-grid">
            <div className="projects-card">
                <h2>
                <i className="fa-brands fa-whatsapp"></i> WHATSAPP CLONE
                </h2>
                <ul className="projects-list">
                  <li><strong>Technology Used -: Django, React.js, Mongo DB, Nginx, Docker, and Aws Cloud.</strong></li>
                  <li>I am the sole creator of this comprehensive Full Stack application similar to WhatsApp, with a user interface designed to resemble WhatsApp.</li>
                  <li>For <strong>real-time chat messages, Django Channels library is utilized</strong>, employing the WebSocket protocol for sending and receiving messages in real time. Session management is implemented using HTTP-only cookies to keep users logged in until they manually log out.</li>
                  <li>Nginx serves as a reverse proxy, handling React.js static files, and SSL certificate configuration is done in the NGINX conf file. SSL '.PEM' files are generated using CERTBOT. The deployment involves creating multiple Docker files and a Docker-Compose.yaml file, with the final deployment on an AWS Cloud EC2 instance.</li>
                  <li>GitHub link : <a href="https://github.com/Pranjul-Jain/whatsapp-clone" self="_blank">Github.whatsappclone.com</a></li>
                </ul>
            </div>
            <div className="projects-card">
                <h2>
                <i class="fa-solid fa-hand"></i> HAND SIGN CLASSIFICATION USING CNN AND OPENCV
                </h2>
                <ul className="projects-list">
                  <li><strong>Dataset Used -: ASL Alphabet Dataset from kaggle.</strong></li>
                  <li> Firstly, I preprocessed my images to reduce the dataset size. The dataset is divided into a train dataset and a test dataset. The train dataset is further split into training and validation datasets during the neural network model training.</li>
                  <li>During preprocessing, I converted the images to grayscale and applied a blur to minimize noise. Subsequently, I computed the gradient of the image in the x and y directions using the Sobel function in OpenCV to capture edges. I then converted both images to absolute scale to eliminate negative values. Finally, I added the weighted average of both images and stored the result in a file.</li>
                  <li>In the modeling phase, I utilized a train data generator to generate additional images from the train dataset and test dataset, promoting better generalization of my model. Following this, I created and trained my neural network model.</li>
                  <li><a self="_blank" href="https://colab.research.google.com/drive/1HMMdRmyyoJQJXZuGgrutgZ7zhMMkUntr#scrollTo=um5PBgGNP8jR">Preprocessed Python Notebook LINK</a> || <a href="https://colab.research.google.com/drive/181SiSOaw2VbW9_BQWgC5InMtJFxBWB8S#scrollTo=My9ySQqG4RTK" self="_blank">Modeling Python Notebook LINK</a></li>
                </ul>
            </div>
            <div className="projects-card">
                <h2>
                  <i class="fa-solid fa-lock"></i> IOT DIGITAL LOCKER
                </h2>
                <ul className="projects-list">
                    <li>
                        This project involves the creation of a locker system. Initially, the locker is secured, and upon providing power to the Arduino, the user can unlock it by entering a password through the keypad or by presenting a specific frequency ID card to the RFID sensor.
                    </li>
                    <li>
                        If any button on the keypad is pressed, a sound is produced through the piezoelectric sensor. If the entered password is correct, a red LED will illuminate, and the buzzer will emit a distinct opening sound. Conversely, if the password is incorrect, the buzzer will produce a different sound.
                    </li>
                    <li>
                        The keypad's operation relies on completing connections in rows and columns. Through the keypad library, character mapping is defined, associating each button with a specific column. When an RFID card is placed in front of the RFID sensor, the sensor transmits and receives frequencies or IDs from the card. The piezoelectric sensor then generates corresponding opening and alert sounds, similar to the keypad.
                    </li>
                    <li>
                        The mechanism for unlocking involves the rotation of a servo motor by 90 degrees, thereby unlocking the gate. The reverse process occurs when locking the system.
                    </li>
                    <li><a self="_blank" href="https://docs.google.com/document/d/1fwGbPots0Qn61id8d1BhlaICZBlqYB1m/edit?usp=sharing&ouid=100677663551990200098&rtpof=true&sd=true">IOT LOCKER LINK</a></li>
                </ul>
            </div>
        </div>
      </section>
      <section className='section-certificate'>
        <h1>NPTEL CERTIFICATES</h1>
        <div className="nptel-certificates">
          <div className="certificate-box">
            <img src={PythonImg} alt="python certificate" className="nptel-certificate front-certificate" />
            <img src={JavaImg} alt="java certificate" className="nptel-certificate back-certificate" />
            <img src={DataMiningImg} alt="datamining certificate" className="nptel-certificate back-certificate" />
          </div>
        </div>
      </section>
      <section className="section-footer">
          <div className="footer-card">
            <h2>Achievements</h2>
            <ul>
               <li><a href="https://leetcode.com/Pranjul_Jain/">LeetCode</a>: Solved 131 questions, Contest rating 1505</li>
               <li><a href="https://auth.geeksforgeeks.org/user/pranjuljainp">GeeksForGeeks</a>: Solved 109 problems</li>
               <li><a href="https://www.hackerrank.com/profile/pranjuljainp">HackerRank</a>: 5-star coder in Python and C++</li>
            </ul>
          </div>
          <div className="footer-card">
            <h2>Tools Used</h2>
            <ul>
              <li><i class="fa-solid fa-code"></i> Vscode IDE</li>
              <li><i class="fa-solid fa-code"></i> Pycharm IDE</li>
              <li><i class="fa-solid fa-code"></i> Google Colaboratory</li>
              <li><i class="fa-solid fa-code"></i> Arduino IDE</li>
              <li><i class="fa-solid fa-microchip"></i> Arduino Tinkercad</li>
              <li><i class="fa-solid fa-file-excel"></i> Microsoft Excel</li>
            </ul>
          </div>
      </section>
    </>
  )

  function move(){
    const certificates = document.querySelectorAll(".nptel-certificate")

    currentWindow.current += 1;

    if(currentWindow.current >= itemSize.current){
      currentWindow.current = 0;
    }

    certificates.forEach((item,index)=>{
      if(index===currentWindow.current){
        if(!item.classList.contains("front-certificate")){
          item.classList.add("front-certificate");
          item.classList.remove("back-certificate");
        }
      }else if(item.classList.contains("front-certificate")){
        item.classList.remove("front-certificate");
        item.classList.add("back-certificate");
      }
    })
  }
}

export default App
