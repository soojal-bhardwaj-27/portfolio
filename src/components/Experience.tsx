import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  
  const experiences: ExperienceItem[] = [
    {
      period: "2018 - 2020",
      title: "Assistant Professor",
      organization: "Indian Institute of Computer Science",
      description: "Taught core programming courses and conducted research in compiler design and optimization.",
      achievements: [
        "Redesigned the database systems course to include modern NoSQL concepts",
        "Started a coding club that grew to 120+ student members",
        "Supervised 8 undergraduate final year projects",
        "Collaborated on a research grant for compiler optimization studies"
      ]
    },
    {
      period: "2015 - 2018",
      title: "Research Fellow",
      organization: "Center for Advanced Computing",
      description: "Conducted doctoral research on compiler optimizations for multicore systems while assisting in undergraduate teaching.",
      achievements: [
        "Completed Ph.D. thesis on 'Optimizing Compilation Techniques for Heterogeneous Computing Systems'",
        "Assisted in teaching 6 different undergraduate courses",
        "Published 3 conference papers on compiler design innovations",
        "Developed a prototype compiler optimization tool that improved execution time by 22%"
      ]
    }
  ];

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-white">
      <div 
        ref={experienceRef} 
        className="container mx-auto px-6 md:px-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-700 mb-8"></div>
          
          <p className="text-lg text-gray-600 mb-10">
            With over 5 years in academia, I've contributed to computer science education and research 
            across several prestigious institutions:
          </p>
          
          <div className="relative border-l-2 border-blue-200 pl-8 ml-6 md:ml-12 space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-14 mt-1 w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center text-blue-700 mb-2">
                    <Calendar size={18} className="mr-2" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-gray-700 font-medium mb-3">{exp.organization}</h4>
                  
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <h5 className="font-semibold mb-2">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achieveIdx) => (
                      <li key={achieveIdx} className="flex">
                        <div className="mr-2 text-blue-700">•</div>
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

export default Experience;