/**
 * Author: Aidan Thrall
 * Date: 3/5/2024
 * 
 * Home Page for Christware website
 */

import React from 'react';

import './Home.css';
  
const Home = () => {
    return( 
        <div className='bodyWrapper'>
          <div className='backgroundImage'>
            <div className='gradientOverlay'>  
            </div>
          </div>
          <div className='titleArea'>
            <div className='titleWrapper'>
              <h1 className='title'>Welcome to Christware</h1>
              <h2>Scripting the future of faith based solutions</h2>
            </div>
          </div>
        </div>
    )
}

export default Home;