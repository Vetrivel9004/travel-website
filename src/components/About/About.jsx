import React from 'react'
import "./About.css"
import { assets } from '../../assets/asset'

function About() {
  return (
    <div className='about-main'>
    <div className='about-info'>
        <h2>
        More Information <br/>
        About The Best Beaches
        </h2>
        <p>
        You can find the most beautiful and pleasant
        places at the best prices with special discounts, you choose the place we will guide you all the way to wait, get your place now.
        </p>
        <button className='buttons'>Reserve a place</button>
        <div className='imag-mover'>
        <img src= {assets.about1} className='img1'  />
        <img src= {assets.about2} className='img2' />
     </div>
    </div>
     <div className='about-img'>
        


     </div>
   
 </div>
  )
}

export default About


