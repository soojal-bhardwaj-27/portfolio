import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Activities from './components/Activities';
import Projects from './components/Projects1';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-gray-800 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Activities />
        <Projects/>
      </main>
      <Footer />
    </div>
  );
}

export default App;