import React from 'react'
import Rating from './Rating'
import StartButton from './StartButton'
import '../styles.css';
import ibm from '../assets/images/ibm.svg'
import facebook from '../assets/images/facebook.svg'
import microsoft from '../assets/images/microsoft.svg'
import google from '../assets/images/google.svg'



const MainContent = () => {
  return (
    <main className='main-content'>
      <div className="left-section">
        <strong><h1>Launch your Data Career in Weeks,<br/> not Years</h1></strong>
        <p>What to expect:</p>
        <ul>
          <li>Short-answer questions & No cover letter</li>
          <li>Takes 4 mins on average</li>
        </ul>
        <StartButton />
        <p className="filled-out">👥 108 people have filled this out</p>
      </div>
      <div className="right-section">
        <Rating />
        <p>Our students <strong>used</strong> to work at</p>
        <div className="logos">
          <img src={google} alt="Google" />
          <img src={ibm} alt="IBM" />
          <img src={facebook} alt="facebook" />
          <img src={microsoft} alt="microsoft" />
        </div>
      </div>
    </main>
  )
}

export default MainContent
