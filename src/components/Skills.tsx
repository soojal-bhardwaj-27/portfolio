import React, { useEffect, useRef } from 'react';
import { Code, Database, BookOpenCheck, DivideIcon as LucideIcon, Cpu, BarChart } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
}

interface Skill {
  name: string;
  proficiency: number;
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C", proficiency: 95 },
        { name: "C++", proficiency: 90 },
        { name: "Java", proficiency: 85 },
        { name: "Python", proficiency: 75 },
      ]
    },
    {
      name: "Database Systems",
      icon: Database,
      skills: [
        { name: "SQL", proficiency: 90 },
        { name: "Oracle", proficiency: 85 },
        { name: "MySQL", proficiency: 90 },
        { name: "MongoDB", proficiency: 75 },
      ]
    },
    {
      name: "Compiler Design",
      icon: Cpu,
      skills: [
        { name: "Lexical Analysis", proficiency: 90 },
        { name: "Syntax Analysis", proficiency: 85 },
        { name: "Code Generation", proficiency: 80 },
        { name: "Optimization", proficiency: 85 },
      ]
    },
    {
      name: "Data Structures & Algorithms",
      icon: BarChart,
      skills: [
        { name: "Trees & Graphs", proficiency: 90 },
        { name: "Dynamic Programming", proficiency: 85 },
        { name: "Sorting Algorithms", proficiency: 95 },
        { name: "Search Algorithms", proficiency: 90 },
      ]
    },
    {
      name: "Teaching & Research",
      icon: BookOpenCheck,
      skills: [
        { name: "Curriculum Development", proficiency: 85 },
        { name: "Research Methodology", proficiency: 80 },
        { name: "Technical Writing", proficiency: 85 },
        { name: "Student Mentoring", proficiency: 90 },
      ]
    },
    {
      name: "UP-TO-DATE SKILLS",
      icon: BookOpenCheck,
      skills: [
        { name: "Network & Security", proficiency: 85 },
        { name: "Artifical Intelligence", proficiency: 80 },
        { name: "compiler desiging", proficiency: 85 },
        { name: "College Managment ", proficiency: 90 },
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div 
        ref={skillsRef} 
        className="container mx-auto px-6 md:px-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-700 mb-8"></div>
          
          <p className="text-lg text-gray-600 mb-10">
            With over 12 years of teaching experience, I've developed expertise in various programming languages,
            database systems, and compiler design. Here's a breakdown of my technical proficiencies:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <category.icon size={24} className="text-blue-700 mr-3" />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-700 h-2 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;