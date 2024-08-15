import { useState } from 'react';
import React from 'react';
import  Navbar  from './Components/Navbar/Navbar';
import  Background from './Components/Background/Background';
import Runner from './Components/Runner/Runner'
import Events from './Components/Events/Events'
import Services from './Components/Services/Services'
import Club from './Components/Club/Club'
import Footer from './Components/Footer/Footer'
import Marketplace from './Components/Marketplace/Marketplace'
import Business from './Components/Business/Business'
import Globalsearch from './Components/Globalsearch/Globalsearch';
import Login from './Components/Login/Login';

import './App.css'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Background/>
      <Runner/>
      <Club/>
      <Globalsearch/>
      <Marketplace/>
      <Business/>
      <Events/>
      <Footer/>
    </div>
  );
};

export default App;
