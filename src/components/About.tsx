import React, { useEffect, useRef } from 'react';
import { School, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div 
        ref={aboutRef} 
        className="container mx-auto px-6 md:px-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-700 mb-8"></div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" 
                alt="Professor Neeharika Sengar"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="md:col-span-2 flex flex-col justify-center">
              <h3 className="text-2xl font-playfair font-semibold mb-4">Professor Neeharika Sengar</h3>
              <p className="text-gray-600 mb-4">
                I am a passionate computer science professor with over 5 years of experience in academia and research. 
                My teaching philosophy centers around bridging theoretical concepts with practical applications, 
                enabling students to develop both a strong foundation and the skills needed for real-world challenges.
              </p>
              <p className="text-gray-600 mb-6">
                My areas of expertise include programming languages (C, C++, Java), database systems, and compiler design. 
                I'm dedicated to continuous learning and research to stay at the forefront of technological advancements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <School size={20} className="text-blue-700" />
                  <span className="font-medium">Pursuing Ph.D. in Computer Science</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award size={20} className="text-blue-700" />
                  <span className="font-medium">Published Researcher</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen size={20} className="text-blue-700" />
                  <span className="font-medium">12+ Years Teaching</span>
               </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Education & Qualifications</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-medium"> Pursuing Ph.D. in Computer Science</h4>
                  {/*  <p className="text-sm text-gray-600"> RAFFLES UNIVERSITY</p> */}
                </div>
              </li>
              <li className="flex">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-medium">M.Tech in Computer Science & Engineering</h4>
                  <p className="text-sm text-gray-600">South Point and Institute of Technology & Management, Sonipat,2010</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-medium">MCA</h4>
                  <p className="text-sm text-gray-600">The Madhav Institute of Technology and Science (MITS), 2007</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-medium">BSC IN  ELECTRONICS <div>
                    <span className="text-sm text-gray-600">KRGC Gwalior, 2004</span>
                  </div></h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;