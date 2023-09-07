import { useState } from 'react';
import './App.css';
import image1 from "./assets/desktop-image-hero-1.jpg";
import image2 from "./assets/desktop-image-hero-2.jpg";
import image3 from "./assets/desktop-image-hero-3.jpg";
import aboutdark from "./assets/image-about-dark.jpg";
import aboutlight from './assets/image-about-light.jpg';
import iconleft from './assets/icon-angle-left.svg';
import iconright from './assets/icon-angle-right.svg';
import arrow from './assets/icon-arrow.svg';

let screens = [
  image1,
  image2,
  image3
]

let articleheaders = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials"
]

let articleText = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest to you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."

]


function App() {
 const [screen, setScreen] = useState(0);
 const [header, setHeader] = useState(articleheaders[0]);
 const [text, setText] = useState(articleText[0]);  

  const changeBackgroundImage = () => {
      setScreen((screen + 1) % screens.length);
  
     // Update the header and text based on the screen
     setHeader(articleheaders[screen]);
     setText(articleText[screen]);
    }

  return (
    <>
      <div className='main'>
      
       <section className='hero'>
       <nav className='navbar' style={{ background: `url(${screens[screen]})`}}>
       <h4>room</h4> 
       <ul>
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
       </ul>
       </nav>        
      
      
        
        <div className='hero-article'>
        <h1>{header}</h1>
        <p>
         {text}
        </p>
        <span>shop now  <img src={arrow} alt="arrow icon" /> </span>
        
         
        </div>
        <button className='btnleft'>
         <img src={iconleft} alt='left-icon' />
         </button>
         <button className='btnright' onClick={changeBackgroundImage}>
         <img src={iconright} alt='right-icon' />
        </button>


       </section>

      

        <section className='About'>
          <img src={aboutdark} className='about-image' alt="about image" />

          <div className='about-text'>
            <h1>About our Furniture</h1>
            <p>Our multifunctional collection blends design and function to suit your inidividual
              taste. Make each room unique, or pick a cohesive theme that best expresses your interests
              and what inspires you. Find the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available to help you create your dream space. 
            </p>
          </div>

          <img src={aboutlight} className='about-image' alt="about image" />
        </section>
      </div>
              
    </>
  )
}

export default App;
