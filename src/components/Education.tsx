import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
}

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  
  const educations: EducationItem[] = [
      {
        period: "2019 - 2021",
        title: "M.Tech (CSE)",
        organization: "South Point Institute of Technology",
        description: "Completed Master of Technology in Computer Science Engineering with focus on advanced computing concepts.",
        achievements: [
          "Specialized in Computer Science Engineering",
          "Conducted research projects in advanced computing",
          "Participated in technical seminars and workshops",
          "Completed thesis on computer science innovations"
        ]
      },
      {
        period: "2004 - 2007",
        title: "MCA",
        organization: "MITS Gwalior",
        description: "Completed Master of Computer Applications with comprehensive study of computer science fundamentals.",
        achievements: [
          "In-depth study of programming languages and software development",
          "Participated in various technical competitions",
          "Developed practical software projects",
          "Active member of computer science department activities"
        ]
      },
      {
        period: "2001 - 2004",
        title: "BSc (Electronics)",
        organization: "KRG College, Gwalior",
        description: "Completed Bachelor of Science in Electronics, building strong foundation in hardware and electronic systems.",
        achievements: [
          "Studied core electronics principles and circuits",
          "Hands-on experience with electronic equipment and labs",
          "Participated in technical exhibitions",
          "Completed practical projects in electronics"
        ]
      }
    ];

  // Same useEffect for animations
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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div 
        ref={educationRef} 
        className="container mx-auto px-6 md:px-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-indigo-900">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mb-8"></div>
          
          <div className="relative border-l-2 border-indigo-300 pl-8 ml-6 md:ml-12 space-y-12">
            {educations.map((edu, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-14 mt-1 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-indigo-100">
                  <div className="flex items-center text-indigo-700 mb-2">
                    <Calendar size={18} className="mr-2" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 text-indigo-900">{edu.title}</h3>
                  <h4 className="text-lg text-indigo-700 font-medium mb-3">{edu.organization}</h4>
                  
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  
                  <h5 className="font-semibold mb-2 text-indigo-800">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achieveIdx) => (
                      <li key={achieveIdx} className="flex items-start">
                        <div className="mr-2 text-purple-600 mt-1">•</div>
                        <p className="text-gray-600">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;