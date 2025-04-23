import React, { useEffect, useRef } from 'react';
import { Users, BookOpen, Award, GraduationCap, Code, Globe } from 'lucide-react';

interface ActivityItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Activities: React.FC = () => {
  const activitiesRef = useRef<HTMLDivElement>(null);
  
  const activities: ActivityItem[] = [
    {
      icon: <Users size={24} className="text-blue-700" />,
      title: "Student Mentorship Program",
      description: "Mentored over 50 undergraduate students in research projects and career development, helping them secure positions in top tech companies and graduate programs."
    },
    {
      icon: <BookOpen size={24} className="text-blue-700" />,
      title: "Curriculum Development Committee",
      description: "Leading member of the curriculum development committee, modernizing computer science courses to include current industry practices and technologies."
    },
    {
      icon: <Code size={24} className="text-blue-700" />,
      title: "Coding Competition Judge",
      description: "Regular judge for national and regional coding competitions, helping to design challenging problems that test algorithmic thinking and programming skills."
    },
    {
      icon: <Award size={24} className="text-blue-700" />,
      title: "Faculty Excellence Award",
      description: "Recipient of the Faculty Excellence Award for outstanding contributions to teaching, research, and student mentorship in the computer science department."
    },
    {
      icon: <GraduationCap size={24} className="text-blue-700" />,
      title: "PhD Thesis Committee",
      description: "Active member of the PhD thesis committee, guiding doctoral students in computer science research and dissertation development."
    },
    {
      icon: <Globe size={24} className="text-blue-700" />,
      title: "International Conference Organization",
      description: "Organizing committee member for international conferences on compiler design and optimization, bringing together researchers from around the world."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Add staggered animation to activity items
          const items = entry.target.querySelectorAll('.activity-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('opacity-100', 'translate-y-0');
              item.classList.remove('opacity-0', 'translate-y-10');
            }, 200 * index);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (activitiesRef.current) {
      observer.observe(activitiesRef.current);
    }

    return () => {
      if (activitiesRef.current) {
        observer.unobserve(activitiesRef.current);
      }
    };
  }, []);

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div 
        ref={activitiesRef} 
        className="container mx-auto px-6 md:px-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2">College Activities</h2>
          <div className="w-20 h-1 bg-blue-700 mb-8"></div>
          
          <p className="text-lg text-gray-600 mb-10">
            Beyond teaching and research, I actively participate in various academic and extracurricular activities
            that enrich the college community and provide valuable experiences for students:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, idx) => (
              <div 
                key={idx} 
                className="activity-item bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 opacity-0 translate-y-10"
              >
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;