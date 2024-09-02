import React from 'react'
import { assets } from '../../assets/asset'
import "./Experince.css"

function Experince() {
  return (
    <div className='experince'>

        <h1 className='title'>With Our Experience <br />
        We Will Serve You</h1>

       <div className='main-content'>
        <div className='content1'>
            <h2>20</h2>
            <span>Year<br />Experince</span>
        </div>
        <div className='content2'>
            <h2>75</h2>
            <span>Completed<br /> Tour</span>
        </div>

        <div className='content3'>
            <h2>650+</h2>
            <span>Tourist <br />Destination</span>
        </div>

       </div>
       <img src={assets.experience1} className='image1' />
        
        <img src={assets.experience2} className='image2' />


      
    </div>
  )
}

export default Experince
