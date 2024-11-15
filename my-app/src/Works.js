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
          <h3 style={{ textAlign: 'center'}}>   Projects</h3>
        
          <p style={{textAlign: 'center', fontSize: '0.75em', fontStyle: 'italic'}}> Personal projects and collaborations to create interactive and accessible software.  </p>
        
          <div style={{ flexGrow: 1 }} className="links">
            <p> <a href="https://uiucmarketplace.web.illinois.edu/" target="_blank">UIUC Marketplace </a></p>
            <p> <a href="https://docs.google.com/presentation/d/1ziLRudaWANbwwaSUZzfD7-FquoSgNLz5qTdW8mUKtzw/edit?usp=sharing" target="_blank">Regal Raid </a></p>
            {/* <p> Univise  </p>  */}
            <p> <a href="https://www.centraltimes.org/news/2021/11/11/central-times-app-for-ios-and-android/" target="_blank">Central Times Mobile App
            </a></p> 
          </div>
        </div> 

        
        <div style={{ flexGrow: 1}} className="aboutme" >
          <p> From designing award-winning mobile apps and blockchain-integrated games to optimizing databases and building nonprofit websites, I’ve dedicated my journey to making technology more engaging and impactful. <br /><br /><br /><hr /></p>
          </div>



        <div style={{ flexGrow: 1}} className="Name">
        <p> uiuc marketplace</p>
         </div>
         <p> A hub for Illini to effortlessly buy, sell, and connect within the UIUC community.</p>

         <div style={{ flexGrow: 1}} className="Name">
        <p> regal raid</p>
         </div>
         <p> Thrilling platform for strategic battles, combining blockchain innovation with competitive gameplay.</p>
         <div style={{ flexGrow: 1}} className="Name">
        <p> central times</p>
         </div>
         <p> Mobile app bringing Central Times news to your fingertips, designed for on-the-go readers.</p>

      </header>
      
    </div>
  );
}

export default App;
