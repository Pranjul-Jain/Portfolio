import React,{ useEffect,useRef } from 'react'
import Certificates from '../Certificates/Certificates'

const Slider = () => {

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
    <section className="section-certificate">
        <h1>INTERNSHIPS</h1>
        <div className="certificate-frame">
            <Certificates/>
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

export default Slider