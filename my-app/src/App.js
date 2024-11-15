import './App.css';import React from 'react';

import { Link } from 'react-router-dom'; 
import ReactDOM from 'react-dom/client';

 <style>
</style>
function App() {
  return (
    <div className="App">
    <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ flexGrow: 8 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>i. home</Link>
          </li>
          {/* <li style={{ flexGrow: 8 }}>
            <Link to="/about" style={{ textDecoration: 'none' }}>II. ABOUT</Link>
          </li> */}
          <li style={{ flexGrow: 8 }}>
            <Link to="/works" style={{ textDecoration: 'none' }}>ii. works</Link>
          </li>
          {/* <li style={{ flexGrow: 8 }}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>IV. CONTACT</Link>
          </li> */}
        </ul>
      </nav>


      <header className="App-header">
        
        <div style={{ flexGrow: 1}} className="mainDiv">
          
          <h3 style={{ textAlign: 'center'}}>   Software Engineer <br />& <br />User Interface Developer</h3>
          <p style={{textAlign: 'center', fontSize: '0.75em', fontStyle: 'italic'}}> Driven to build innovative solutions that seamlessly integrate technology and user experience</p>
        
          <div style={{ flexGrow: 1 }} className="links">
            <p>meyang439@gmail.com </p>
            <p>630-506-0903 </p> 
            <p><a href="https://www.linkedin.com/in/meyang2" target="_blank"> www.linkedin.com/in/meyang2 </a></p> 
            <p>US Citizen</p> 
          </div>
        </div> 
        <div style={{ flexGrow: 1}} className="Name">
        <p> 
        <hr />Maxwell Yang</p>

         </div>
        
        <div style={{ flexGrow: 1}} className="aboutme" >
          <p> I'm a full-stack software developer with a passion for innovative design alongside functionality. 
            Learn more about my journey here: showcased through projects, internship, and research. </p>
          </div>
      </header>
      
    </div>
  );
}

export default App;
