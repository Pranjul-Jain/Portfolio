import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section className='section-education'>
        <h1>EDUCATION</h1>
        <div className="education-grid">
          <div className="education-box">
            <div className='heading'>
              <h2>MADHAV INSTITUTE OF TECHNOLOGY AND SCIENCE, GWALIOR</h2>
              <span>2020-2024</span>
            </div>
            <div className='marks'>
              <p>Branch: Internet Of Things</p>
              <span>CGPA: 8.59</span>
            </div>
            <div className='back-card'></div>
          </div>
          <div className="education-box">
            <div className='heading'>
              <h2>PRAGATI VIDYA PEETH, GWALIOR</h2>
              <span>2019-2020</span>
            </div>
            <div className='marks'>
              <p>12th CBSE BOARD</p>
              <span>PERCENTAGE: 84.2%</span>
            </div>
            <div className='back-card'></div>
          </div>
          <div className="education-box">
            <div className='heading'>
              <h2>PRAGATI VIDYA PEETH, GWALIOR</h2>
              <span>2018-2019</span>
            </div>
            <div className='marks'>
              <p>10th CBSE BOARD</p>
              <span>PERCENTAGE: 70%</span>
            </div>
            <div className='back-card'></div>
          </div>
        </div>
      </section>
  )
}

export default Education