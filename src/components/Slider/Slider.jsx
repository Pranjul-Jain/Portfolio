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
        const sliderdots = document.querySelector(".slider-dots")
        const nextBtn = document.querySelector("#next-btn");
        const prevBtn = document.querySelector("#prev-btn");
    
        if(certificateFrame){
          itemSize.current = certificateFrame.length;

          sliderdots.innerHTML = ""
          certificateFrame.forEach((item,index)=>{
            item.style.left = `${index*100}%`;

            const spanelement = document.createElement("span");
            spanelement.classList.add("slider-dot");
            spanelement.setAttribute("data-index",index)
            if(currentWindow.current === index){
              spanelement.classList.add("marked")
            }
            spanelement.addEventListener("click",selectMarker)
            sliderdots.appendChild(spanelement);

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
          
          document.querySelector(".slider-dot") && document.querySelectorAll(".slider-dot").forEach((item)=>item.removeEventListener("click",selectMarker))
        }
    
    })

  return (
    <section className="section-certificate">
        <h1>INTERNSHIPS</h1>
        <div className="certificate-frame">
            <Certificates/>
        </div>
        <div className='slider-dots'>
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
    
    !stopButton.checked && clearInterval(windowInterval.current)

    const slides = document.querySelectorAll(".certificate-item")

    currentWindow.current += 1
    if(currentWindow.current>itemSize.current-1){
      currentWindow.current = 0
    }

    updateMarked(currentWindow.current)

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

    updateMarked(currentWindow.current)

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

  function updateMarked(currentSlide){
    document.querySelector(".slider-dot.marked").classList.remove("marked");
    document.querySelectorAll(".slider-dot")[currentSlide].classList.add("marked");
  }

  function selectMarker(e){
    clearInterval(windowInterval.current)
    document.querySelector(".slider-dot.marked").classList.remove("marked");
    document.querySelectorAll(".slider-dot")[parseInt(e.target.getAttribute("data-index"))].classList.add("marked");
    currentWindow.current = parseInt(e.target.getAttribute("data-index"))
    currentWindowRef.current.innerHTML = currentWindow.current + 1
    const slides = document.querySelectorAll(".certificate-item")

    slides.forEach((slide)=>{
      slide.style.transform = `translateX(-${100*(currentWindow.current)}%)`;
    })

    windowInterval.current = setInterval(nextWindow,5000)
  }

}

export default Slider