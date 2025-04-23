import React, { useEffect, useRef } from 'react';
import { Code, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projectRef = useRef<HTMLDivElement>(null);

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

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  // Dummy data — update these once you share the actual links and project info
  const projects = [
    {
      title: 'Gamics',
      description: 'let play game',
      link: 'https://gamics-theta.vercel.app/'
    },
    {
      title: 'AI powered ',
      description: 'You just share your thoughts we help to build it.',
      link: 'https://rio-world-rust.vercel.app/'
    },
    {
      title: 'Earth-day',
      description: 'OUR POWER, OUR PLANET',
      link: 'https://earth-day-one.vercel.app/'
    },
    {
      title: 'GAMING-ZONE',
      description: 'A inspired website for gamers to explore.',
      link: 'https://gaming-zone-henna.vercel.app/'
    },
    {
      title : 'IWATCH',
      description: 'NETFLIX inspired website integration of ai suggestion.',
      link: 'https://iwatch-opal.vercel.app/'
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div
        ref={projectRef}
        className="container mx-auto px-6 md:px-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-blue-700 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="p-6 border rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Code size={22} className="text-blue-700 mr-3" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  View Project
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
