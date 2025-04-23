import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-blue-50">
      <div 
        ref={heroRef} 
        className="container mx-auto px-6 md:px-10 py-20 mt-16 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-1 bg-blue-700 mb-6"></div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight mb-6">
            Bridging <span className="text-blue-700">Computer Science</span> with Academic Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
            Professor and Computer Science specialist with 12+ years of experience. Dedicated to excellence in teaching and research.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="#experience" 
              className="px-8 py-3 border border-gray-300 rounded-md hover:border-blue-700 hover:text-blue-700 transition-colors duration-300"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToAbout}
          className="animate-bounce bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} className="text-blue-700" />
        </button>
      </div>
    </section>
  );
};

export default Hero;