import React from 'react';
import Header from './components/Header';
import Intro from './components/Jumbotron';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
