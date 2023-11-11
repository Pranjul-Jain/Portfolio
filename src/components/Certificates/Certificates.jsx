import React from 'react'
import BaoiamImg from "../../assets/images/Baoiam.jpg"
import TutedudeImg from "../../assets/images/Tutedude.png"
import FirststopImg from "../../assets/images/1stop.jpg"
import VerzeoImg from "../../assets/images/Verzeo.jpg"
import TeachnookImg from "../../assets/images/Teachnook.jpg"

const Certificates = () => {
  return (
    <>
        <div className="certificate-item">
            <div className="certificate-img" alt="Tutedude">
            <img src={TutedudeImg} />
            </div>
            <div className="certificate-info">
            <div className="certificate-heading">
                <h2>MENTOR</h2>
                <span>CURRENTLY WORKING</span>
            </div>
            <hr className='certificate-hr' />
            <ul className='certificate-info-subbox'>
                <li>This internship has been instrumental in enhancing my problem-solving skills and fostering continuous learning.</li>
                <li>I proficiently address technical queries spanning Python, MERN stack, data science, C++, DSA, and DevOps.</li>
                <li>Whenever I encounter challenges, I leverage Tutedude courses to swiftly overcome obstacles and advance in problem-solving.</li>
            </ul>
            </div>
        </div>
        <div className="certificate-item">
            <img src={FirststopImg} alt="1stop" />
            <div className="certificate-info">
            <div className="certificate-heading">
                <h2>MACHINE LEARNING</h2>
                <span>SEP/2021 - NOV/2021</span>
            </div>
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
            <div className="certificate-heading">
                <h2>DATASCIENCE WITH PYTHON</h2>
                <span>NOV/2021 - JAN/2022</span>
            </div>
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
            <div className="certificate-heading">
                <h2>WEB DEVELOPMENT</h2>
                <span>MAY/2023 - JUNE/2023</span>
            </div>
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
            <div className="certificate-heading">
                <h2>WEB DEVELOPMENT</h2>
                <span>MARCH/2022 - APR/2022</span>
            </div>
            <hr className='certificate-hr' />
            <ul className='certificate-info-subbox'>
                <li>This was a TRAINING + INTERNSHIP program in this I have learned <strong>HTML, CSS and JAVASCRIPT</strong> and than at last I got to work on two MINOR PROJECTS which is a <strong>TRAVELLING WEBSITE</strong> and a <strong>WEATHER WEBSITE</strong></li>
            </ul>
            </div>
        </div>   
    </>
  )
}

export default Certificates