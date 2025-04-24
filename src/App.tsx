import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Activities from './components/Activities';
import Projects1 from './components/Projects1';  // Fixed import name
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <div className="font-inter text-gray-800 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Activities />
        <Projects1 />  {/* Fixed component name */}
      </main>
      <Footer />
    </div>
  );
}

export default App;