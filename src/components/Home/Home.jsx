import React from 'react'
import "./Home.css"
import { assets } from '../../assets/asset'


function Home() {
  return (
    <div className='Header'>
      <div className='Header-content'>
            <span className='home_subtitle'>Discover your place</span>
            <h2 className='details'>Explore The 
             <br/> Best <b>Beautiful <br/>
             Beaches  </b></h2>
            <button className='but_homes'>Explore</button>



        <div className='Header-links'>
        <i class="fa-brands fa-facebook"></i>
        </div>
        </div>

      <div className='Header-bottom'>
        <div className='home-info'>
          <h5>5 best places<br/> to visit</h5>
          <a>More</a>
        </div>
        <img src={assets.home2} />


      </div>
    </div>
    
  )
}

export default Home
