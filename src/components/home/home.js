import React from 'react'
import './home.css'
function Home() {
  return (
    <div className='home-container'>
      <div className='emoji'><h1> 👋</h1>
      <div className='first-line'>
        <h5>Hey there,</h5>
        <h6>It's nice to meet you😊</h6></div>
      </div>
      <div className='intro'>
        <h3>I'm
        <span>Prasad Suryawanshi,</span>
        <span>a Software developer,</span>
        </h3>
      </div>
     
      <div className='image'>
        <img src={require('./prasad.jpg')} alt='my image' />
      
         <div className='Info'>
        <p>I am a Front-end Developer-cum-tech enthusiast. hands-on experience in UI
           Web and Mobile app development using Javascript Based Frameworks.I have
            developed over time good debugging and error-detecting skills.<br/><br/>

          I am also very eager to pick coding styles and standards worked on by fellow
          developers and re-invent them to suit my use. I have expertise on different Javascript
          frameworks such as Angular 2+ , React JS ,  Vue JS , React Native etc.<br/><br/>

          I have excellent CSS3, HTML5, Javascript and Typescript skills as well.My favorite
          pastime is solving word problems and taking up coding challenges on various platforms
           which also doubles up as a skill sharpening experience for me.I am always up-to date
            with the latest tech news and all the recent technological developments happening in
             the tech world around me.<br/><br/>

          My core strength is that I am always on the look out for new learning whenever i come
           across other websites/tech platforms which i find very appealing and always make it a
            point to learn the 'Why' and 'How' part of it.</p>
      </div>
      </div> 
      
      </div>
 
  
  );
}

export default Home;