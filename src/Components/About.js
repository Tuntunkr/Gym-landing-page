import React from 'react'
import aboutimage from '../images/about.png'

function About() {
    return (
        <div id="about">
        <div className="about-image">
        <img src={aboutimage} alt=""/>
        

        </div>
        <div className="about-text">
        <h1>
            LEARN MORE ABOUT US
        </h1>
        <p>
        Small Group Training lead by Qualified Personal Trainer Focus on your Health & Fitness now. Nutritional Help, Weight Loss, Tone up your Body, hit problem area (belly, arms, legs)
        </p>
        <button>MORE READ</button>

        </div>
            
        </div>
    )
}

export default About
 