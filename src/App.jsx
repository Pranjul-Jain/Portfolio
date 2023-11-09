import { useState,useEffect,useRef } from 'react'
import FirststopImg from "./assets/images/1stop.jpg"
import VerzeoImg from "./assets/images/Verzeo.jpg"
import TeachnookImg from "./assets/images/Teachnook.jpg"
import Header from './components/Header/Header'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import BaoiamImg from "./assets/images/Baoiam.jpg"
import './App.css'

function App() {

  const currentWindow = useRef(0);
  const itemSize = useRef(0);
  const windowInterval = useRef();
  const currentWindowRef = useRef(0);
  const itemSizeRef = useRef(0);

  useEffect(()=>{
    const certificateFrame = document.querySelectorAll(".certificate-item");
    const nextBtn = document.querySelector("#next-btn");
    const prevBtn = document.querySelector("#prev-btn");

    if(certificateFrame){
      itemSize.current = certificateFrame.length;
      certificateFrame.forEach((item,index)=>{
        item.style.left = `${index*100}%`;
      });
      currentWindowRef.current.innerHTML = 1
      itemSizeRef.current.innerHTML = itemSize.current
    }

    if(nextBtn && prevBtn){
      nextBtn.addEventListener("click",nextWindow)
      prevBtn.addEventListener("click",prevWindow)
      windowInterval.current = setInterval(nextWindow,5000);
    }

    return ()=>{
      nextBtn && nextBtn.removeEventListener("click",nextWindow)
      prevBtn && prevBtn.removeEventListener("click",prevWindow)
      certificateFrame && certificateFrame.forEach((item,index)=>{
        item.style.transform = `translateX(0)`;
      })
      currentWindow.current = 0
      itemSize.current = 0
      clearInterval(windowInterval.current)
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
      <section className="section-certificate">
        <h1>Internship Certificate</h1>
        <div className="certificate-frame">
            <div className="certificate-item">
              <img src={FirststopImg} alt="1stop" />
              <div className="certificate-info">
                <h2>MACHINE LEARNING</h2>
                <hr className='certificate-hr' />
                <ul className='certificate-info-subbox'>
                  <li>This was a TRAINING + INTERNSHIP program in this I have learned <strong>PYTHON, MACHINE LEARNING ALGORITHMS and BASIC DEEP LEARNING</strong></li>
                  <li>I got to work on three <strong>MINOR PROJECTS</strong> such as <strong>IRIS CLASSIFICATION, GMAIL SPAM MAIL DETECTION.</strong></li>
                  <li>I embarked on a <strong>MAJOR PROJECT</strong> envolving <strong>CAT VS DOG CLASSIFICATION</strong> using <strong>CONVOLUTIONAL NEURAL NETWORKS</strong></li>
                </ul>
              </div>
            </div>
            <div className="certificate-item">
              <img src={VerzeoImg} alt="verzeo" />
              <div className="certificate-info">
                <h2>DATASCIENCE WITH PYTHON</h2>
                <hr className='certificate-hr' />
                <div className='certificate-info-subbox small-font'>
                  <li>This was a TRAINING + INTERNSHIP program in this I have learned <strong>TABLEAU(DATA VISUALIZATION TOOL), DATASCIENCE LIBRARIES(PANDAS AND NUMPY)</strong></li>
                  <li>I embarked on a <strong>MINOR PROJECT</strong> involving <strong>CAR SALES PREDICTION</strong> utilizing the fbprophet library for time series forecasting. Initially, I have preprocessed the data and than i have modelled and visualize the data. Subsequently, I employed the Finally, I deployed the application using Streamlit.</li>
                  <li>I participated in a <strong>MAJOR PROJECT</strong> centered on visualizing <strong>Greenland destination data using Tableau(<a href="https://public.tableau.com/app/profile/pranjul2252/viz/GreenDestinationsMajorProject/Dashboard" target="_blank">Tableau Project Link</a>)</strong>. This collaborative effort involved a team of three individuals working together to create an informative dashboard. Our objective was to transform the raw data into insightful visualizations that effectively communicated key trends and patterns related to Greenland tourism.</li>
                </div>
              </div>
            </div>
            <div className="certificate-item">
              <img src={BaoiamImg} alt="Baoiam" />
              <div className="certificate-info">
                <h2>WEB DEVELOPMENT</h2>
                <hr className='certificate-hr' />
                <ul className='certificate-info-subbox'>
                  <li>Enhanced the responsiveness of three web pages to ensure optimal user experience across various devices</li>
                  <li>Actively participated in group meetings to coordinate tasks and responsibilities among interns</li>
                  <li>Played a pivotal role in the frontend development of the website</li>
                  <li>Successfully deployed the BAOIAM website on Amazon Cloud, ensuring its accessibility to users worldwide</li>
                </ul>
              </div>
            </div>   
            <div className="certificate-item">
              <img src={TeachnookImg} alt="Teachnook" />
              <div className="certificate-info">
                <h2>WEB DEVELOPMENT</h2>
                <hr className='certificate-hr' />
                <ul className='certificate-info-subbox'>
                  <li>This was a TRAINING + INTERNSHIP program in this I have learned <strong>HTML, CSS and JAVASCRIPT</strong> and than at last i got to work on two MINOR PROJECTS which is a <strong>TRAVELLING WEBSITE</strong> and a <strong>WEATHER WEBSITE</strong></li>
                </ul>
              </div>
            </div>   
        </div>
        <div className="certificate-buttons">
          <button id={"prev-btn"}>{"<"}</button>
          <div style={{display:"grid",justifyContent:"center",alignItems:"center"}}>
            <div><span ref={currentWindowRef}>1</span>/<span ref={itemSizeRef}>1</span></div>
            <input type="checkbox" name="stopstate" id={"stopstate"} onClick={toggleWindow} />
          </div>
          <button id={"next-btn"}>{">"}</button>
        </div>
      </section>
    </>
  )

  function nextWindow(){
    const stopButton = document.querySelector("#stopstate")
    console.log(stopButton.checked)

    
    !stopButton.checked && clearInterval(windowInterval.current)

    const slides = document.querySelectorAll(".certificate-item")

    currentWindow.current += 1
    if(currentWindow.current>itemSize.current-1){
      currentWindow.current = 0
    }

    currentWindowRef.current.innerHTML = currentWindow.current + 1

    slides.forEach((slide)=>{
      if(currentWindow.current===0 && !slide.classList.contains("transition-zero")){
        slide.classList.add("transition-zero")
      }
      else if(currentWindow.current!==0 && slide.classList.contains("transition-zero")){
        slide.classList.remove("transition-zero")
      }

      slide.style.transform = `translateX(-${100*(currentWindow.current)}%)`;
    })

    if(!stopButton.checked) windowInterval.current = setInterval(nextWindow,5000)
  }

  function prevWindow(){
    const stopButton = document.querySelector("#stopstate")

    !stopButton.checked && clearInterval(windowInterval.current)
    const slides = document.querySelectorAll(".certificate-item")
    
    currentWindow.current -= 1

    if(currentWindow.current<0){
      currentWindow.current = itemSize.current-1
    }

    currentWindowRef.current.innerHTML = currentWindow.current + 1

    slides.forEach((slide)=>{
      if(currentWindow.current===itemSize.current-1 && !slide.classList.contains("transition-zero")){
        slide.classList.add("transition-zero")
      }
      else if(currentWindow.current!==itemSize.current-1 && slide.classList.contains("transition-zero")){
        slide.classList.remove("transition-zero")
      }
      
      slide.style.transform = `translateX(-${100*(currentWindow.current)}%)`;
          
    })
    if(!stopButton.checked) windowInterval.current = setInterval(nextWindow,5000)
  }

  function toggleWindow(e){

    if(e.target.checked){
      clearInterval(windowInterval.current)
    }else{
      windowInterval.current = setInterval(nextWindow,5000)
    }
  }

}

export default App
