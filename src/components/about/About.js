import React from 'react'
import './about.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
function About() {
  return (
    <div className='about-container'>
      <div className='imagepic'>
      <img src={require('./prasad.jpg')} alt='profile' />
      </div>
      
        <h3>Skills</h3>
        <div className='skill-container'> 
        
           <div>HTML5
           <Progress  percent={98} status='success' /></div>
           <div>css3/scss
           <Progress percent={98} status='success' /></div>
           <div>Typescript/Javascript
           <Progress percent={98} status='success' /></div>
           <div>Stencil Js
           <Progress percent={78} status='success' /></div>
           <div>Vue Js
           <Progress percent={85} status='success' /></div>
           <div>ReactJs
           <Progress percent={90} status='success' /></div>
           <div>Angular 2+
           <Progress percent={90} status='success' /></div>
           <div>React Native
           <Progress percent={65} status='success' /></div>
           <div>Svelte
           <Progress percent={60} status='success' /></div>
</div>
           <h3>Experience</h3>

           <div className='experience-container'>
            <div>
                <h4>Greytip software pvt ltd</h4>
                <p>Greytip Software was founded with the aim of providing relevant and cost-effective
                   software solutions in the HR domain to companies worldwide. Since 2009, they’ve done
                    that with greytHR - India’s 1st ever fully integrated cloud-based HR & Payroll
                     software. It’s powerful automation options and cost-effective nature make greytHR
                      a preferred choice of 9000+ brands around the world, including industry leaders
                       like Chai Point, Volvo, Teamlease, and Hexaware.</p>
                       <label>Role:</label> Senior Software Engineer &nbsp;&nbsp;&nbsp;
                       <label>Location:</label> Banglore
            </div>
           </div>
           <div className='experience-container2'>
            <div>
                <h4>Bridgelabz solution pvt ltd</h4>
                <p>Bridgelab are a "Maker" lab where fresh engineering talent is made industry-ready
                   by 100% experiential learning. the engineers are skilled in technology by working
                    on problem statements and eventually made industry-ready. there approach is unique 
                    and they are focused on solving employability in the engineering domain.

</p>
                       <label>Role:</label> Product Engineer
                       <label>Location:</label> Mumbai
            </div>
           </div>
           <div className='media-contact'>
           <a href="https://github.com/CodeByPrasad"
        className="github-social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://twitter.com/?lang=en-in" className="twitter-social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/"
        className="instagram-social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com"
        className="facebook-social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      
     
             
            </div>
           </div>
        
  
    
  )
}

export default About