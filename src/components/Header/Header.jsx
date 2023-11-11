import React from 'react'
import "./Header.css"
import PranjulImg from "../../assets/images/Pranjul.jpg"

const Header = () => {
  return (
    <header>
        <div className="header-box">
          <div className='frame'>
            <div className='frame-one'></div>
            <div className='frame-second'></div>
            <img src={PranjulImg} className="header-img" alt="Pranjul Jain" />
          </div>
          <div className='header-subbox'>
              <h1>Pranjul Jain</h1>
              <div className="header-sub-subbox">
                <p id='linkedin-box'>
                    <i style={{color:"rgb(0,183,255)"}} class="fa-brands fa-linkedin"></i>
                    <a className='gap' id="linkedinLink" visited={false} target="_blan" href="https://www.linkedin.com/in/pranjul-jain-b97898207?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUtJYysdiTZ%2BnMp%2BJHMoW2A%3D%3D">https://LinkedIn//Pranjul Jain</a>
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
                <div className="phone-number">
                    <i class="fa-regular fa-phone" style={{fontWeight:"600"}}></i>
                    <span id="phone" className='gap'>8319961139</span>
                </div>
                <div className="github-box">
                    <i class="fa-brands fa-github" style={{fontWeight:"600"}}></i>
                    <a id="github" href="https://github.com/Pranjul-Jain" target='_blank' className='gap'>Github</a>
                </div>
              </div>
          </div>
        </div>
      </header>
  )
}

export default Header