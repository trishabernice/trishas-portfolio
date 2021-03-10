import React, { Component } from 'react';

import './App.css';

import Header from './components/atoms/Header';
import Home from './components/molecules/Home';
import About from './components/molecules/About';
import Projects from './components/molecules/Projects';
import Experience from './components/molecules/Experience';
import Contact from './components/molecules/Contact';

class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>    
      </div>
      );
  }
}

export default App;
