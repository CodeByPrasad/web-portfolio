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
           <Progress  percent={90} status='success' /></div>
           <div>css3/scss
           <Progress percent={90} status='success' /></div>
           <div>Javascript
           <Progress percent={75} status='success' /></div>
          
           <div>Next Js
           <Progress percent={70} status='success' /></div>
           <div>ReactJs
           <Progress percent={85} status='success' /></div>
           
           <div>React Native
           <Progress percent={65} status='success' /></div>
          
</div>
           <h3>Experience</h3>

           <div className='experience-container'>
            <div>
                <h4>T.K. Online services pvt ltd</h4>
                <p>T.K. Online Services Pvt Ltd is a dynamic and innovative technology company dedicated to providing cutting-edge solutions in the digital landscape. Established with a vision to revolutionize the online services industry.
                   At T.K. Online Services Pvt Ltd, developing encompassing web development, mobile application development, e-commerce solutions, digital marketing,etc.</p>
                       <label>Role:</label> Associate Software Engineer &nbsp;&nbsp;&nbsp;
                       <label>Location:</label> Pune
            </div>
           </div>
           <div className='experience-container2'>
            <div>
                <h4>DUTS Dream unicorn tech Solution</h4>
                <p>As a software development intern at DUTS, you will have the opportunity to work alongside experienced professionals and contribute to meaningful projects that make a difference. Throughout the internship program, you will gain valuable
                   insights into the software development lifecycle, enhance your technical skills, and collaborate with cross-functional teams to solve complex challenges.
                   Participate in the design, development, and testing of software applications.
 Collaborate with team members to brainstorm ideas and solve technical problems.
 Write clean, efficient, and maintainable code following best practices and coding standards.
</p>
                       <label>Role:</label> Software developer Intern &nbsp;&nbsp;&nbsp;
                       <label>Location:</label> Pune
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